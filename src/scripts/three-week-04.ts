import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// ─── BACKGROUND: falling cube construction scene ──────
{
  const canvas  = document.getElementById('three-canvas') as HTMLCanvasElement;
  const scene   = new THREE.Scene();
  const camera  = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(6, 5, 12);
  camera.lookAt(0, 2, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const sun = new THREE.DirectionalLight(0xffe066, 3);
  sun.position.set(5, 10, 7);
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xff6b35, 1);
  fill.position.set(-6, -2, 4);
  scene.add(fill);

  // Grid of cubes to stack — layout is a rough pyramid
  const GRID: [number, number, number][] = [];
  for (let x = -2; x <= 2; x++) {
    for (let z = -2; z <= 2; z++) {
      GRID.push([x, 0, z]);
    }
  }
  for (let x = -1; x <= 1; x++) {
    for (let z = -1; z <= 1; z++) {
      GRID.push([x, 1, z]);
    }
  }
  GRID.push([0, 2, 0], [-1, 2, 0], [1, 2, 0], [0, 2, -1], [0, 2, 1]);
  GRID.push([0, 3, 0]);

  const GOLD_SHADES = ['#FFD700', '#FFC200', '#FFAA00', '#FFE566', '#FF9800'];
  const cubeGeo = new THREE.BoxGeometry(0.88, 0.88, 0.88);

  const group = new THREE.Group();
  scene.add(group);

  const cubes: THREE.Mesh[] = [];

  GRID.forEach(([x, y, z], i) => {
    const col = GOLD_SHADES[i % GOLD_SHADES.length];
    const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(col), metalness: 0.3, roughness: 0.5 });
    const cube = new THREE.Mesh(cubeGeo, mat);
    cube.position.set(x, 18 + i * 0.4, z); // start high above
    group.add(cube);
    cubes.push(cube);

    gsap.to(cube.position, {
      y,
      duration: 0.7,
      delay: 0.3 + i * 0.08,
      ease: 'bounce.out',
    });
  });

  // Wire scaffolding box around the structure
  const scaffoldGeo = new THREE.BoxGeometry(6, 5, 6);
  const scaffoldEdges = new THREE.EdgesGeometry(scaffoldGeo);
  const scaffold = new THREE.LineSegments(
    scaffoldEdges,
    new THREE.LineBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.18 })
  );
  scaffold.position.set(0, 2, 0);
  scene.add(scaffold);

  // Particles
  const pPos = new Float32Array(800 * 3);
  for (let i = 0; i < 800; i++) {
    pPos[i*3]   = (Math.random() - 0.5) * 28;
    pPos[i*3+1] = (Math.random() - 0.5) * 20;
    pPos[i*3+2] = (Math.random() - 0.5) * 14;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({
    size: 0.04, color: 0xffd700, transparent: true, opacity: 0.35, sizeAttenuation: true,
  })));

  // Mouse parallax
  let tx = 0, ty = 0;
  window.addEventListener('mousemove', (e) => {
    tx =  (e.clientX / window.innerWidth  - 0.5) * 2;
    ty = -(e.clientY / window.innerHeight - 0.5) * 1.2;
  });

  const clock = new THREE.Clock();
  (function tick() {
    requestAnimationFrame(tick);
    const t = clock.getElapsedTime();
    group.rotation.y = t * 0.12;
    scaffold.rotation.y = t * 0.08;
    camera.position.x += (tx - camera.position.x) * 0.04;
    camera.position.y += (ty + 5 - camera.position.y) * 0.04;
    camera.lookAt(0, 2, 0);
    renderer.render(scene, camera);
  })();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}

// ─── TERMINAL TYPEWRITER ──────────────────────────────
const LOGS = [
  '> initializing week_04.md ...',
  '> scanning photos/ directory ...',
  '> found 0 memories. retrying ...',
  '> compiling inside_jokes.ts ...',
  '> WARNING: content not ready',
  '> uploading laughs ... 12%',
  '> build failed. check back soon.',
];

const terminal = document.getElementById('wip-terminal');
if (terminal) {
  let logI = 0;
  function typeLog() {
    if (logI >= LOGS.length) { logI = 0; terminal!.innerHTML = ''; }
    const line = document.createElement('div');
    line.className = 'term-line';
    terminal!.appendChild(line);
    const txt = LOGS[logI++];
    let ci = 0;
    const iv = setInterval(() => {
      line.textContent = txt.slice(0, ++ci);
      if (ci >= txt.length) { clearInterval(iv); setTimeout(typeLog, 700); }
    }, 38);
  }
  typeLog();
}

// ─── PROGRESS BAR (never finishes) ───────────────────
const fill = document.getElementById('wip-fill');
if (fill) {
  gsap.to(fill, { width: '73%', duration: 6, ease: 'power1.inOut', onComplete: () => {
    gsap.to(fill, { width: '0%', duration: 0.4, delay: 0.8, onComplete: () => {
      gsap.to(fill, { width: '73%', duration: 6, ease: 'power1.inOut', repeat: -1, yoyo: true });
    }});
  }});
}

// ─── SHARED GSAP (section reveals) ───────────────────
gsap.utils.toArray<HTMLElement>('.content-section').forEach((s) => {
  gsap.fromTo(s, { y: 60, opacity: 0 }, {
    y: 0, opacity: 1, duration: 1, ease: 'power2.out',
    scrollTrigger: { trigger: s, start: 'top 82%' },
  });
});
