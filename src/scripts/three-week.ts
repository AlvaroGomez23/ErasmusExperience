import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const canvas     = document.getElementById('three-canvas') as HTMLCanvasElement;
const primaryColor = canvas.dataset.primary as string;
const weekNum    = parseInt(canvas.dataset.week as string);
const modelPath  = canvas.dataset.model ?? null;

const color = new THREE.Color(primaryColor);

// ─── WIREFRAME (weeks without a dedicated GLB script) ─
if (!modelPath) {
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
  camera.position.z = 8;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  function makeCentralGeo(n: number): THREE.BufferGeometry {
    switch (n) {
      case 1:  return new THREE.IcosahedronGeometry(2, 0);
      case 2:  return new THREE.TorusKnotGeometry(1.3, 0.35, 80, 12);
      case 3:  return new THREE.OctahedronGeometry(2.2);
      case 4:  return new THREE.TetrahedronGeometry(2.4);
      case 5:  return new THREE.TorusGeometry(1.8, 0.4, 16, 80);
      case 6:  return new THREE.IcosahedronGeometry(2, 1);
      case 7:  return new THREE.DodecahedronGeometry(1.9);
      case 8:  return new THREE.SphereGeometry(2, 8, 5);
      case 9:  return new THREE.ConeGeometry(1.5, 3.5, 5);
      case 10: return new THREE.CylinderGeometry(1.5, 1.8, 3.2, 6);
      default: return new THREE.IcosahedronGeometry(2, 0);
    }
  }

  const centralMesh = new THREE.Mesh(
    makeCentralGeo(weekNum),
    new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.13 })
  );
  scene.add(centralMesh);

  const PARTICLE_COUNT = 1800;
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const r     = 4 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.035, color, transparent: true, opacity: 0.55 }));
  scene.add(particles);

  let targetX = 0, targetY = 0;
  window.addEventListener('mousemove', (e) => {
    targetX =  (e.clientX / window.innerWidth  - 0.5) * 1.5;
    targetY = -(e.clientY / window.innerHeight - 0.5) * 1.5;
  });

  const clock = new THREE.Clock();
  (function tick() {
    requestAnimationFrame(tick);
    const t = clock.getElapsedTime();
    centralMesh.rotation.x = t * 0.12;
    centralMesh.rotation.y = t * 0.18;
    particles.rotation.y   = t * 0.04;
    particles.rotation.x   = t * 0.02;
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  })();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}

// ─── SHARED GSAP ANIMATIONS (all weeks) ──────────────
const heroTl = gsap.timeline({ delay: 0.1 });
heroTl
  .fromTo('.hero-label',    { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
  .fromTo('.hero-title',    { y: 100, opacity: 0, skewY: 4 }, { y: 0, opacity: 1, skewY: 0, duration: 1.1, ease: 'power3.out' }, '-=0.4')
  .fromTo('.hero-subtitle', { y: 50,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.5')
  .fromTo('.scroll-hint',   { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.3');

gsap.utils.toArray<HTMLElement>('.content-section').forEach((section) => {
  gsap.fromTo(section, { y: 70, opacity: 0 }, {
    y: 0, opacity: 1, duration: 1, ease: 'power2.out',
    scrollTrigger: { trigger: section, start: 'top 82%' },
  });
});

gsap.utils.toArray<HTMLElement>('.photo-item').forEach((item, i) => {
  gsap.fromTo(item, { scale: 0.88, opacity: 0 }, {
    scale: 1, opacity: 1, duration: 0.65, delay: (i % 4) * 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: item, start: 'top 90%' },
  });
});

gsap.utils.toArray<HTMLElement>('.highlight-card').forEach((card, i) => {
  gsap.fromTo(card, { x: -30, opacity: 0 }, {
    x: 0, opacity: 1, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
    scrollTrigger: { trigger: card, start: 'top 88%' },
  });
});
