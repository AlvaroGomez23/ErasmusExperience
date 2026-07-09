// Week 08 — "The world in one place"
// Loads arrivals2.glb (an arrivals sign + suitcase + location pin + a small
// network of nodes/lines + floating particles) and animates it entirely with
// vanilla Three.js + GSAP. Nested groups keep each animated property isolated
// so idle float / breathing / entrance / parallax never fight over the same
// transform. Runs on the layout's #three-canvas (week-08 sets modelPath).

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;

// ─── Renderer ────────────────────────────────────────────
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);   // fully transparent — cream HTML bg shows through
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();

// Camera sits a touch low → the sign reads taller / more imposing
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 1.0, 7);
camera.lookAt(0, 1.7, 0);

// ─── Premium lighting ────────────────────────────────────
scene.add(new THREE.AmbientLight(0xffffff, 0.95));
// Navy-tinted fill: sky white, ground navy → shadows read as subtle blue, not black
scene.add(new THREE.HemisphereLight(0xffffff, 0x1b3a5c, 0.45));
const key = new THREE.DirectionalLight(0xffffff, 2.3);
key.position.set(5, 8, 5);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
key.shadow.camera.near = 1;
key.shadow.camera.far = 30;
key.shadow.camera.left = -6;
key.shadow.camera.right = 6;
key.shadow.camera.top = 6;
key.shadow.camera.bottom = -6;
key.shadow.bias = -0.0004;
key.shadow.intensity = 0.55;   // softer, semi-transparent shadow (not harsh solid black)
scene.add(key);

// ─── Group hierarchy (one animated property per level) ───
//   tiltGroup    ← mouse parallax (rotation x/y, lerped)
//     entryGroup ← ScrollTrigger entrance (scale + position.y + opacity)
//       floatGroup   ← idle float (position.y)
//         breatheGroup ← idle breathing (rotation.y) + holds the model
const tiltGroup = new THREE.Group();
const entryGroup = new THREE.Group();
const floatGroup = new THREE.Group();
const breatheGroup = new THREE.Group();
tiltGroup.add(entryGroup);
entryGroup.add(floatGroup);
floatGroup.add(breatheGroup);
scene.add(tiltGroup);

// ─── Wrap matched meshes into a pivot-centred group ──────
// Uses attach() so world transforms are preserved on reparent.
function wrap(root: THREE.Object3D, match: (name: string) => boolean, parent: THREE.Object3D): THREE.Group {
  const meshes: THREE.Object3D[] = [];
  root.traverse((o) => { if ((o as THREE.Mesh).isMesh && match(o.name)) meshes.push(o); });
  const group = new THREE.Group();
  parent.add(group);
  if (meshes.length) {
    const box = new THREE.Box3();
    meshes.forEach((m) => box.expandByObject(m));
    const center = box.getCenter(new THREE.Vector3());
    parent.worldToLocal(center);
    group.position.copy(center);
    meshes.forEach((m) => group.attach(m));
  }
  return group;
}

// ─── Animated sub-parts (populated after load) ───────────
let suitcase: THREE.Group | null = null;
let pin: THREE.Group | null = null;
const nodes: THREE.Object3D[] = [];
const lines: THREE.Object3D[] = [];
interface Particle { mesh: THREE.Object3D; radius: number; angle: number; y: number; orbit: number; sx: number; sy: number; sz: number; }
const particles: Particle[] = [];

const loader = new GLTFLoader();
loader.load('/models/arrivals2.glb', (gltf) => {
  const model = gltf.scene;

  // Fit: centre the model, scale to a consistent height, sit its base at y = 0
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const s = 3.6 / size.y;
  model.scale.setScalar(s);
  model.position.set(-center.x * s, -(center.y - size.y / 2) * s, -center.z * s);

  // Shadows: everything casts, the base platform receives
  model.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh) return;
    m.castShadow = true;
    if (o.name === 'Base_Platform') { m.receiveShadow = true; m.castShadow = false; }
  });

  breatheGroup.add(model);

  // Suitcase + pin → their own pivot groups (reparented out of the model)
  suitcase = wrap(model, (n) => n.startsWith('Suitcase_'), breatheGroup);
  pin = wrap(model, (n) => n.startsWith('Pin_'), breatheGroup);

  // Network nodes (pulse) and lines (grow in on entrance)
  model.traverse((o) => {
    if (o.name.startsWith('Network_Node_')) nodes.push(o);
    if (o.name.startsWith('Network_Line_')) { o.scale.y = 0; lines.push(o); }
  });

  // Particles → reparent to breatheGroup, remember polar position + spin.
  // Dark particles orbit slightly faster than the light ones.
  const pMeshes: THREE.Object3D[] = [];
  model.traverse((o) => { if (o.name.startsWith('Particle_')) pMeshes.push(o); });
  pMeshes.forEach((m) => {
    breatheGroup.attach(m);
    const matName = ((m as THREE.Mesh).material as THREE.Material)?.name ?? '';
    const dark = matName.includes('Dark');
    particles.push({
      mesh: m,
      radius: Math.hypot(m.position.x, m.position.z),
      angle: Math.atan2(m.position.z, m.position.x),
      y: m.position.y,
      orbit: (dark ? 0.24 : 0.14) * (0.85 + Math.random() * 0.3),
      sx: (Math.random() - 0.5) * 1.4,
      sy: (Math.random() - 0.5) * 1.4,
      sz: (Math.random() - 0.5) * 1.4,
    });
  });

  startIdle();
  startEntrance();
});

