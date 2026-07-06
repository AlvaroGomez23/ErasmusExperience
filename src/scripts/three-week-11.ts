// Week 11 — the departure. Takeoff + the whole journey behind it.
// Idle the plane sits low and level (one gentle bob). As you scroll it
// pitches its nose up, climbs up-and-right, and shrinks — leaving. Along
// the way it drops 11 glowing dots (one per week, each week's colour): the
// constellation of the trip. The sky light also cycles through all 11
// week colours as the plane climbs, replaying the journey in colour.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { weeks } from '../data/weeks';

gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;
const color  = new THREE.Color(canvas.dataset.primary as string);
const modelPath = canvas.dataset.model as string;

// Journey colours (week 01 → 11), single source of truth.
const journey = weeks.map((w) => new THREE.Color(w.primaryColor));

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.z = 9;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 0.85));
const sun  = new THREE.DirectionalLight(0xffffff, 1.8); sun.position.set(5, 8, 6);   scene.add(sun);
const fill = new THREE.DirectionalLight(color.clone(), 0.7); fill.position.set(-5, -3, -4); scene.add(fill);

// Flight path — the plane's trajectory as a function of progress p (0→1).
function pathAt(p: number, out: THREE.Vector3) {
  out.set(p * 4, -1 + p * 5, -p * 7);
  return out;
}

// ─── Soft radial glow sprite texture (shared by every trail dot) ───
function makeGlowTexture(): THREE.Texture {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0,   'rgba(255,255,255,1)');
  g.addColorStop(0.25,'rgba(255,255,255,0.85)');
  g.addColorStop(0.5, 'rgba(255,255,255,0.35)');
  g.addColorStop(1,   'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.Texture(c);
  tex.needsUpdate = true;
  return tex;
}
const glowTex = makeGlowTexture();

// ─── Trail: 11 glowing dots along the flight path, one per week colour ───
type Dot = { sprite: THREE.Sprite; trigger: number };
const dots: Dot[] = [];
const tmp = new THREE.Vector3();
journey.forEach((wc, i) => {
  const trigger = journey.length > 1 ? i / (journey.length - 1) : 0;   // p at which it appears
  const mat = new THREE.SpriteMaterial({
    map: glowTex, color: wc.clone(), transparent: true,
    blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0,
  });
  const sprite = new THREE.Sprite(mat);
  // Freeze the dot where the plane was when p === trigger, nudged for spread.
  pathAt(trigger, tmp);
  sprite.position.copy(tmp);
  sprite.position.x += (i % 2 === 0 ? -0.6 : 0.6);
  sprite.position.y += Math.sin(i * 1.7) * 0.35;
  sprite.scale.setScalar(0.9);
  scene.add(sprite);
  dots.push({ sprite, trigger });
});

let plane: THREE.Group | null = null;
let baseScale = 1;

new GLTFLoader().load(modelPath, (gltf) => {
  plane = gltf.scene;
  const box    = new THREE.Box3().setFromObject(plane);
  const center = box.getCenter(new THREE.Vector3());
  plane.position.sub(center);
  const maxDim = Math.max(...box.getSize(new THREE.Vector3()).toArray());
  baseScale = 9 / maxDim;            // big and readable
  plane.scale.setScalar(baseScale);
  scene.add(plane);
});

// Faint sky specks (subtle, non-distracting)
const PARTICLE_COUNT = 900;
const pos = new Float32Array(PARTICLE_COUNT * 3);
for (let i = 0; i < PARTICLE_COUNT; i++) {
  const r     = 6 + Math.random() * 8;
  const theta = Math.random() * Math.PI * 2;
  const phi   = Math.acos(2 * Math.random() - 1);
  pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
  pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  pos[i * 3 + 2] = r * Math.cos(phi);
}
const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
const pMat = new THREE.PointsMaterial({ size: 0.03, color: color.clone(), transparent: true, opacity: 0.28 });
const particles = new THREE.Points(pGeo, pMat);
scene.add(particles);

let tx = 0, ty = 0;
window.addEventListener('mousemove', (e) => {
  tx =  (e.clientX / window.innerWidth  - 0.5) * 1.0;
  ty = -(e.clientY / window.innerHeight - 0.5) * 1.0;
});

// Takeoff progress (0 = on the ground, 1 = gone). Driven by scroll.
const fly = { p: 0 };
gsap.to(fly, {
  p: 1,
  ease: 'power2.in',
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', pin: true, scrub: 1 },
});

// Reusable colours for the per-frame journey tint (avoids allocations).
const tintA = new THREE.Color();
const tintB = new THREE.Color();
const tint  = new THREE.Color();

const clock = new THREE.Clock();
(function tick() {
  requestAnimationFrame(tick);
  const t = clock.getElapsedTime();
  const p = fly.p;

  // Journey colour: lerp across all 11 week colours as the plane climbs.
  const seg = p * (journey.length - 1);
  const idx = Math.min(journey.length - 2, Math.floor(seg));
  tintA.copy(journey[idx]);
  tintB.copy(journey[idx + 1]);
  tint.copy(tintA).lerp(tintB, seg - idx);
  fill.color.copy(tint);
  pMat.color.copy(tint);

  particles.rotation.y = t * 0.02;
  particles.position.y = -p * 3;                       // ground drops away

  // Reveal trail dots as the plane passes each week, and make them twinkle.
  for (const d of dots) {
    const target = p > d.trigger ? 0.9 : 0;
    const m = d.sprite.material as THREE.SpriteMaterial;
    m.opacity += (target - m.opacity) * 0.08;
    d.sprite.scale.setScalar(0.9 + Math.sin(t * 2 + d.trigger * 10) * 0.12);
  }

  if (plane) {
    // low & level on the ground → climbs up-and-right into the distance
    pathAt(p, plane.position);
    plane.position.y += Math.sin(t * 0.9) * 0.06;       // tiny idle bob
    plane.rotation.x = -p * 0.5;                        // nose pitches up
    plane.rotation.y = 0.55 - p * 0.35;                 // 3/4 view, turning away
    plane.rotation.z = -p * 0.25;                       // slight bank
    plane.scale.setScalar(baseScale * (1 - p * 0.72));  // shrink toward a dot
  }

  camera.position.x += (tx - camera.position.x) * 0.05;
  camera.position.y += (ty - camera.position.y) * 0.05;
  camera.lookAt(0, 0, 0);
  renderer.render(scene, camera);
})();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
