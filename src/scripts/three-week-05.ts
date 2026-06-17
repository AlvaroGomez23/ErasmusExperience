import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);

// ─── FRIENDSHIP CONSTELLATION — "BETTER TOGETHER" ─────
// Floating stars (the crew) drift around; lines appear
// between any two that drift close. Bonds forming.
{
  const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 22;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  scene.add(new THREE.AmbientLight(0xffffff, 1.6));
  const key = new THREE.DirectionalLight(0xffffff, 1.8);
  key.position.set(5, 8, 10);
  scene.add(key);

  const CYAN  = new THREE.Color(0x00bcd4);
  const GREEN = new THREE.Color(0x88ce02);

  const NODES = 30;
  const SPREAD_X = 30, SPREAD_Y = 18, SPREAD_Z = 10;
  const LINK_DIST = 7.2;          // how close two stars link
  const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
  const STAR_SIZE = 0.85;         // target world size per star

  // Node state
  const pos = new Float32Array(NODES * 3);
  const vel = new Float32Array(NODES * 3);
  const spin = new Float32Array(NODES);
  for (let i = 0; i < NODES; i++) {
    pos[i * 3]     = (Math.random() - 0.5) * SPREAD_X;
    pos[i * 3 + 1] = (Math.random() - 0.5) * SPREAD_Y;
    pos[i * 3 + 2] = (Math.random() - 0.5) * SPREAD_Z;
    vel[i * 3]     = (Math.random() - 0.5) * 0.018;
    vel[i * 3 + 1] = (Math.random() - 0.5) * 0.018;
    vel[i * 3 + 2] = (Math.random() - 0.5) * 0.012;
    spin[i] = 0.3 + Math.random() * 0.6;
  }

  // Stars (the crew) — cloned from Star.glb once loaded
  const stars: THREE.Object3D[] = [];
  new GLTFLoader().load('/models/Star.glb', (gltf) => {
    const template = gltf.scene;

    // normalize to STAR_SIZE regardless of source model scale
    const box = new THREE.Box3().setFromObject(template);
    const maxDim = Math.max(...box.getSize(new THREE.Vector3()).toArray());
    const norm = STAR_SIZE / (maxDim || 1);

    for (let i = 0; i < NODES; i++) {
      const star = template.clone(true);
      star.scale.setScalar(norm);
      // tint to palette (cyan mostly, some green) without losing shading
      const tint = Math.random() < 0.28 ? GREEN : CYAN;
      star.traverse((o) => {
        if ((o as THREE.Mesh).isMesh) {
          const m = ((o as THREE.Mesh).material as THREE.MeshStandardMaterial).clone();
          m.color = tint.clone();
          m.emissive = tint.clone().multiplyScalar(0.35);
          (o as THREE.Mesh).material = m;
        }
      });
      star.position.set(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
      scene.add(star);
      stars.push(star);
    }
  });

  // Lines (the bonds) — pre-allocate max possible segments
  const MAX_LINKS = NODES * NODES;
  const linePos = new Float32Array(MAX_LINKS * 6);
  const lineCol = new Float32Array(MAX_LINKS * 6);
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
  lineGeo.setAttribute('color', new THREE.BufferAttribute(lineCol, 3));
  const lines = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({
    vertexColors: true, transparent: true, opacity: 0.5,
  }));
  scene.add(lines);

  // Cursor — parallax only
  const mouse = new THREE.Vector3(0, 0, 0);
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth  - 0.5) * SPREAD_X;
    mouse.y = -(e.clientY / window.innerHeight - 0.5) * SPREAD_Y;
  });

  let parX = 0, parY = 0;
  const clock = new THREE.Clock();

  (function tick() {
    requestAnimationFrame(tick);
    const dt = clock.getDelta();

    // move nodes + bounce off bounds
    for (let i = 0; i < NODES; i++) {
      const ix = i * 3, iy = ix + 1, iz = ix + 2;
      pos[ix] += vel[ix]; pos[iy] += vel[iy]; pos[iz] += vel[iz];
      if (pos[ix] >  SPREAD_X / 2 || pos[ix] < -SPREAD_X / 2) vel[ix] *= -1;
      if (pos[iy] >  SPREAD_Y / 2 || pos[iy] < -SPREAD_Y / 2) vel[iy] *= -1;
      if (pos[iz] >  SPREAD_Z / 2 || pos[iz] < -SPREAD_Z / 2) vel[iz] *= -1;

      const star = stars[i];
      if (star) {
        star.position.set(pos[ix], pos[iy], pos[iz]);
        star.rotation.y += spin[i] * dt;
        star.rotation.z += spin[i] * 0.4 * dt;
      }
    }

    // rebuild bonds between near nodes, fading with distance
    let s = 0;
    for (let i = 0; i < NODES; i++) {
      const ax = pos[i * 3], ay = pos[i * 3 + 1], az = pos[i * 3 + 2];
      for (let j = i + 1; j < NODES; j++) {
        const dx = ax - pos[j * 3], dy = ay - pos[j * 3 + 1], dz = az - pos[j * 3 + 2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 > LINK_DIST_SQ) continue;
        const fade = 1 - Math.sqrt(d2) / LINK_DIST;
        const k = s * 6;
        linePos[k]     = ax; linePos[k + 1] = ay; linePos[k + 2] = az;
        linePos[k + 3] = pos[j * 3]; linePos[k + 4] = pos[j * 3 + 1]; linePos[k + 5] = pos[j * 3 + 2];
        lineCol[k]     = CYAN.r * fade; lineCol[k + 1] = CYAN.g * fade; lineCol[k + 2] = CYAN.b * fade;
        lineCol[k + 3] = CYAN.r * fade; lineCol[k + 4] = CYAN.g * fade; lineCol[k + 5] = CYAN.b * fade;
        s++;
      }
    }
    lineGeo.setDrawRange(0, s * 2);
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.attributes.color.needsUpdate = true;

    // camera parallax toward cursor
    parX += (mouse.x * 0.06 - parX) * 0.04;
    parY += (mouse.y * 0.06 - parY) * 0.04;
    camera.position.x = parX;
    camera.position.y = parY;
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

// ─── ANIMATED HEADLINE — word-by-word reveal ──────────
gsap.utils.toArray<HTMLElement>('.bond-word').forEach((w, i) => {
  gsap.fromTo(w, { y: 60, opacity: 0, rotateX: -40 }, {
    y: 0, opacity: 1, rotateX: 0, duration: 0.9, delay: i * 0.12, ease: 'power3.out',
    scrollTrigger: { trigger: '.bond-headline', start: 'top 80%' },
  });
});

// ─── "A WEEK OF GOOD COMPANY" — scatter → gather ──────
// Words fly in blurred from random directions and converge
// into place. The crew coming together.
gsap.utils.toArray<HTMLElement>('.story-word').forEach((w, i) => {
  const dir = i % 2 === 0 ? -1 : 1;
  gsap.fromTo(w,
    {
      x: dir * (160 + Math.random() * 220),
      y: (Math.random() - 0.5) * 160,
      rotation: dir * (12 + Math.random() * 18),
      opacity: 0,
      filter: 'blur(14px)',
    },
    {
      x: 0, y: 0, rotation: 0, opacity: 1, filter: 'blur(0px)',
      duration: 1.1, delay: i * 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.story-title', start: 'top 78%' },
    });
});
