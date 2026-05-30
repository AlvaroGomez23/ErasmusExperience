import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);

// ─── SUN GLB (hero canvas) ────────────────────────────
{
  const heroCanvas = document.getElementById('three-canvas') as HTMLCanvasElement;
  const modelPath  = heroCanvas.dataset.model as string;
  const primary    = new THREE.Color(heroCanvas.dataset.primary as string);

  const hScene  = new THREE.Scene();
  const hCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
  hCamera.position.z = 8;

  const hRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });
  hRenderer.setSize(window.innerWidth, window.innerHeight);
  hRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  hRenderer.outputColorSpace = THREE.SRGBColorSpace;

  hScene.add(new THREE.AmbientLight(0xffffff, 1.0));
  const sunLight = new THREE.DirectionalLight(0xFFD700, 2.0);
  sunLight.position.set(5, 8, 6);
  hScene.add(sunLight);
  const fillLight = new THREE.DirectionalLight(primary, 0.6);
  fillLight.position.set(-5, -3, -4);
  hScene.add(fillLight);

  let sunModel: THREE.Group | null = null;
  new GLTFLoader().load(modelPath, (gltf) => {
    sunModel = gltf.scene;
    const box    = new THREE.Box3().setFromObject(sunModel);
    const center = box.getCenter(new THREE.Vector3());
    sunModel.position.sub(center);
    const maxDim = Math.max(...box.getSize(new THREE.Vector3()).toArray());
    sunModel.scale.setScalar(5 / maxDim);
    hScene.add(sunModel);
  });

  const PARTICLE_COUNT = 1800;
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const r     = 4 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const hParticles = new THREE.Points(pGeo, new THREE.PointsMaterial({
    size: 0.035, color: primary, transparent: true, opacity: 0.4,
  }));
  hScene.add(hParticles);

  let tx = 0, ty = 0;
  window.addEventListener('mousemove', (e) => {
    tx =  (e.clientX / window.innerWidth  - 0.5) * 1.5;
    ty = -(e.clientY / window.innerHeight - 0.5) * 1.5;
  });

  const hClock = new THREE.Clock();
  (function hTick() {
    requestAnimationFrame(hTick);
    const t = hClock.getElapsedTime();
    if (sunModel) {
      sunModel.rotation.y  = t * 0.25;
      sunModel.rotation.z  = Math.sin(t * 0.4) * 0.08;
    }
    hParticles.rotation.y = t * 0.04;
    hCamera.position.x += (tx - hCamera.position.x) * 0.05;
    hCamera.position.y += (ty - hCamera.position.y) * 0.05;
    hCamera.lookAt(0, 0, 0);
    hRenderer.render(hScene, hCamera);
  })();

  window.addEventListener('resize', () => {
    hCamera.aspect = window.innerWidth / window.innerHeight;
    hCamera.updateProjectionMatrix();
    hRenderer.setSize(window.innerWidth, window.innerHeight);
    hRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}

// ─── WATER RIPPLE BACKGROUND ──────────────────────────
{
  const waterCanvas = document.getElementById('water-canvas') as HTMLCanvasElement;
  // Move out of .week-content (z-index:10 stacking context) so z-index:-1 is root-relative
  document.body.insertBefore(waterCanvas, document.getElementById('three-canvas'));
  const wScene    = new THREE.Scene();
  const wCamera   = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const wRenderer = new THREE.WebGLRenderer({ canvas: waterCanvas, alpha: true });
  wRenderer.setSize(window.innerWidth, window.innerHeight);
  wRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  const N           = 12;
  const rippleUVs   = Array.from({ length: N }, () => new THREE.Vector2(-2, -2));
  const rippleTimes = new Float32Array(N).fill(-10);
  let   nextSlot    = 0;

  const waterMat = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uTime:        { value: 0 },
      uRipples:     { value: rippleUVs },
      uRippleTimes: { value: rippleTimes },
      uAspect:      { value: window.innerWidth / window.innerHeight },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
    `,
    fragmentShader: `
      precision mediump float;
      uniform float uTime;
      uniform vec2  uRipples[12];
      uniform float uRippleTimes[12];
      uniform float uAspect;
      varying vec2  vUv;

      void main() {
        vec2 uv = vec2(vUv.x * uAspect, vUv.y);
        float w = 0.0;

        // Ambient river motion
        w += sin(uv.x * 4.0 + uTime * 0.40) * sin(uv.y * 3.2 + uTime * 0.30) * 0.040;
        w += sin(uv.x * 7.5 - uTime * 0.55 + uv.y * 5.0)                     * 0.025;
        w += cos(uv.x * 5.2 + uv.y * 8.1  - uTime * 0.38)                    * 0.018;

        // Interactive ripples
        for (int i = 0; i < 12; i++) {
          float age = uTime - uRippleTimes[i];
          if (age < 0.0 || age > 3.5) continue;
          vec2  rp   = vec2(uRipples[i].x * uAspect, uRipples[i].y);
          float d    = distance(uv, rp);
          float r    = age * 0.38;
          float hw   = 0.07;
          float ring = 1.0 - smoothstep(0.0, hw, abs(d - r));
          float fade = exp(-age * 1.3);
          w += sin((d - r) / hw * 3.14159) * ring * fade * 0.22;
        }

        vec3 deep    = vec3(0.10, 0.38, 0.50);
        vec3 shallow = vec3(0.52, 0.82, 0.88);
        vec3 crest   = vec3(1.00, 0.95, 0.85);
        vec3 col     = mix(deep, shallow, clamp(0.4 + w * 2.5, 0.0, 1.0));
        col          = mix(col, crest,   clamp((w - 0.06) * 5.0, 0.0, 1.0));

        gl_FragColor = vec4(col, 0.55);
      }
    `,
  });

  wScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), waterMat));

  function spawnRipple(nx: number, ny: number) {
    rippleUVs[nextSlot].set(nx, ny);
    rippleTimes[nextSlot] = waterMat.uniforms.uTime.value as number;
    nextSlot = (nextSlot + 1) % N;
  }

  let lastScrollRipple = 0;
  window.addEventListener('scroll', () => {
    const t = performance.now();
    if (t - lastScrollRipple < 350) return;
    lastScrollRipple = t;
    spawnRipple(Math.random(), 0.2 + Math.random() * 0.6);
  }, { passive: true });

  window.addEventListener('resize', () => {
    wRenderer.setSize(window.innerWidth, window.innerHeight);
    waterMat.uniforms.uAspect.value = window.innerWidth / window.innerHeight;
  });

  const wClock = new THREE.Clock();
  (function wTick() {
    requestAnimationFrame(wTick);
    waterMat.uniforms.uTime.value = wClock.getElapsedTime();
    wRenderer.render(wScene, wCamera);
  })();
}

// ─── INTERACTIVE CANVAS ──────────────────────────────
const canvas = document.getElementById('interact-canvas') as HTMLCanvasElement;

const CANVAS_H = 420;
const CANVAS_W = canvas.offsetWidth || window.innerWidth;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, CANVAS_W / CANVAS_H, 0.1, 100);
camera.position.z = 5.5;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(CANVAS_W, CANVAS_H);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const COLOR = new THREE.Color('#FF6B35');

const meshDefs = [
  { geo: new THREE.IcosahedronGeometry(1.5, 0),           x: -2.8, y: 0 },
  { geo: new THREE.TorusKnotGeometry(1.0, 0.32, 80, 12),  x:  0,   y: 0 },
  { geo: new THREE.OctahedronGeometry(1.5),               x:  2.8, y: 0 },
];

const meshes = meshDefs.map(({ geo, x, y }) => {
  const mat  = new THREE.MeshBasicMaterial({ color: COLOR, wireframe: true, transparent: true, opacity: 0.75 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, 0);
  scene.add(mesh);
  return mesh;
});

// ─── DRAG TO ROTATE ──────────────────────────────────
const raycaster = new THREE.Raycaster();
const pointer   = new THREE.Vector2();

let dragging: THREE.Mesh | null = null;
let lastX = 0, lastY = 0;

function toNDC(clientX: number, clientY: number) {
  const rect  = canvas.getBoundingClientRect();
  pointer.x =  ((clientX - rect.left) / rect.width)  * 2 - 1;
  pointer.y = -((clientY - rect.top)  / rect.height) * 2 + 1;
}

function pickAt(clientX: number, clientY: number): THREE.Mesh | null {
  toNDC(clientX, clientY);
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(meshes);
  return hits.length ? (hits[0].object as THREE.Mesh) : null;
}

canvas.addEventListener('mousedown', (e) => {
  const hit = pickAt(e.clientX, e.clientY);
  if (hit) { dragging = hit; lastX = e.clientX; lastY = e.clientY; }
});
window.addEventListener('mousemove', (e) => {
  if (!dragging) return;
  dragging.rotation.y += (e.clientX - lastX) * 0.013;
  dragging.rotation.x += (e.clientY - lastY) * 0.013;
  lastX = e.clientX; lastY = e.clientY;
});
window.addEventListener('mouseup', () => { dragging = null; });

canvas.addEventListener('touchstart', (e) => {
  const t   = e.touches[0];
  const hit = pickAt(t.clientX, t.clientY);
  if (hit) { dragging = hit; lastX = t.clientX; lastY = t.clientY; }
}, { passive: true });
window.addEventListener('touchmove', (e) => {
  if (!dragging) return;
  const t = e.touches[0];
  dragging.rotation.y += (t.clientX - lastX) * 0.013;
  dragging.rotation.x += (t.clientY - lastY) * 0.013;
  lastX = t.clientX; lastY = t.clientY;
}, { passive: true });
window.addEventListener('touchend', () => { dragging = null; });

// ─── TICK ────────────────────────────────────────────
(function tick() {
  requestAnimationFrame(tick);
  meshes.forEach((mesh, i) => {
    if (mesh !== dragging) {
      mesh.rotation.y += 0.004 + i * 0.0015;
      mesh.rotation.x += 0.002;
    }
  });
  renderer.render(scene, camera);
})();

window.addEventListener('resize', () => {
  const w = canvas.offsetWidth || window.innerWidth;
  renderer.setSize(w, CANVAS_H);
  camera.aspect = w / CANVAS_H;
  camera.updateProjectionMatrix();
});

// ─── DRAW SVG ────────────────────────────────────────
const drawText = document.querySelector<SVGTextElement>('.draw-text');
if (drawText) {
  document.fonts.ready.then(() => {
    const len = drawText.getComputedTextLength();
    gsap.set(drawText, { strokeDasharray: len, strokeDashoffset: len });
    gsap.to(drawText, {
      strokeDashoffset: 0,
      duration: 4,
      ease: 'power2.inOut',
      scrollTrigger: { trigger: '.draw-svg-wrapper', start: 'top 80%', toggleActions: 'play none none none' },
    });
  });
}

// ─── TYPING TEXT ─────────────────────────────────────
const typingText = document.getElementById('typing-text') as HTMLElement;
const frase = 'We also learnt how to animate text, such as this "typing" animation, move, and make elements appear and disappear, among other things. This knowledge will allow us to create more attractive web pages like this one.';
const state = { n: 0 };

typingText.style.color = '#FF6B35';

gsap.timeline({
  scrollTrigger: { trigger: typingText, start: 'top 80%', toggleActions: 'play none none none' },
}).to(state, {
  n: frase.length,
  duration: 4,
  ease: 'none',
  onUpdate()   { typingText.textContent = frase.slice(0, Math.round(state.n)); },
  onComplete() { gsap.to(typingText, { color: '#FF6B35', duration: 0.6 }); },
});


const temperature = document.getElementById('temperature');

gsap.to(temperature, {
  scale: 1.2,
  color: '#ff0000',
  duration: 0.8,
  ease: 'power2.inOut',
  scrollTrigger: { trigger: temperature, start: 'top 80%', toggleActions: 'play none none none' },
});