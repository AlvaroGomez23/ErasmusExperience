import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 8;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

scene.add(new THREE.AmbientLight(0xffffff, 0.2));

const pinkLight  = new THREE.PointLight(0xff006e, 10, 22);
const purpleLight = new THREE.PointLight(0x8338ec, 8,  20);
const goldLight   = new THREE.PointLight(0xffbe0b, 6,  18);
goldLight.position.set(0, 5, -2);
scene.add(pinkLight, purpleLight, goldLight);

// Disco sphere
const sphere = new THREE.Mesh(
  new THREE.IcosahedronGeometry(1.2, 5),
  new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1.0, roughness: 0.0 })
);
scene.add(sphere);

// Rings of wireframe shapes
const ringColors = [0xff006e, 0x8338ec, 0xffbe0b, 0x3a86ff];
const rings: THREE.LineSegments[] = [];
ringColors.forEach((color, i) => {
  const geo = new THREE.TorusGeometry(2.5 + i * 0.5, 0.012, 8, 80);
  const edges = new THREE.EdgesGeometry(geo);
  const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.18 });
  const ring = new THREE.LineSegments(edges, mat);
  ring.rotation.x = (i * Math.PI) / ringColors.length + 0.4;
  ring.rotation.z = (i * Math.PI) / ringColors.length;
  scene.add(ring);
  rings.push(ring);
});

// Colorful confetti particle clouds
const PARTY_COLORS = [0xff006e, 0xfb5607, 0xffbe0b, 0x8338ec, 0x3a86ff, 0x06d6a0, 0xff4444, 0xffffff];
const confettiGroups: THREE.Points[] = [];

PARTY_COLORS.forEach(color => {
  const count = 350;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 4 + Math.random() * 12;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({
    size: 0.032, color: new THREE.Color(color), transparent: true, opacity: 0.65, sizeAttenuation: true,
  }));
  scene.add(pts);
  confettiGroups.push(pts);
});

let tx = 0, ty = 0;
window.addEventListener('mousemove', (e) => {
  tx =  (e.clientX / window.innerWidth  - 0.5) * 2.5;
  ty = -(e.clientY / window.innerHeight - 0.5) * 2.5;
});

const clock = new THREE.Clock();
(function tick() {
  requestAnimationFrame(tick);
  const t = clock.getElapsedTime();

  sphere.rotation.y = t * 0.35;
  sphere.rotation.x = t * 0.12;

  pinkLight.position.x   =  Math.cos(t * 0.8) * 5;
  pinkLight.position.z   =  Math.sin(t * 0.8) * 5;
  pinkLight.position.y   =  Math.sin(t * 0.4) * 2;
  purpleLight.position.x =  Math.cos(t * 0.6 + Math.PI) * 5;
  purpleLight.position.z =  Math.sin(t * 0.6 + Math.PI) * 5;
  purpleLight.position.y = -Math.sin(t * 0.3) * 2;

  rings.forEach((r, i) => {
    r.rotation.y = t * (0.12 + i * 0.04);
  });

  confettiGroups.forEach((pts, i) => {
    pts.rotation.y = t * (0.025 + i * 0.006);
    pts.rotation.x = t * (0.015 + i * 0.004);
  });

  camera.position.x += (tx - camera.position.x) * 0.03;
  camera.position.y += (ty - camera.position.y) * 0.03;
  camera.lookAt(0, 0, 0);
  renderer.render(scene, camera);
})();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

function animateHero() {
  gsap.fromTo('.party-tagline', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.15 });
  gsap.fromTo('.party-title',   { y: 100, opacity: 0, skewY: 5 }, { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: 'power3.out', delay: 0.35 });
  gsap.fromTo('.party-meta',    { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.75 });
  gsap.fromTo('.scroll-hint',   { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 1.1 });

  gsap.utils.toArray<HTMLElement>('.party-section-tag, .party-section-title').forEach(el => {
    gsap.fromTo(el, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });
}

const content = document.getElementById('party-content');
if (content?.classList.contains('visible')) {
  animateHero();
} else if (content) {
  const obs = new MutationObserver(() => {
    if (content.classList.contains('visible')) {
      obs.disconnect();
      animateHero();
    }
  });
  obs.observe(content, { attributes: true, attributeFilter: ['class'] });
}
