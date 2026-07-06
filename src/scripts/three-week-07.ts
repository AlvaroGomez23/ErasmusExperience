// Week 07 — "Goodbyes and the road home"
// Car drives forward as you scroll. Friends (BlockMan) are dropped along the
// road and fade out behind. The House glows when the car finally arrives.

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);

const canvas  = document.getElementById('three-canvas') as HTMLCanvasElement;
const primary = new THREE.Color(canvas.dataset.primary as string);
const warm    = new THREE.Color('#E8B25A');

// ─── Scene layout (forward = -Z) ─────────────────────────
const CAR_TRAVEL = 50;          // how far the car drives over the whole scroll
const FIGURE_Z   = [-12, -22, -32, -42];
const HOUSE_Z    = -58;
const ROAD_LEN   = 64;

const scene  = new THREE.Scene();
scene.fog    = new THREE.Fog(0xeef2f7, 24, 70);

const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 200);

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;

// Lights — soft, overcast, a touch melancholic
scene.add(new THREE.AmbientLight(0xffffff, 0.85));
const key  = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(6, 10, 4); scene.add(key);
const rim  = new THREE.DirectionalLight(primary, 0.5);  rim.position.set(-6, 3, -8); scene.add(rim);

// Warm glow living inside the house (intensity ramps at arrival)
const houseLight = new THREE.PointLight(warm, 0, 22, 1.6);
houseLight.position.set(0, 2.5, HOUSE_Z + 1);
scene.add(houseLight);

// ─── Fit helper: scale + sit base on the road (y = 0) ────
function fit(obj: THREE.Object3D, target: number, axis: 'x' | 'y' | 'max') {
  const box    = new THREE.Box3().setFromObject(obj);
  const size   = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const s = axis === 'x' ? target / size.x
          : axis === 'y' ? target / size.y
          : target / Math.max(size.x, size.y, size.z);
  obj.scale.setScalar(s);
  obj.position.x = -center.x * s;
  obj.position.z = -center.z * s;
  const baseY = -(center.y - size.y / 2) * s;   // lowest point → y = 0
  obj.position.y = baseY;
  return { s, size, baseY, depth: size.z * s };
}

// Make every material on an object independently fade-able
function makeFadeable(obj: THREE.Object3D) {
  obj.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh) return;
    const src = m.material as THREE.Material | THREE.Material[];
    m.material = Array.isArray(src) ? src.map((x) => x.clone()) : src.clone();
    (Array.isArray(m.material) ? m.material : [m.material]).forEach((mat) => {
      mat.transparent = true;
    });
  });
}
function setOpacity(obj: THREE.Object3D, v: number) {
  obj.visible = v > 0.02;
  obj.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh) return;
    (Array.isArray(m.material) ? m.material : [m.material]).forEach((mat) => {
      (mat as THREE.Material).opacity = v;
    });
  });
}

const loader = new GLTFLoader();
const load = (path: string) => new Promise<THREE.Group>((res) =>
  loader.load(path, (g) => res(g.scene)));

let car: THREE.Group | null = null;
let carBaseY = 0;
const figures: THREE.Group[] = [];

