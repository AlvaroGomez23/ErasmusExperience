import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 9;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;

const GREEN = new THREE.Color('#88CE02');

scene.add(new THREE.AmbientLight(0xffffff, 1.2));
const sun = new THREE.DirectionalLight(0xffffff, 2.0); sun.position.set(5, 8, 6); scene.add(sun);
const fill = new THREE.DirectionalLight(0xffffff, 0.8); fill.position.set(-5, -3, -4); scene.add(fill);

let model: THREE.Group | null = null;

const draco = new DRACOLoader();
draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
const loader = new GLTFLoader();
loader.setDRACOLoader(draco);

loader.load('/models/Camera_poly.glb', (gltf) => {
  model = gltf.scene;

  // Force all materials opaque and visible
  model.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      mats.forEach((mat) => {
        mat.transparent = false;
        mat.opacity = 1;
        mat.depthWrite = true;
        (mat as THREE.MeshStandardMaterial).metalness = 0.3;
        (mat as THREE.MeshStandardMaterial).roughness = 0.6;
      });
    }
  });

  const box = new THREE.Box3().setFromObject(model);
  model.position.sub(box.getCenter(new THREE.Vector3()));
  const maxDim = Math.max(...box.getSize(new THREE.Vector3()).toArray());
  model.scale.setScalar(5 / maxDim);
  model.rotation.y = 0.3;
  scene.add(model);
});

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
const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.03, color: GREEN, transparent: true, opacity: 0.5 }));
scene.add(particles);

let tx = 0, ty = 0;
window.addEventListener('mousemove', (e) => {
  tx =  (e.clientX / window.innerWidth  - 0.5) * 1.5;
  ty = -(e.clientY / window.innerHeight - 0.5) * 1.5;
});

const clock = new THREE.Clock();
(function tick() {
  requestAnimationFrame(tick);
  const t = clock.getElapsedTime();
  particles.rotation.y = t * 0.04;
  if (model) {
    model.rotation.y = t * 0.12;
    model.position.y = -1.5 + Math.sin(t * 0.6) * 0.15;
  }
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
