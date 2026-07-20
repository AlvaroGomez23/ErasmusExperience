// Week 10 — "Six glasses down the Douro"
// Two independent pieces on this page:
//   1. Hero model on the layout's #three-canvas (week-10 sets modelPath="skip",
//      so three-week.ts leaves the canvas alone and this file owns it).
//   2. The flood: a WebGL wine tide rises over the whole viewport, holds a
//      beat, drains away, and leaves each card stained the colour of its
//      own wine. Grapes and a bottle ride the surface up, then beach in the
//      bottom corners when the wine drains — and stay there, bobbing.

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Hero GLB. If it fails to load, we fall back to a lathed pipa.
const MODEL_PATH = '/models/Barrel.glb';

// ─── HERO MODEL ──────────────────────────────────────────
const canvas = document.getElementById('three-canvas') as HTMLCanvasElement | null;

if (canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0.6, 7.5);
  camera.lookAt(0, 0, 0);

  // Schist-pale page, so the model needs a warm key and a cool bounce off the
  // "ground" to avoid reading as a flat silhouette against the background.
  scene.add(new THREE.AmbientLight(0xffffff, 0.75));
  scene.add(new THREE.HemisphereLight(0xfff2d8, 0x7e8c4f, 0.55));
  const key = new THREE.DirectionalLight(0xfff0d0, 2.1);
  key.position.set(4, 7, 5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xd8dcc0, 0.6);
  fill.position.set(-5, 1, 4);
  scene.add(fill);

  // One animated property per level → idle / entrance / parallax never collide.
  const tiltGroup = new THREE.Group();
  const entryGroup = new THREE.Group();
  const floatGroup = new THREE.Group();
  const spinGroup = new THREE.Group();
  tiltGroup.add(entryGroup);
  entryGroup.add(floatGroup);
  floatGroup.add(spinGroup);
  scene.add(tiltGroup);

  // A pipa: bulged profile revolved on Y, plus iron hoops. Stands in until the
  // real hero GLB lands.
  function makePipa(): THREE.Group {
    const g = new THREE.Group();

    const profile: THREE.Vector2[] = [];
    for (let i = 0; i <= 14; i++) {
      const y = -1 + (2 * i) / 14;
      profile.push(new THREE.Vector2(1 - 0.28 * y * y, y));
    }
    const staves = new THREE.Mesh(
      new THREE.LatheGeometry(profile, 24),
      new THREE.MeshStandardMaterial({ color: 0x6b4a2f, roughness: 0.85, side: THREE.DoubleSide })
    );
    g.add(staves);

    // Cap the open ends of the lathe
    for (const y of [-1, 1]) {
      const cap = new THREE.Mesh(
        new THREE.CircleGeometry(0.72, 24),
        new THREE.MeshStandardMaterial({ color: 0x7d5836, roughness: 0.8 })
      );
      cap.rotation.x = y > 0 ? -Math.PI / 2 : Math.PI / 2;
      cap.position.y = y;
      g.add(cap);
    }

    const iron = new THREE.MeshStandardMaterial({ color: 0x4a4038, roughness: 0.45, metalness: 0.75 });
    for (const y of [-0.62, -0.2, 0.2, 0.62]) {
      const hoop = new THREE.Mesh(new THREE.TorusGeometry(1 - 0.28 * y * y + 0.015, 0.035, 8, 40), iron);
      hoop.rotation.x = Math.PI / 2;
      hoop.position.y = y;
      g.add(hoop);
    }

    g.scale.setScalar(1.7);
    g.rotation.z = Math.PI / 2;   // lying on its side, the way a cask rests
    return g;
  }

  // Centre on origin and normalise to a consistent on-screen height.
  function fit(obj: THREE.Object3D, targetHeight: number) {
    const box = new THREE.Box3().setFromObject(obj);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const s = targetHeight / size.y;
    obj.scale.multiplyScalar(s);
    obj.position.set(-center.x * s, -center.y * s, -center.z * s);
  }

  function reveal() {
    if (!reduce) {
      gsap.to(spinGroup.rotation, { y: Math.PI * 2, duration: 30, ease: 'none', repeat: -1 });
      gsap.to(floatGroup.position, { y: '+=0.16', duration: 5.5, ease: 'power1.inOut', repeat: -1, yoyo: true });
    }
    gsap.set(canvas, { opacity: 0 });
    gsap.set(entryGroup.scale, { x: 0.82, y: 0.82, z: 0.82 });
    const tl = gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top 85%', once: true } });
    tl.to(canvas, { opacity: 1, duration: 1.5, ease: 'power3.out' }, 0)
      .to(entryGroup.scale, { x: 1, y: 1, z: 1, duration: 1.5, ease: 'power3.out' }, 0);
  }

  new GLTFLoader().load(
    MODEL_PATH,
    (gltf) => {
      const model = gltf.scene;
      model.rotation.z = Math.PI / 2;   // lying on its side, the way a cask rests
      fit(model, 2.6);                  // fit() reads the rotated box, so call it after
      spinGroup.add(model);
      reveal();
    },
    undefined,
    () => {
      const pipa = makePipa();
      fit(pipa, 2.6);
      spinGroup.add(pipa);
      reveal();
    }
  );

  const MAX_TILT = 0.055;
  let targetRX = 0, targetRY = 0;
  function onMouseMove(e: MouseEvent) {
    targetRY = (e.clientX / window.innerWidth - 0.5) * 2 * MAX_TILT;
    targetRX = (e.clientY / window.innerHeight - 0.5) * 2 * MAX_TILT;
  }
  window.addEventListener('mousemove', onMouseMove);

  let rafId = 0;
  (function tick() {
    rafId = requestAnimationFrame(tick);
    tiltGroup.rotation.x += (targetRX - tiltGroup.rotation.x) * 0.05;
    tiltGroup.rotation.y += (targetRY - tiltGroup.rotation.y) * 0.05;
    renderer.render(scene, camera);
  })();

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
  window.addEventListener('resize', onResize);

  document.addEventListener('astro:before-swap', () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    ScrollTrigger.getAll().forEach((st) => st.kill());
    renderer.dispose();
  }, { once: true });
}

