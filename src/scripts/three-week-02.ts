import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

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
const clock = new THREE.Clock();
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
const frase = 'We also learnt how to animate text, such as this “typing” animation, move, and make elements appear and disappear, among other things. This knowledge will allow us to create more attractive web pages like this one.';
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
