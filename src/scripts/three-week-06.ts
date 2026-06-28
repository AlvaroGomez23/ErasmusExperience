// Week 06 — Porto / São João night
// Rising sky lanterns (balões de São João) drifting up over a proper Dom Luís I
// bridge — solid iron arch + lattice truss + towers + warm river reflection.

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

// ─── RIVER SURFACE TEXTURE (vertical gradient: warm horizon → deep night) ─
function makeWaterTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = 8; c.height = 256;
  const ctx = c.getContext('2d')!;
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0,    'rgba(255,160,70,0.55)');  // warm reflected glow at the waterline
  g.addColorStop(0.12, 'rgba(120,90,110,0.85)');
  g.addColorStop(0.45, 'rgba(20,32,55,0.95)');
  g.addColorStop(1,    'rgba(8,10,24,1)');         // deep river bed
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 8, 256);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// ─── VERTICAL REFLECTION STREAK (warm light smeared on the water) ─
function makeStreakTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = 16; c.height = 128;
  const ctx = c.getContext('2d')!;
  // soft horizontal falloff (left↔right), strong vertical smear (top↔bottom)
  const gx = ctx.createLinearGradient(0, 0, 16, 0);
  gx.addColorStop(0, 'rgba(255,180,90,0)');
  gx.addColorStop(0.5, 'rgba(255,200,110,1)');
  gx.addColorStop(1, 'rgba(255,180,90,0)');
  const gy = ctx.createLinearGradient(0, 0, 0, 128);
  gy.addColorStop(0, 'rgba(0,0,0,0)');
  gy.addColorStop(0.5, 'rgba(0,0,0,1)');
  gy.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gx;
  ctx.fillRect(0, 0, 16, 128);
  ctx.globalCompositeOperation = 'destination-in';
  ctx.fillStyle = gy;
  ctx.fillRect(0, 0, 16, 128);
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
  const HALF    = 24;          // half target span — fills the screen width
  const WATER_Y = -8.5;

  const bridge = new THREE.Group();
  scene.add(bridge);

  new GLTFLoader().load('/models/bridge.glb', (gltf) => {
    const model = gltf.scene;

    // ── Blue steel finish — metallic, cool steel-blue ──
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x4f7aa6, metalness: 0.65, roughness: 0.5,
      emissive: 0x14283f, emissiveIntensity: 0.6,
      side: THREE.DoubleSide,
    });
    model.traverse((o) => { if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).material = steelMat; });

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

  // ── River surface — gradient plane the reflection sits on ──
  const waterTex = makeWaterTexture();
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(70, 16),
    new THREE.MeshBasicMaterial({ map: waterTex, transparent: true, depthWrite: false }),
  );
  water.position.set(0, WATER_Y - 8, -6);   // fills the bottom, behind the reflection
  scene.add(water);

  // ── Reflection streaks — warm vertical smears across the whole width ──
  const streakTex = makeStreakTexture();
  const STREAK_N = 30;
  const streaks: { sp: THREE.Sprite; baseX: number; freq: number; phase: number; }[] = [];
  for (let i = 0; i < STREAK_N; i++) {
    const warm = new THREE.Color().setHSL(0.08 + Math.random() * 0.05, 0.9, 0.6);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: streakTex, color: warm, transparent: true,
      opacity: 0.18 + Math.random() * 0.22,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    const baseX = (Math.random() - 0.5) * 60;          // full width, past the bridge span
    sp.position.set(baseX, WATER_Y - 1.5 - Math.random() * 4, -2 + Math.random() * 4);
    sp.scale.set(0.5 + Math.random() * 0.7, 3 + Math.random() * 4, 1);
    scene.add(sp);
    streaks.push({ sp, baseX, freq: 0.6 + Math.random() * 0.8, phase: Math.random() * 6.28 });
  }

  // ── River shimmer band below the bridge ──
  const RIVER_N = 900;
  const rPos = new Float32Array(RIVER_N * 3);
  const rBase = new Float32Array(RIVER_N);
  for (let i = 0; i < RIVER_N; i++) {
    const x = (Math.random() - 0.5) * 60;              // match the streaks — full width
    const y = WATER_Y - Math.random() * 7;
    rPos[i*3] = x; rPos[i*3+1] = y; rPos[i*3+2] = (Math.random() - 0.5) * 10 - 1;
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
    fades: { mat: THREE.Material & { opacity: number }; base: number }[];
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
      fades: [
        { mat: body.material as THREE.MeshBasicMaterial, base: 0.5 },
        { mat: core.material as THREE.MeshBasicMaterial, base: 0.95 },
        { mat: halo.material as THREE.SpriteMaterial,    base: 0.8 },
      ],
    };
  }
  for (let i = 0; i < LANTERN_N; i++) lanterns.push(makeLantern(true));

  // ══════════════════════════════════════════════════════
  //  MARTELINHO — scroll-triggered hammer strike + sparks
  // ══════════════════════════════════════════════════════
  const IMPACT = new THREE.Vector3(0, 0.5, 8);     // dead centre, pushed toward the camera
  let shake = 0;                                    // camera shake amount, decays

  // ── Overlay layer — own canvas ABOVE the content, so the hammer renders in front ──
  const overlayCanvas = document.createElement('canvas');
  overlayCanvas.style.cssText =
    'position:fixed;inset:0;width:100%;height:100%;z-index:50;pointer-events:none;';
  document.body.appendChild(overlayCanvas);
  const overlayRenderer = new THREE.WebGLRenderer({ canvas: overlayCanvas, alpha: true, antialias: true });
  overlayRenderer.setSize(window.innerWidth, window.innerHeight);
  overlayRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  overlayRenderer.outputColorSpace = THREE.SRGBColorSpace;
  const overlayScene = new THREE.Scene();
  overlayScene.add(new THREE.AmbientLight(0xffffff, 1.1));
  const overlayKey = new THREE.DirectionalLight(0xffd9a0, 2.0);
  overlayKey.position.set(-6, 9, 8);
  overlayScene.add(overlayKey);

  // ── Spark burst (pooled, fired on impact) ──
  const BURST_N = 80;
  const bPos = new Float32Array(BURST_N * 3);
  const bVel = new Float32Array(BURST_N * 3);
  const bGeo = new THREE.BufferGeometry();
  bGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
  const burstMat = new THREE.PointsMaterial({
    size: 0.4, map: glowTex, color: 0xffd27a, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
  });
  const burst = new THREE.Points(bGeo, burstMat);
  burst.frustumCulled = false;
  overlayScene.add(burst);
  const BURST_DUR = 0.85;
  let burstT = 0, bursting = false;
  function spawnBurst(p: THREE.Vector3) {
    for (let i = 0; i < BURST_N; i++) {
      bPos[i*3] = p.x; bPos[i*3+1] = p.y; bPos[i*3+2] = p.z;
      const a = Math.random() * Math.PI * 2, sp = 2 + Math.random() * 7;
      bVel[i*3]   = Math.cos(a) * sp;
      bVel[i*3+1] = 2 + Math.random() * 6;
      bVel[i*3+2] = Math.sin(a) * sp * 0.5;
    }
    bGeo.attributes.position.needsUpdate = true;
    burstT = 0; bursting = true;
  }

  // ── Hammer: a hand swing. Drops in from off-screen ABOVE, held vertical (cocked,
  // "preparing to hit"), descends to centre, then tilts to the LEFT in an arc like an
  // arm swinging. The pivot is the "hand" on the handle; the head swings on the far end
  // and the spark + shake fire as the tilt crosses SPARK_ROT. Then it swings on through
  // and lifts back off-screen, disappearing.
  const hammerPivot = new THREE.Group();
  hammerPivot.visible = false;
  hammerPivot.position.set(8, 9, IMPACT.z);         // start in the top-RIGHT corner, off-screen
  overlayScene.add(hammerPivot);

  const START_ROT  = -0.1;                           // near-vertical, slightly cocked
  const SPARK_ROT  =  1.0;                            // tilt anchor (peak ≈ this + 0.15)
  const SPARK_AT   =  0.8;                            // fire sparks here — earlier in the downswing
  const headPos = new THREE.Vector3();              // reused: world position of the head each frame

  new GLTFLoader().load('/models/Hammer.glb', (gltf) => {
    const h = gltf.scene;
    const size = new THREE.Box3().setFromObject(h).getSize(new THREE.Vector3());
    h.scale.setScalar(3.5 / (Math.max(size.x, size.y, size.z) || 1));
    // model is already upright: handle runs down the -Y axis, the head cylinder sits on
    // top (axis along X, striking face is its curved underside). Just park the handle BASE
    // at the pivot origin so the head swings on the far end.
    h.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(h);
    const c = box.getCenter(new THREE.Vector3());
    h.position.set(-c.x, -box.min.y, -c.z);
    hammerPivot.add(h);
    hammerPivot.visible = true;     // shown once loaded; the timeline parks it off-screen at both ends

    // marker at the head centre, so sparks spawn where the striking face lands
    const headMarker = new THREE.Object3D();
    headMarker.position.set(0, (box.max.y - box.min.y) * 0.76, 0);
    hammerPivot.add(headMarker);

    // Scroll-scrubbed hand swing: drop in vertical → tilt left into the hit → swing off
    let sparked = false;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.bridges-section',
        start: 'top bottom+=40%',
        end:   'center center',
        scrub: 1.2,
        onUpdate: () => {
          // fire once as the tilt crosses SPARK_AT; re-arm if it swings back below
          if (!sparked && hammerPivot.rotation.z >= SPARK_AT) {
            spawnBurst(headMarker.getWorldPosition(headPos));
            shake = 0.5;
            sparked = true;
          } else if (hammerPivot.rotation.z < SPARK_AT) {
            sparked = false;
          }
        },
      },
    });
    // 1. fly in from the top-right corner toward centre
    tl.fromTo(hammerPivot.position, { x: 8, y: 9 }, { x: 0, y: -1.5, duration: 0.5, ease: 'power2.out' }, 0);
    // 2. tilt left through the WHOLE approach — already swinging as it arrives
    tl.fromTo(hammerPivot.rotation, { z: START_ROT }, { z: SPARK_ROT + 0.15, duration: 0.55, ease: 'power2.in' }, 0.05);
    // 3. tiny settle on impact
    tl.to(hammerPivot.rotation, { z: SPARK_ROT + 0.02, duration: 0.08, ease: 'power1.out' }, 0.6);
    // 4. swing on through and lift back off-screen, disappearing
    tl.to(hammerPivot.rotation, { z: 1.9, duration: 0.32, ease: 'power1.in' }, 0.68);
    tl.to(hammerPivot.position, { y: 10, x: -5, duration: 0.32, ease: 'power2.in' }, 0.68);
  });

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

      // fade in low, fade out high — so the recycle teleport happens at opacity 0
      const y = L.group.position.y;
      const fadeIn  = THREE.MathUtils.smoothstep(y, -11, -7);
      const fadeOut = 1 - THREE.MathUtils.smoothstep(y, 13, 17.5);
      const f = fadeIn * fadeOut;
      for (const fd of L.fades) fd.mat.opacity = fd.base * f;

      if (y > 18) {
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

    for (const s of streaks) {
      s.sp.position.x = s.baseX + Math.sin(T * s.freq + s.phase) * 0.5;
      const m = s.sp.material as THREE.SpriteMaterial;
      m.opacity = 0.22 + Math.sin(T * s.freq * 1.7 + s.phase) * 0.14;
    }

    starField.rotation.y = T * 0.01;

    // spark burst integration
    if (bursting) {
      burstT += dt;
      for (let i = 0; i < BURST_N; i++) {
        bVel[i*3+1] -= 14 * dt;              // gravity
        bPos[i*3]   += bVel[i*3]   * dt;
        bPos[i*3+1] += bVel[i*3+1] * dt;
        bPos[i*3+2] += bVel[i*3+2] * dt;
      }
      bGeo.attributes.position.needsUpdate = true;
      const k = burstT / BURST_DUR;
      burstMat.opacity = Math.max(0, 1 - k);
      burstMat.size = 0.4 * (1 + k);
      if (burstT >= BURST_DUR) bursting = false;
    }

    camera.position.x += (tx - camera.position.x) * 0.05;
    camera.position.y += (1 + ty - camera.position.y) * 0.05;
    if (shake > 0) {
      shake = Math.max(0, shake - dt * 1.8);
      camera.position.x += (Math.random() - 0.5) * shake;
      camera.position.y += (Math.random() - 0.5) * shake;
    }
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    overlayRenderer.render(overlayScene, camera);
  })();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    overlayRenderer.setSize(window.innerWidth, window.innerHeight);
    overlayRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}

// ═══ SCROLL-TRIGGERED REVEALS ═══════════════════════════
// Each section's tag + heading rise on entry; cards, the quadra,
// and photos drift up in a stagger as they reach the viewport.

// Section tags + headings — fade up together
gsap.utils.toArray<HTMLElement>('.content-section').forEach((sec) => {
  const bits = sec.querySelectorAll<HTMLElement>(':scope > .section-tag, :scope > h2, :scope > p');
  gsap.fromTo(bits,
    { y: 42, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: sec, start: 'top 78%' },
    });
});

// Quadra verse — slide in from the left
gsap.fromTo('.quadra',
  { x: -50, opacity: 0 },
  {
    x: 0, opacity: 1, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '.quadra', start: 'top 85%' },
  });

// Photo grid — rise + scale in a stagger
gsap.utils.toArray<HTMLElement>('.photo-item').forEach((item, i) => {
  gsap.fromTo(item,
    { y: 50, opacity: 0, scale: 0.9 },
    {
      y: 0, opacity: 1, scale: 1, duration: 0.7, delay: (i % 3) * 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: '.photo-grid', start: 'top 82%' },
    });
});
