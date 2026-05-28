import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);

const canvas    = document.getElementById('three-canvas') as HTMLCanvasElement;
const modelPath = canvas.dataset.model as string;
const color     = new THREE.Color(canvas.dataset.primary as string);

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.z = 8;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 0.8));
const sun = new THREE.DirectionalLight(0xffffff, 1.8); sun.position.set(5, 8, 6);  scene.add(sun);
const fill = new THREE.DirectionalLight(color, 0.5);   fill.position.set(-5, -3, -4); scene.add(fill);

// Overlay canvas for the path plane (z-index 50, above all content)
const pathCanvas   = document.getElementById('path-plane-canvas') as HTMLCanvasElement | null;
const pathScene    = pathCanvas ? new THREE.Scene() : null;
const pathRenderer = pathCanvas ? (() => {
  const r = new THREE.WebGLRenderer({ canvas: pathCanvas!, alpha: true, antialias: true });
  r.setSize(window.innerWidth, window.innerHeight);
  r.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  r.outputColorSpace = THREE.SRGBColorSpace;
  return r;
})() : null;
if (pathScene) {
  pathScene.add(new THREE.AmbientLight(0xffffff, 0.8));
  const ps = new THREE.DirectionalLight(0xffffff, 1.8); ps.position.set(5, 8, 6);   pathScene.add(ps);
  const pf = new THREE.DirectionalLight(color, 0.5);    pf.position.set(-5, -3, -4); pathScene.add(pf);
}

let plane:     THREE.Group | null = null;
let pathPlane: THREE.Group | null = null;

new GLTFLoader().load(modelPath, (gltf) => {
  plane = gltf.scene;
  const box    = new THREE.Box3().setFromObject(plane);
  const center = box.getCenter(new THREE.Vector3());
  plane.position.sub(center);
  const maxDim = Math.max(...box.getSize(new THREE.Vector3()).toArray());
  plane.scale.setScalar(5 / maxDim);
  plane.rotation.x = 0.08;
  plane.rotation.y = 0.3;
  scene.add(plane);

  if (pathScene) {
    pathPlane = gltf.scene.clone(true);
    pathPlane.scale.setScalar(1.6 / maxDim);
    pathScene.add(pathPlane);
  }
});

// Particles
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
const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.035, color, transparent: true, opacity: 0.4 }));
scene.add(particles);

let tx = 0, ty = 0;
window.addEventListener('mousemove', (e) => {
  tx =  (e.clientX / window.innerWidth  - 0.5) * 1.5;
  ty = -(e.clientY / window.innerHeight - 0.5) * 1.5;
});

// Main plane scroll approach
const scroll = { x: -10, y: 1.5, z: -2, ry: 1.3, rz: -0.28 };

// Small path plane S-curve (world-space waypoints)
const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-9.5,  2.0,  2),
  new THREE.Vector3(-3,    3.2,  0),
  new THREE.Vector3( 2,    2.5, -1),
  new THREE.Vector3( 8,    0.8,  1),
  new THREE.Vector3( 5,   -1.5,  2),
  new THREE.Vector3( 0,   -2.0,  3),
  new THREE.Vector3(-6,   -1.5,  2),
  new THREE.Vector3(-8,    0.8,  1),
  new THREE.Vector3( 0,    2.2,  0),
  new THREE.Vector3(10.5,  1.0,  1),
]);
const pathObj = { t: 0 };

const clock = new THREE.Clock();
(function tick() {
  requestAnimationFrame(tick);
  const t = clock.getElapsedTime();
  particles.rotation.y = t * 0.04;
  if (plane) {
    plane.position.x = scroll.x;
    plane.position.y = scroll.y + Math.sin(t * 0.6) * 0.08;
    plane.position.z = scroll.z;
    plane.rotation.y = scroll.ry + Math.sin(t * 0.3) * 0.06;
    plane.rotation.z = scroll.rz + Math.sin(t * 0.4) * 0.015;
  }
  if (pathPlane) {
    const p   = curve.getPoint(pathObj.t);
    const tan = curve.getTangent(pathObj.t).normalize();
    pathPlane.position.copy(p);
    pathPlane.rotation.y = Math.atan2(-tan.x, -tan.z) + Math.PI;
    pathPlane.rotation.x = -tan.y * 0.5 + 0.08;
    pathPlane.rotation.z = -tan.x * 0.4;
  }
  camera.position.x += (tx - camera.position.x) * 0.05;
  camera.position.y += (ty - camera.position.y) * 0.05;
  camera.lookAt(0, 0, 0);
  renderer.render(scene, camera);
  if (pathRenderer && pathScene) pathRenderer.render(pathScene, camera);
})();

gsap.to(scroll, {
  x: 0, y: 0, z: 5, ry: 0.3, rz: 0,
  ease: 'power2.inOut',
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', pin: true, scrub: 1.5 },
});

gsap.to(pathObj, {
  t: 1,
  ease: 'none',
  scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 2.5 },
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  if (pathRenderer) {
    pathRenderer.setSize(window.innerWidth, window.innerHeight);
    pathRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
});