Promise.all([
  load('/models/Car.glb'),
  load('/models/Roa_block.glb'),
  load('/models/BlockMan.glb'),
  load('/models/House.glb'),
]).then(([carM, roadM, manM, houseM]) => {
  // Road — tile one block forward to make a long ribbon
  const rInfo = fit(roadM, 7, 'x');
  const TILE_OVERLAP = 0.99;               // ← nudge to close the seam (lower = tighter)
  const tileDepth = Math.max(rInfo.depth, 2) * TILE_OVERLAP;
  const tiles = Math.ceil(ROAD_LEN / tileDepth) + 2;
  const roadY = roadM.position.y;
  for (let i = 0; i < tiles; i++) {
    const tile = roadM.clone(true);
    tile.position.set(0, roadY, 4 - i * tileDepth);
    scene.add(tile);
  }

  // Car
  fit(carM, 3.4, 'max');
  carBaseY = carM.position.y;
  carM.rotation.y = Math.PI;          // face down the road (-Z); flip if backwards
  scene.add(carM);
  car = carM;

  // Figures — dropped along the roadside, alternating sides
  const mInfo = fit(manM, 1.9, 'y');
  FIGURE_Z.forEach((z, i) => {
    const fig = manM.clone(true);
    makeFadeable(fig);
    fig.position.set(i % 2 ? 2.6 : -2.6, mInfo.baseY, z);
    fig.rotation.y = i % 2 ? -Math.PI / 2 : Math.PI / 2;  // face the road
    // Warm glow so they read as gentle "souls", not creepy statues
    fig.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      (Array.isArray(m.material) ? m.material : [m.material]).forEach((mat) => {
        const s = mat as THREE.MeshStandardMaterial;
        if ('emissive' in s) { s.emissive = warm.clone(); s.emissiveIntensity = 0.3; }
      });
    });
    fig.userData = { baseY: mInfo.baseY, phase: i * 1.7 };
    scene.add(fig);
    figures.push(fig);
  });

  // House at the end of the road
  const hInfo = fit(houseM, 8, 'max');
  houseM.position.set(1, hInfo.baseY, HOUSE_Z);
  scene.add(houseM);
});

// ─── Dust particles drifting low over the road ───────────
const DUST = 600;
const dpos = new Float32Array(DUST * 3);
for (let i = 0; i < DUST; i++) {
  dpos[i * 3]     = (Math.random() - 0.5) * 24;
  dpos[i * 3 + 1] = Math.random() * 6;
  dpos[i * 3 + 2] = -Math.random() * ROAD_LEN;
}
const dGeo = new THREE.BufferGeometry();
dGeo.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
const dust = new THREE.Points(dGeo, new THREE.PointsMaterial({ size: 0.045, color: primary, transparent: true, opacity: 0.35 }));
scene.add(dust);

// ─── Scroll progress 0→1 over the whole page ─────────────
const prog = { p: 0 };
gsap.to(prog, {
  p: 1,
  ease: 'none',
  scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 1.8 },
});

let tx = 0;
window.addEventListener('mousemove', (e) => { tx = (e.clientX / window.innerWidth - 0.5) * 2; });

const clock = new THREE.Clock();
(function tick() {
  requestAnimationFrame(tick);
  const t = clock.getElapsedTime();
  const p = prog.p;

  dust.rotation.y = t * 0.01;

  if (car) {
    const cz = -CAR_TRAVEL * p;
    car.position.z = cz;
    car.position.y = carBaseY + Math.sin(t * 4) * 0.015;   // engine idle wobble

    // Friends bob gently, then drift up + spin away as the car leaves
    figures.forEach((fig) => {
      const gap  = fig.position.z - cz;                    // >0 = behind the car
      const fade = 1 - THREE.MathUtils.clamp((gap - 2) / 9, 0, 1);
      setOpacity(fig, fade);
      const gone = 1 - fade;                               // 0 waiting → 1 departed
      fig.position.y = fig.userData.baseY
        + gone * 4                                         // rise into the sky
        + Math.sin(t * 1.6 + fig.userData.phase) * 0.08;   // idle bob
      fig.rotation.y += gone * 0.01;                       // slow drift spin
    });

    // Chase cam: behind + above the car, looking down the road
    const camGoal = new THREE.Vector3(tx * 0.6, carBaseY + 3.2, cz + 7);
    camera.position.lerp(camGoal, 0.08);
    camera.lookAt(0, 1, cz - 9);
  }

  // House glow ramps up in the final stretch
  const glow = THREE.MathUtils.clamp((p - 0.8) / 0.2, 0, 1);
  houseLight.intensity = glow * 7;

  renderer.render(scene, camera);
})();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
