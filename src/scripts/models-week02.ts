import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById('float-canvas') as HTMLCanvasElement;
const W = window.innerWidth;
const H = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(W, H);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const COLOR = new THREE.Color('#FF6B35');

const floaterDefs = [
  { geo: new THREE.IcosahedronGeometry(1.2, 0),      x:  3.0, y:  1.2, fromX:  8 },
  { geo: new THREE.TorusGeometry(0.9, 0.28, 16, 50), x: -3.0, y: -0.8, fromX: -8 },
  { geo: new THREE.OctahedronGeometry(1.0),           x:  2.5, y: -2.5, fromX:  8 },
  { geo: new THREE.DodecahedronGeometry(0.8),         x: -2.5, y:  2.2, fromX: -8 },
];

type Floater = { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; tx: number; ty: number };

const floaters: Floater[] = floaterDefs.map(({ geo, x, y, fromX }) => {
  const mat = new THREE.MeshBasicMaterial({ color: COLOR, wireframe: true, transparent: true, opacity: 0 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(fromX, y, 0);
  scene.add(mesh);
  return { mesh, mat, tx: x, ty: y };
});

const sections = document.querySelectorAll<HTMLElement>('.content-section');
const content  = document.querySelector<HTMLElement>('.week-content')!;

floaters.forEach(({ mesh, mat, tx }, i) => {
  const trigger = sections[i] ?? sections[sections.length - 1];

  gsap.to(mesh.position, {
    x: tx,
    ease: 'power2.out',
    scrollTrigger: { trigger, start: 'top 75%', end: 'top 25%', scrub: 0 },
  });
  gsap.to(mat, {
    opacity: 0.5,
    scrollTrigger: { trigger, start: 'top 75%', end: 'top 40%', scrub: 0 },
  });
  gsap.to(mat, {
    opacity: 0,
    scrollTrigger: { trigger: content, start: 'bottom 80%', end: 'bottom 20%', scrub: 0 },
  });
});

let mx = 0, my = 0;
window.addEventListener('mousemove', (e) => {
  mx =  (e.clientX / window.innerWidth  - 0.5) * 0.8;
  my = -(e.clientY / window.innerHeight - 0.5) * 0.8;
});

const clock = new THREE.Clock();
(function tick() {
  requestAnimationFrame(tick);
  const t = clock.getElapsedTime();
  floaters.forEach(({ mesh }, i) => {
    mesh.rotation.x = t * (0.07 + i * 0.02);
    mesh.rotation.y = t * (0.11 + i * 0.03);
  });
  camera.position.x += (mx - camera.position.x) * 0.04;
  camera.position.y += (my - camera.position.y) * 0.04;
  camera.lookAt(0, 0, 0);
  renderer.render(scene, camera);
})();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