// ─── THE FLOOD ───────────────────────────────────────────
// Full-screen WebGL wine tide. Scroll fires it once: the wine rises from the
// bottom of the viewport with a live shader surface (drifting waves, meniscus
// glow, rising bubbles), holds a beat fully submerged, then drains. All cards
// dye in one go while the screen is fully covered — the drain reveals the
// whole page already stained.
const cards = gsap.utils.toArray<HTMLElement>('.wine-card');
// Every card on the page dyes, not just the flight — the wine soaks the lot.
const allSections = gsap.utils.toArray<HTMLElement>('.content-section');

if (cards.length) {
  if (reduce) {
    gsap.set(cards, { '--stain': 1 });
    gsap.set(allSections, { '--stain': 1 });
  } else {
    const targets: HTMLElement[] = [...cards, ...allSections];

    // ── Floaters ──
    // Grapes + bottle ride the tide's surface, get carried up with it, then
    // beach themselves in the bottom corners when the wine drains — and stay.
    // Preloaded at page load so they're already in hand when the flood fires.
    // A failed load just means that floater never joins; the flood is fine.
    type Floater = {
      obj: THREE.Group;
      parkX: number;   // parked position, fractions of the visible half-extents —
      parkY: number;   //   also the x it rides at, so the drain only settles it down
      phase: number;   // desyncs the two rocking/bobbing motions
      riding: boolean;
    };
    const floaters: Floater[] = [];
    const floaterLoader = new GLTFLoader();
    function preloadFloater(
      path: string,
      spec: { parkX: number; parkY: number; height: number; phase: number }
    ) {
      floaterLoader.load(path, (gltf) => {
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const s = spec.height / size.y;
        model.scale.setScalar(s);
        model.position.set(-center.x * s, -center.y * s, -center.z * s);
        const obj = new THREE.Group();
        obj.add(model);
        floaters.push({ obj, parkX: spec.parkX, parkY: spec.parkY, phase: spec.phase, riding: true });
      });
    }
    preloadFloater('/models/Grapes.glb',      { parkX: -0.76, parkY: -0.60, height: 0.9, phase: 0 });
    preloadFloater('/models/Wine_bottle.glb', { parkX:  0.76, parkY: -0.52, height: 1.7, phase: 2.1 });

    const FLOOD_VERT = /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `;

    // uLevel is the wine's base height in viewport fractions: 0 = bottom
    // edge, 1 = top. The sines ride on top of it, so full cover needs
    // level > 1 + wave amplitude and full drain needs level < -amplitude.
    const FLOOD_FRAG = /* glsl */ `
      precision highp float;
      uniform float uTime;
      uniform float uLevel;
      uniform float uAspect;
      varying vec2 vUv;

      float hash(float n) { return fract(sin(n) * 43758.5453123); }

      void main() {
        float x = vUv.x * uAspect;

        // Surface: three sine layers drifting at different speeds
        float w = 0.020 * sin(x * 5.0  + uTime * 1.3)
                + 0.012 * sin(x * 11.0 - uTime * 2.1 + 1.7)
                + 0.006 * sin(x * 23.0 + uTime * 3.4 + 4.2);
        float surface = uLevel + w;
        float depth = surface - vUv.y;
        if (depth < 0.0) discard;

        // Bordeaux, darker with depth
        vec3 col = mix(vec3(0.369, 0.137, 0.200),
                       vec3(0.180, 0.027, 0.082),
                       smoothstep(0.0, 0.9, depth));

        // Meniscus: pale glowing lip hugging the surface
        col = mix(col, vec3(0.790, 0.420, 0.500), exp(-depth * 55.0) * 0.85);

        // Bubbles, wobbling as they rise, capped below the surface
        for (int i = 0; i < 22; i++) {
          float fi = float(i);
          float sp = 0.05 + hash(fi * 3.17) * 0.10;
          float bx = hash(fi * 7.31) * uAspect + 0.012 * sin(uTime * 2.0 + fi * 1.7);
          float by = fract(hash(fi * 9.73) + uTime * sp) * max(surface - 0.05, 0.0);
          float r = 0.004 + hash(fi * 5.53) * 0.005;
          col += smoothstep(r, r * 0.35, length(vec2(x, vUv.y) - vec2(bx, by))) * 0.18;
        }

        // Slightly translucent lip, near-opaque body
        gl_FragColor = vec4(col, mix(0.82, 0.97, smoothstep(0.0, 0.30, depth)));
      }
    `;

    // ── Drips ──
    // After the flood, the glass content sections shed drops of wine off
    // their bottom edge, forever (the wine cards inside stay dry — drops
    // there fell across their own text). Real teardrop: SVG path, pointed
    // top, round bulb, gloss highlight. Swells at the lip, lets go with a
    // slight stretch, fades mid-fall. Inline-styled: Astro's scoped styles
    // can't reach JS-created elements.
    function startDrips() {
      const timers: number[] = [];
      const spawn = (el: HTMLElement) => {
        const size = 7 + Math.random() * 5;
        const drop = document.createElement('span');
        drop.style.cssText =
          `position:absolute;bottom:${(-size * 0.8).toFixed(1)}px;left:${(4 + Math.random() * 92).toFixed(1)}%;` +
          `width:${size.toFixed(1)}px;height:${(size * 1.3).toFixed(1)}px;` +
          'pointer-events:none;transform:scale(0);transform-origin:top center;';
        drop.innerHTML =
          '<svg width="100%" height="100%" viewBox="0 0 24 30">' +
          '<path d="M12 0 C12 6 3 14 3 21 a9 9 0 0 0 18 0 C21 14 12 6 12 0 Z" fill="#5E2333"/>' +
          '<ellipse cx="8.5" cy="21" rx="2.2" ry="3.2" fill="#FBF9F3" opacity="0.35"/>' +
          '</svg>';
        el.appendChild(drop);
        gsap.timeline({ onComplete: () => drop.remove() })
          .to(drop, { scale: 1, duration: 0.55, ease: 'power2.out' })   // swells at the lip
          .to(drop, { y: 70 + Math.random() * 60, scaleY: 1.18, duration: 0.65, ease: 'power2.in' })
          .to(drop, { opacity: 0, duration: 0.22 }, '-=0.22');
      };
      allSections.forEach((el, i) => {
        // Drops position against the section's edge — make sure it's positioned
        if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
        const tick = () => {
          spawn(el);
          timers[i] = window.setTimeout(tick, 250 + Math.random() * 700);
        };
        timers[i] = window.setTimeout(tick, 100 + Math.random() * 400);
      });
      document.addEventListener(
        'astro:before-swap',
        () => timers.forEach((t) => clearTimeout(t)),
        { once: true }
      );
    }

    // Built lazily: no second WebGL context until the flood actually fires.
    function startFlood() {
      const floodCanvas = document.createElement('canvas');
      floodCanvas.style.cssText =
        'position:fixed;inset:0;width:100%;height:100%;z-index:90;pointer-events:none;';
      document.body.appendChild(floodCanvas);

      const floodRenderer = new THREE.WebGLRenderer({ canvas: floodCanvas, alpha: true, antialias: true });
      floodRenderer.setSize(window.innerWidth, window.innerHeight);
      floodRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      floodRenderer.autoClear = false;   // two passes: wine quad, then floaters

      const uniforms = {
        uTime: { value: 0 },
        uLevel: { value: -0.15 },
        uAspect: { value: window.innerWidth / window.innerHeight },
      };
      const floodScene = new THREE.Scene();
      const quad = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          uniforms,
          vertexShader: FLOOD_VERT,
          fragmentShader: FLOOD_FRAG,
          transparent: true,
          depthTest: false,
        })
      );
      floodScene.add(quad);
      // Vertex shader writes clip space directly; the camera is never used.
      const floodCam = new THREE.Camera();

      // Floaters get their own scene, rendered after the wine with the depth
      // buffer cleared — drawn in the same scene they'd be blended UNDER the
      // transparent quad (opaque pass runs first) and read as sunk, not afloat.
      const floaterScene = new THREE.Scene();
      floaterScene.add(new THREE.AmbientLight(0xffffff, 0.8));
      const floaterKey = new THREE.DirectionalLight(0xfff0d0, 1.8);
      floaterKey.position.set(3, 6, 5);
      floaterScene.add(floaterKey);
      const floaterCam = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 50);
      floaterCam.position.z = 6;

      // Visible world extents at z=0 — the JS side of the shader's uv space
      let halfH = Math.tan((floaterCam.fov * Math.PI) / 360) * floaterCam.position.z;
      let halfW = halfH * floaterCam.aspect;

      // Same three sines as FLOOD_FRAG, so a floater sits exactly on the
      // rendered surface and rides the actual waves
      const surfaceWorldY = (worldX: number, t: number) => {
        const x = ((worldX / halfW + 1) / 2) * uniforms.uAspect.value;
        const w = 0.020 * Math.sin(x * 5.0 + t * 1.3)
                + 0.012 * Math.sin(x * 11.0 - t * 2.1 + 1.7)
                + 0.006 * Math.sin(x * 23.0 + t * 3.4 + 4.2);
        return ((uniforms.uLevel.value + w) * 2 - 1) * halfH;
      };

      let drained = false;
      const parkFloater = (f: Floater) => {
        f.riding = false;
        // It rode the surface down to (about) park height already — this only
        // absorbs the last wave-sized gap, or the full trip for a late loader.
        gsap.to(f.obj.position, { y: f.parkY * halfH, duration: 0.8, ease: 'power2.out' });
        gsap.to(f.obj.rotation, { z: 0, duration: 0.8, ease: 'power2.out' });
        // then bob in place, forever
        gsap.to(f.obj.position, {
          y: `+=${halfH * 0.02}`, duration: 2.6, ease: 'sine.inOut',
          repeat: -1, yoyo: true, delay: 0.9 + f.phase * 0.2,
        });
      };

      let floodRaf = 0;
      const t0 = performance.now();
      let tPrev = 0;
      (function loop() {
        floodRaf = requestAnimationFrame(loop);
        const t = (performance.now() - t0) / 1000;
        const dt = t - tPrev;
        tPrev = t;
        uniforms.uTime.value = t;

        for (const f of floaters) {
          if (!f.obj.parent) floaterScene.add(f.obj);   // may finish loading mid-flood
          f.obj.rotation.y += dt * (f.riding ? 0.5 : 0.12);
          if (f.riding) {
            f.obj.position.x = f.parkX * halfW;
            const surfY = surfaceWorldY(f.obj.position.x, t);
            // Ride the surface all the way down; beach the moment it sinks
            // past the park height (or immediately, if loaded post-drain).
            if (drained && surfY <= f.parkY * halfH) { parkFloater(f); continue; }
            f.obj.position.y = surfY;
            f.obj.rotation.z = 0.10 * Math.sin(t * 1.6 + f.phase);  // rocking
          }
        }

        floodRenderer.clear();
        floodRenderer.render(floodScene, floodCam);
        floodRenderer.clearDepth();
        floodRenderer.render(floaterScene, floaterCam);
      })();

      const onFloodResize = () => {
        floodRenderer.setSize(window.innerWidth, window.innerHeight);
        uniforms.uAspect.value = window.innerWidth / window.innerHeight;
        floaterCam.aspect = uniforms.uAspect.value;
        floaterCam.updateProjectionMatrix();
        halfH = Math.tan((floaterCam.fov * Math.PI) / 360) * floaterCam.position.z;
        halfW = halfH * floaterCam.aspect;
      };
      window.addEventListener('resize', onFloodResize);

      // On mobile the parked floaters would sit over the copy and annoy the
      // reading — once the wine is gone, tuck the canvas behind the content
      // (.week-content is z-10; layout canvases are 0/1). Desktop keeps them
      // on top. Live media-query listener: rotating a phone re-applies it.
      let floodDone = false;
      const mobileMq = window.matchMedia('(max-width: 768px)');
      const applyLayer = () => {
        floodCanvas.style.zIndex = floodDone && mobileMq.matches ? '2' : '90';
      };
      mobileMq.addEventListener('change', applyLayer);

      // The canvas now outlives the timeline — the parked floaters stay on
      // the page — so full teardown only happens on navigation.
      const teardown = () => {
        cancelAnimationFrame(floodRaf);
        window.removeEventListener('resize', onFloodResize);
        mobileMq.removeEventListener('change', applyLayer);
        floodRenderer.dispose();
        floodCanvas.remove();
      };
      document.addEventListener('astro:before-swap', teardown, { once: true });

      // Time-driven, not scrubbed: scroll only fires it, then it plays itself
      // out. A scrubbed flood strands mid-cover (wine stuck over the screen)
      // whenever the page runs out of scroll before the timeline ends.
      gsap.timeline({
        onComplete: () => {
          quad.visible = false;  // wine gone; floaters stay
          floodDone = true;
          applyLayer();
          startDrips();          // freshly dyed cards start shedding drops
        },
      })
        .to(uniforms.uLevel, { value: 1.12, duration: 2.0, ease: 'power1.inOut' })
        // Progressive soak, all targets together: starts under full cover and
        // is still deepening while the drain reveals the page — no visible snap.
        .to(targets, { '--stain': 1, duration: 1.6, ease: 'power1.inOut' })
        // Drain starts 0.6s into the soak — that gap is the submerged hold.
        // The floaters keep riding the falling surface and beach in the
        // corners the moment it drops below their park height.
        .to(uniforms.uLevel, {
          value: -0.15, duration: 1.7, ease: 'power2.in',
          onStart: () => { drained = true; },
        }, '-=1.0');
    }

    // Fires on the 2nd card ("The ritual"), one section ahead of the flight,
    // so the tide is already rising by the time the cards arrive.
    ScrollTrigger.create({
      trigger: allSections[1] ?? '.flight-section',
      start: 'top 75%',
      once: true,
      onEnter: startFlood,
    });
  }
}