// ─── 1. Idle loops (infinite) ────────────────────────────
function startIdle() {
  // Global float
  gsap.to(floatGroup.position, { y: '+=0.18', duration: 6.5, ease: 'power1.inOut', repeat: -1, yoyo: true });
  // Breathing — micro Y rotation, async (different duration)
  gsap.to(breatheGroup.rotation, { y: 0.02, duration: 5.2, ease: 'power1.inOut', repeat: -1, yoyo: true });

  if (suitcase) {
    gsap.fromTo(suitcase.rotation, { z: -0.018 }, { z: 0.018, duration: 3.4, ease: 'sine.inOut', repeat: -1, yoyo: true });
  }
  if (pin) {
    const baseY = pin.position.y;
    gsap.to(pin.position, { y: baseY + 0.09, duration: 1.8, ease: 'elastic.out(1, 0.55)', repeat: -1, yoyo: true });
  }
  if (nodes.length) {
    // Sequential pulse → reads as an active network
    gsap.to(nodes.map((n) => n.scale), {
      x: 1.12, y: 1.12, z: 1.12,
      duration: 1.1, ease: 'sine.inOut', repeat: -1, yoyo: true,
      stagger: { each: 0.18, repeat: -1, yoyo: true },
    });
  }
}

// ─── 2. Entrance (ScrollTrigger, plays once on the Hero) ─
function startEntrance() {
  gsap.set(canvas, { opacity: 0 });
  gsap.set(entryGroup.scale, { x: 0.85, y: 0.85, z: 0.85 });
  entryGroup.position.y = -0.8;

  const tl = gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top 85%', once: true } });
  tl.to(canvas, { opacity: 1, duration: 1.4, ease: 'power3.out' }, 0)
    .to(entryGroup.scale, { x: 1, y: 1, z: 1, duration: 1.4, ease: 'power3.out' }, 0)
    .to(entryGroup.position, { y: 0, duration: 1.4, ease: 'power3.out' }, 0);

  // Network lines grow along their length right as the entrance settles
  if (lines.length) {
    tl.to(lines.map((l) => l.scale), { y: 1, duration: 0.6, ease: 'power2.out', stagger: 0.05 }, '-=0.35');
  }
}

// ─── 3. Mouse parallax (lerped, clamped to ±0.05 rad) ────
const MAX_TILT = 0.05;
let targetRX = 0, targetRY = 0;
function onMouseMove(e: MouseEvent) {
  targetRY = (e.clientX / window.innerWidth - 0.5) * 2 * MAX_TILT;
  targetRX = (e.clientY / window.innerHeight - 0.5) * 2 * MAX_TILT;
}
window.addEventListener('mousemove', onMouseMove);

// ─── Render loop ─────────────────────────────────────────
const clock = new THREE.Clock();
let rafId = 0;
(function tick() {
  rafId = requestAnimationFrame(tick);
  const dt = clock.getDelta();
  const t = clock.elapsedTime;

  // Parallax lerp
  tiltGroup.rotation.x += (targetRX - tiltGroup.rotation.x) * 0.05;
  tiltGroup.rotation.y += (targetRY - tiltGroup.rotation.y) * 0.05;

  // Particles: spin on own axes + orbit the set at desynced speeds
  for (const p of particles) {
    p.angle += p.orbit * dt;
    p.mesh.position.x = Math.cos(p.angle) * p.radius;
    p.mesh.position.z = Math.sin(p.angle) * p.radius;
    p.mesh.position.y = p.y + Math.sin(t * 0.6 + p.radius) * 0.04;
    p.mesh.rotation.x += p.sx * dt;
    p.mesh.rotation.y += p.sy * dt;
    p.mesh.rotation.z += p.sz * dt;
  }

  renderer.render(scene, camera);
})();

// ─── Resize ──────────────────────────────────────────────
function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}
window.addEventListener('resize', onResize);

// ─── Cleanup on Astro client-side navigation ─────────────
document.addEventListener('astro:before-swap', () => {
  cancelAnimationFrame(rafId);
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('resize', onResize);
  ScrollTrigger.getAll().forEach((st) => st.kill());
  renderer.dispose();
}, { once: true });

// ─── Arrivals board: flip the split-flap rows on scroll ──
const board = document.querySelector('.arrivals-board');
if (board) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { board.classList.add('in-view'); io.disconnect(); }
      });
    },
    { threshold: 0.35 }
  );
  io.observe(board);
}
