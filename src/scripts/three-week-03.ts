import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// ─── SHARED FIREWORK FACTORY ──────────────────────────
const FW_COLORS = [
  new THREE.Color('#E91E8C'),
  new THREE.Color('#FF6B35'),
  new THREE.Color('#FFD700'),
  new THREE.Color('#FF4081'),
  new THREE.Color('#FFFFFF'),
  new THREE.Color('#FF9800'),
];
const N_PARTICLES = 150;
const TRAIL_LEN   = 20;
const GRAVITY     = -1.8;

interface Rocket {
  x: number; y: number; z: number;
  vy: number; targetY: number;
  trailLine: THREE.Points;
  trailGeo:  THREE.BufferGeometry;
  trailMat:  THREE.PointsMaterial;
  tPos:      Float32Array;
}
interface Burst {
  points: THREE.Points;
  geo: THREE.BufferGeometry;
  mat: THREE.PointsMaterial;
  vel: Float32Array;
  life: number;
  decay: number;
}

function makeFireworks(scene: THREE.Scene) {
  const rockets: Rocket[] = [];
  const bursts:  Burst[]  = [];

  function spawnBurst(x: number, y: number, z: number) {
    const color = FW_COLORS[Math.floor(Math.random() * FW_COLORS.length)];
    const pos   = new Float32Array(N_PARTICLES * 3);
    const vel   = new Float32Array(N_PARTICLES * 3);

    for (let i = 0; i < N_PARTICLES; i++) {
      pos[i*3] = x; pos[i*3+1] = y; pos[i*3+2] = z;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      // Faster initial velocity → particles visible immediately on burst
      const spd   = 1.8 + Math.random() * 4.5;
      vel[i*3]   = spd * Math.sin(phi) * Math.cos(theta);
      vel[i*3+1] = spd * Math.sin(phi) * Math.sin(theta);
      vel[i*3+2] = spd * Math.cos(phi);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color, size: 0.14, transparent: true, opacity: 1, sizeAttenuation: true,
    });
    const pts = new THREE.Points(geo, mat);
    scene.add(pts);

    // Big flash sphere — expands instantly so burst feels simultaneous with particles
    const fGeo  = new THREE.SphereGeometry(0.18, 6, 6);
    const fMat  = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 });
    const flash = new THREE.Mesh(fGeo, fMat);
    flash.position.set(x, y, z);
    scene.add(flash);
    gsap.to(flash.scale, { x: 10, y: 10, z: 10, duration: 0.22, ease: 'power3.out' });
    gsap.to(fMat, { opacity: 0, duration: 0.28, ease: 'power2.in', onComplete: () => {
      scene.remove(flash); fGeo.dispose(); fMat.dispose();
    }});

    bursts.push({ points: pts, geo, mat, vel, life: 1, decay: 0.004 + Math.random() * 0.004 });
  }

  function launch(x: number, z: number, yMin = -2, yMax = 4) {
    const tPos = new Float32Array(TRAIL_LEN * 3);
    for (let i = 0; i < TRAIL_LEN; i++) {
      tPos[i*3] = x; tPos[i*3+1] = -6.5; tPos[i*3+2] = z;
    }
    const tGeo = new THREE.BufferGeometry();
    tGeo.setAttribute('position', new THREE.BufferAttribute(tPos, 3));
    // Points instead of Line — sizeAttenuation makes them visible without linewidth issues
    const tMat = new THREE.PointsMaterial({
      color: 0xffffff, size: 0.12, transparent: true, opacity: 0.88, sizeAttenuation: true,
    });
    const trailLine = new THREE.Points(tGeo, tMat);
    scene.add(trailLine);

    rockets.push({
      x, y: -6.5, z,
      vy: 7 + Math.random() * 5,
      targetY: yMin + Math.random() * (yMax - yMin),
      trailLine, trailGeo: tGeo, trailMat: tMat, tPos,
    });
  }

  function update(dt: number) {
    // Rockets
    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.y += r.vy * dt;

      // Shift trail history so index-0 is always the current (newest) position
      for (let j = TRAIL_LEN - 1; j > 0; j--) {
        r.tPos[j*3]   = r.tPos[(j-1)*3];
        r.tPos[j*3+1] = r.tPos[(j-1)*3+1];
        r.tPos[j*3+2] = r.tPos[(j-1)*3+2];
      }
      r.tPos[0] = r.x; r.tPos[1] = r.y; r.tPos[2] = r.z;
      r.trailGeo.attributes.position.needsUpdate = true;

      if (r.y >= r.targetY) {
        spawnBurst(r.x, r.y, r.z);
        scene.remove(r.trailLine);
        r.trailGeo.dispose(); r.trailMat.dispose();
        rockets.splice(i, 1);
      }
    }

    // Bursts
    for (let b = bursts.length - 1; b >= 0; b--) {
      const burst = bursts[b];
      burst.life -= burst.decay;
      if (burst.life <= 0) {
        scene.remove(burst.points); burst.geo.dispose(); burst.mat.dispose();
        bursts.splice(b, 1); continue;
      }
      const pos = burst.geo.attributes.position.array as Float32Array;
      for (let i = 0; i < N_PARTICLES; i++) {
        pos[i*3]   += burst.vel[i*3]   * dt;
        pos[i*3+1] += burst.vel[i*3+1] * dt;
        pos[i*3+2] += burst.vel[i*3+2] * dt;
        burst.vel[i*3+1] += GRAVITY * dt;
      }
      burst.geo.attributes.position.needsUpdate = true;
      burst.mat.opacity = Math.pow(Math.max(0, burst.life), 0.6);
    }
  }

  return { launch, update };
}

