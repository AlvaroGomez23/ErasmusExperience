import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 9;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const GREEN = new THREE.Color('#88CE02');

const knotMesh = new THREE.Mesh(
  new THREE.TorusKnotGeometry(2, 0.5, 120, 18),
  new THREE.MeshBasicMaterial({ color: GREEN, wireframe: true, transparent: true, opacity: 0.11 })
);
scene.add(knotMesh);

const icoMesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(1.2, 1),
  new THREE.MeshBasicMaterial({ color: GREEN, wireframe: true, transparent: true, opacity: 0.2 })
);
scene.add(icoMesh);

const COUNT = 2500;
const pos = new Float32Array(COUNT * 3);
for (let i = 0; i < COUNT; i++) {
  const r = 5 + Math.random() * 10;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
  pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  pos[i * 3 + 2] = r * Math.cos(phi);
}
const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.03, color: GREEN, transparent: true, opacity: 0.5 })));

let tx = 0, ty = 0;
window.addEventListener('mousemove', (e) => {
  tx =  (e.clientX / window.innerWidth  - 0.5) * 1.5;
  ty = -(e.clientY / window.innerHeight - 0.5) * 1.5;
});

const clock = new THREE.Clock();
(function tick() {
  requestAnimationFrame(tick);
  const t = clock.getElapsedTime();
  knotMesh.rotation.x = t * 0.08;
  knotMesh.rotation.y = t * 0.13;
  icoMesh.rotation.x  = -t * 0.15;
  icoMesh.rotation.y  = t * 0.22;
  camera.position.x += (tx - camera.position.x) * 0.04;
  camera.position.y += (ty - camera.position.y) * 0.04;
  camera.lookAt(0, 0, 0);
  renderer.render(scene, camera);
})();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const tl = gsap.timeline({ delay: 0.15 });
tl.fromTo('.site-tagline', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
  .fromTo('.site-title',   { y: 100, opacity: 0, skewY: 5 }, { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: 'power3.out' }, '-=0.4')
  .fromTo('.site-meta',    { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.5')
  .fromTo('.scroll-hint',  { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.3');

gsap.utils.toArray<HTMLElement>('.content-section').forEach((el) => {
  gsap.fromTo(el, { y: 60, opacity: 0 }, {
    y: 0, opacity: 1, duration: 1, ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 82%' },
  });
});

gsap.utils.toArray<HTMLElement>('.week-card').forEach((card, i) => {
  gsap.fromTo(card, { y: 50, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.6, delay: (i % 4) * 0.07, ease: 'power2.out',
    scrollTrigger: { trigger: card, start: 'top 90%' },
  });
});
