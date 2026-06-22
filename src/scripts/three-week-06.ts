// Week 06 — Porto / São João night
// Rising sky lanterns (balões de São João) drifting up over a proper Dom Luís I
// bridge — solid iron arch + lattice truss + towers + warm river reflection.

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// ─── RADIAL GLOW SPRITE TEXTURE (lantern halo / lights) ─
function makeGlowTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0,    'rgba(255,225,150,1)');
  g.addColorStop(0.25, 'rgba(255,190,80,0.7)');
  g.addColorStop(1,    'rgba(255,150,40,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

{
  const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;
  const scene  = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0612, 0.02);
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 1, 16);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const glowTex = makeGlowTexture();

  // ── Lighting — warm key catches the iron edges gold, pink rim ──
  scene.add(new THREE.AmbientLight(0x3a2548, 0.9));
  const key = new THREE.DirectionalLight(0xffb877, 1.7);
  key.position.set(-7, 11, 9);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xff5470, 0.85);
  rim.position.set(9, -2, 5);
  scene.add(rim);

  // ── Night-sky star field ──
  const sPos = new Float32Array(340 * 3);
  for (let i = 0; i < 340; i++) {
    sPos[i*3]   = (Math.random() - 0.5) * 36;
    sPos[i*3+1] =  Math.random() * 20 - 3;
    sPos[i*3+2] = (Math.random() - 0.5) * 12;
  }
  const sGeo = new THREE.BufferGeometry();
  sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  const starField = new THREE.Points(sGeo, new THREE.PointsMaterial({
    size: 0.05, color: 0xffffff, transparent: true, opacity: 0.4, sizeAttenuation: true,
  }));
  scene.add(starField);

  // ══════════════════════════════════════════════════════
  //  DOM LUÍS I BRIDGE — loaded from bridge1.glb
  // ══════════════════════════════════════════════════════
  const Z       = -3;
  const HALF    = 15;          // half target span
  const WATER_Y = -8.5;

  const bridge = new THREE.Group();
  scene.add(bridge);

  new GLTFLoader().load('/models/bridge.glb', (gltf) => {
    const model = gltf.scene;

    // normalize width to the full span, then re-center at (0, -2.5, Z)
    const size = new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
    model.scale.setScalar((2 * HALF) / (size.x || 1));

    const center = new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3());
    model.position.sub(center).add(new THREE.Vector3(0, -2.5, Z));
    bridge.add(model);

    // ── Reflection — faint mirrored silhouette on the water ──
    const reflMat = new THREE.MeshBasicMaterial({ color: 0xffb24d, transparent: true, opacity: 0.12 });
    const refl = model.clone(true);
    refl.traverse((o) => { if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).material = reflMat; });
    refl.scale.y *= -1;
    refl.position.y = 2 * WATER_Y - model.position.y;
    bridge.add(refl);
  });

  // ── River shimmer band below the bridge ──
  const RIVER_N = 600;
  const rPos = new Float32Array(RIVER_N * 3);
  const rBase = new Float32Array(RIVER_N);
  for (let i = 0; i < RIVER_N; i++) {
    const x = (Math.random() - 0.5) * 36;
    const y = WATER_Y - Math.random() * 6;
    rPos[i*3] = x; rPos[i*3+1] = y; rPos[i*3+2] = (Math.random() - 0.5) * 8 - 1;
    rBase[i] = y;
  }
  const rGeo = new THREE.BufferGeometry();
  rGeo.setAttribute('position', new THREE.BufferAttribute(rPos, 3));
  const river = new THREE.Points(rGeo, new THREE.PointsMaterial({
    size: 0.13, color: 0xffb24d, transparent: true, opacity: 0.32,
    map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
  }));
  scene.add(river);

  // ══════════════════════════════════════════════════════
  //  SKY LANTERNS — the signature element
  // ══════════════════════════════════════════════════════
  interface Lantern {
    group: THREE.Group;
    vy: number; swayAmp: number; swayFreq: number; phase: number;
    baseX: number; spin: number; core: THREE.Mesh;
  }
  const lanterns: Lantern[] = [];
  const LANTERN_N = 26;
  const bodyGeo = new THREE.CylinderGeometry(0.16, 0.26, 0.5, 10, 1, true);
  const coreGeo = new THREE.SphereGeometry(0.12, 8, 8);

  function makeLantern(seedHigh = false): Lantern {
    const group = new THREE.Group();
    const warm = new THREE.Color().setHSL(0.09 + Math.random() * 0.04, 0.95, 0.6);

    const body = new THREE.Mesh(bodyGeo, new THREE.MeshBasicMaterial({
      color: warm, transparent: true, opacity: 0.5, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    group.add(body);

    const core = new THREE.Mesh(coreGeo, new THREE.MeshBasicMaterial({
      color: 0xfff0c0, transparent: true, opacity: 0.95,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    core.position.y = -0.12;
    group.add(core);

    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color: warm, transparent: true, opacity: 0.8,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    halo.scale.setScalar(1.6);
    halo.position.y = -0.1;
    group.add(halo);

    const baseX = (Math.random() - 0.5) * 28;
    const y = seedHigh ? (Math.random() * 24 - 6) : (WATER_Y - 1 - Math.random() * 3);
    group.position.set(baseX, y, (Math.random() - 0.5) * 9);
    group.scale.setScalar(0.7 + Math.random() * 0.9);
    scene.add(group);

    return {
      group, core,
      vy: 0.5 + Math.random() * 0.7,
      swayAmp: 0.4 + Math.random() * 0.9,
      swayFreq: 0.4 + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2,
      baseX, spin: (Math.random() - 0.5) * 0.4,
    };
  }
  for (let i = 0; i < LANTERN_N; i++) lanterns.push(makeLantern(true));

  // ── Mouse parallax ──
  let tx = 0, ty = 0;
  window.addEventListener('mousemove', (e) => {
    tx =  (e.clientX / window.innerWidth  - 0.5) * 1.3;
    ty = -(e.clientY / window.innerHeight - 0.5) * 1.0;
  });

  const clock = new THREE.Clock();
  let T = 0;
  (function tick() {
    requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.05);
    T += dt;

    for (const L of lanterns) {
      L.group.position.y += L.vy * dt;
      L.group.position.x = L.baseX + Math.sin(T * L.swayFreq + L.phase) * L.swayAmp;
      L.group.rotation.y += L.spin * dt;
      L.core.scale.setScalar(0.85 + Math.sin(T * 8 + L.phase) * 0.15);
      if (L.group.position.y > 18) {
        L.group.position.y = WATER_Y - 1 - Math.random() * 2;
        L.baseX = (Math.random() - 0.5) * 28;
        L.group.position.z = (Math.random() - 0.5) * 9;
      }
    }

    const rp = rGeo.attributes.position.array as Float32Array;
    for (let i = 0; i < RIVER_N; i++) {
      rp[i*3+1] = rBase[i] + Math.sin(T * 1.6 + rp[i*3] * 0.5) * 0.12;
    }
    rGeo.attributes.position.needsUpdate = true;

    starField.rotation.y = T * 0.01;

    camera.position.x += (tx - camera.position.x) * 0.05;
    camera.position.y += (1 + ty - camera.position.y) * 0.05;
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