// ─── BACKGROUND: octahedron + particles + scroll fireworks ──
{
  const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 14;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // Week-3 central geometry: octahedron wireframe
  const wColor = new THREE.Color('#E91E8C');
  const centralMesh = new THREE.Mesh(
    new THREE.OctahedronGeometry(2.2),
    new THREE.MeshBasicMaterial({ color: wColor, wireframe: true, transparent: true, opacity: 0.13 })
  );
  scene.add(centralMesh);

  // Orbital particle cloud around the octahedron
  const PART = 1500;
  const pPos = new Float32Array(PART * 3);
  for (let i = 0; i < PART; i++) {
    const r     = 4 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    pPos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
    pPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
    pPos[i*3+2] = r * Math.cos(phi);
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const orbitParticles = new THREE.Points(pGeo, new THREE.PointsMaterial({
    size: 0.035, color: wColor, transparent: true, opacity: 0.5, sizeAttenuation: true,
  }));
  scene.add(orbitParticles);

  // Night-sky star field
  const sPos = new Float32Array(300 * 3);
  for (let i = 0; i < 300; i++) {
    sPos[i*3]   = (Math.random() - 0.5) * 32;
    sPos[i*3+1] = (Math.random() - 0.5) * 22;
    sPos[i*3+2] = (Math.random() - 0.5) * 10;
  }
  const sGeo = new THREE.BufferGeometry();
  sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  scene.add(new THREE.Points(sGeo, new THREE.PointsMaterial({
    size: 0.04, color: 0xffffff, transparent: true, opacity: 0.25, sizeAttenuation: true,
  })));

  // ── Confetti ribbons ────────────────────────────────
  const CONFETTI_COUNT = 42;
  const CONFETTI_COLORS_HEX = ['#E91E8C', '#FF6B35', '#FFD700', '#FF4081', '#FFFFFF', '#FF9800'];
  const confettiGeo = new THREE.BoxGeometry(0.28, 0.52, 0.025);

  interface Confetto {
    mesh: THREE.Mesh;
    rx: number; ry: number; rz: number; // rotation speeds
    vx: number; vy: number;             // drift velocities
    phase: number;                       // sine-wave sway offset
  }

  const confetti: Confetto[] = [];
  const halfH_c = Math.tan(30 * Math.PI / 180) * 14; // ~8.1
  const halfW_c = halfH_c * (window.innerWidth / window.innerHeight);

  for (let i = 0; i < CONFETTI_COUNT; i++) {
    const hex  = CONFETTI_COLORS_HEX[Math.floor(Math.random() * CONFETTI_COLORS_HEX.length)];
    const mat  = new THREE.MeshBasicMaterial({ color: new THREE.Color(hex), transparent: true, opacity: 0.75, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(confettiGeo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * halfW_c * 2,
      (Math.random() - 0.5) * halfH_c * 2,
      (Math.random() - 0.5) * 6,
    );
    mesh.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
    scene.add(mesh);
    confetti.push({
      mesh,
      rx: (Math.random() - 0.5) * 2.5,
      ry: (Math.random() - 0.5) * 2.5,
      rz: (Math.random() - 0.5) * 1.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: 0.5 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2,
    });
  }

  function updateConfetti(dt: number, t: number) {
    for (const c of confetti) {
      c.mesh.rotation.x += c.rx * dt;
      c.mesh.rotation.y += c.ry * dt;
      c.mesh.rotation.z += c.rz * dt;
      c.mesh.position.x += (c.vx + Math.sin(t * 0.7 + c.phase) * 0.015);
      c.mesh.position.y += c.vy * dt;
      if (c.mesh.position.y > halfH_c + 1) {
        c.mesh.position.y = -halfH_c - 1;
        c.mesh.position.x = (Math.random() - 0.5) * halfW_c * 2;
        c.mesh.position.z = (Math.random() - 0.5) * 6;
      }
    }
  }

  const fw = makeFireworks(scene);

  // Mouse parallax on camera
  let tx = 0, ty = 0;
  window.addEventListener('mousemove', (e) => {
    tx =  (e.clientX / window.innerWidth  - 0.5) * 1.5;
    ty = -(e.clientY / window.innerHeight - 0.5) * 1.5;
  });

  // 3-rocket salvo when each section enters the viewport
  gsap.utils.toArray<HTMLElement>('.content-section').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 78%',
      onEnter: () => {
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            fw.launch((Math.random() - 0.5) * 13, (Math.random() - 0.5) * 5, -1, 5);
          }, i * 400);
        }
      },
    });
  });

  // Ambient burst every ~2.4s while scrolled past the hero
  let lastAmbient = 0;
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight * 0.4) return;
    const now = Date.now();
    if (now - lastAmbient > 2400) {
      lastAmbient = now;
      fw.launch((Math.random() - 0.5) * 13, (Math.random() - 0.5) * 5, -1, 5);
    }
  }, { passive: true });

  const bgClock = new THREE.Clock();
  let bgT = 0;
  (function bgTick() {
    requestAnimationFrame(bgTick);
    const dt = Math.min(bgClock.getDelta(), 0.05);
    bgT += dt;

    centralMesh.rotation.x = bgT * 0.12;
    centralMesh.rotation.y = bgT * 0.18;
    orbitParticles.rotation.y = bgT * 0.04;
    orbitParticles.rotation.x = bgT * 0.02;

    camera.position.x += (tx - camera.position.x) * 0.05;
    camera.position.y += (ty - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);

    updateConfetti(dt, bgT);
    fw.update(dt);
    renderer.render(scene, camera);
  })();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}

// ─── DRAW SVG ─────────────────────────────────────────
const drawText = document.querySelector<SVGTextElement>('.draw-text');
if (drawText) {
  document.fonts.ready.then(() => {
    const len = drawText.getComputedTextLength();
    gsap.set(drawText, { strokeDasharray: len, strokeDashoffset: len });
    gsap.to(drawText, {
      strokeDashoffset: 0,
      duration: 3.5,
      ease: 'power2.inOut',
      scrollTrigger: { trigger: '.draw-svg-wrapper', start: 'top 80%', toggleActions: 'play none none none' },
    });
  });
}
