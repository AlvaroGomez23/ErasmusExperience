// Week 09 — World Cup: hero trophy (worldcup.glb) + bracket reveal (GSAP)
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ─── HERO TROPHY (worldcup.glb on the layout #three-canvas) ──────────
const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;
if (canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.7;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0.4, 7);
  camera.lookAt(0, 0, 0);

  // Environment map → metal has something to reflect. Scaled down so it doesn't
  // flood the gold flat — directional key does the shading/contrast.
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.35;

  // Directional key carries the form; ambient/hemisphere just lift the shadows
  scene.add(new THREE.AmbientLight(0xffffff, 0.18));
  scene.add(new THREE.HemisphereLight(0xffe6a8, 0x2a1a55, 0.25));
  const key = new THREE.DirectionalLight(0xffd27a, 2.0);
  key.position.set(5, 6, 5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x9fc0ff, 0.7);
  fill.position.set(-6, 2, 3);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xffffff, 1.2);
  rim.position.set(0, 3, -6);
  scene.add(rim);

  // Group hierarchy: tilt (parallax) → entry (entrance) → spin (idle) → model
  const tiltGroup = new THREE.Group();
  const entryGroup = new THREE.Group();
  const spinGroup = new THREE.Group();
  tiltGroup.add(entryGroup);
  entryGroup.add(spinGroup);
  scene.add(tiltGroup);

  new GLTFLoader().load('/models/worldcup.glb', (gltf) => {
    const model = gltf.scene;
    // Fit: centre, scale to a consistent height
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const s = 4 / size.y;
    model.scale.setScalar(s);
    model.position.set(-center.x * s, -center.y * s, -center.z * s);
    spinGroup.add(model);

    // Idle: slow rotation + gentle float
    if (!reduce) {
      gsap.to(spinGroup.rotation, { y: Math.PI * 2, duration: 22, ease: 'none', repeat: -1 });
      gsap.to(spinGroup.position, { y: '+=0.15', duration: 5, ease: 'power1.inOut', repeat: -1, yoyo: true });
    }

    // Entrance: fade canvas + scale up on the hero
    gsap.set(canvas, { opacity: 0 });
    gsap.set(entryGroup.scale, { x: 0.8, y: 0.8, z: 0.8 });
    const tl = gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top 85%', once: true } });
    tl.to(canvas, { opacity: 1, duration: 1.4, ease: 'power3.out' }, 0)
      .to(entryGroup.scale, { x: 1, y: 1, z: 1, duration: 1.4, ease: 'power3.out' }, 0);
  });

  // Mouse parallax (lerped)
  const MAX_TILT = 0.06;
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
    renderer.dispose();
  }, { once: true });
}

// ─── CHAMPION CELEBRATION ────────────────────────────────────────────
const champCard = document.querySelector('.champ') as HTMLElement | null;

// per-letter spans so the wordmark can stagger in (and pop on click).
// Must run before the reveal timeline is built — GSAP resolves selectors then.
const titleEl = champCard?.querySelector('.champ-title') as HTMLElement | null;
if (titleEl) {
  const text = titleEl.textContent ?? '';
  titleEl.textContent = '';
  for (const c of text) {
    const s = document.createElement('span');
    s.className = 'ch';
    s.textContent = c;
    titleEl.appendChild(s);
  }
}

const COLORS = ['#FFC200', '#E8112D', '#1E5BE6', '#6A2CB0', '#12B6A6', '#ffffff'];

// confetti fountain out of the card, raining back down over the page
function burst(power = 1) {
  if (!champCard) return;
  const rect = champCard.getBoundingClientRect();
  const n = Math.round((reduce ? 18 : 70) * power);
  for (let i = 0; i < n; i++) {
    const p = document.createElement('div');
    p.className = 'pk-confetti';
    p.style.background = COLORS[i % COLORS.length];
    p.style.left = rect.left + Math.random() * rect.width + 'px';
    p.style.top = rect.top + rect.height * 0.35 + 'px';
    document.body.appendChild(p);
    gsap.set(p, { scale: 0.6 + Math.random() * 0.7 });
    gsap.to(p, {
      x: (Math.random() - 0.5) * rect.width * 2.2,
      y: -120 - Math.random() * 260,
      duration: 0.5 + Math.random() * 0.3,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(p, {
          y: `+=${420 + Math.random() * 320}`,
          x: `+=${(Math.random() - 0.5) * 180}`,
          rotation: Math.random() * 1080 - 540,
          opacity: 0,
          duration: 1.4 + Math.random() * 0.9,
          ease: 'power1.in',
          onComplete: () => p.remove(),
        });
      },
    });
  }
}

if (champCard) {
  champCard.style.cursor = 'pointer';
  champCard.addEventListener('click', () => {
    burst(0.7);
    gsap.fromTo('.champ-trophy', { scale: 1 }, { scale: 1.45, duration: 0.2, yoyo: true, repeat: 1, ease: 'power2.out' });
    gsap.fromTo('.champ-title .ch',
      { y: 0 },
      { y: -12, duration: 0.18, yoyo: true, repeat: 1, ease: 'power2.out', stagger: 0.02 });
  });
}

// ─── BRACKET REVEAL ──────────────────────────────────────────────────
const bracket = document.querySelector('.bracket');

if (bracket && !reduce) {
  const matches   = gsap.utils.toArray<HTMLElement>('.match');
  const funnels   = gsap.utils.toArray<HTMLElement>('.funnel span');
  const champ     = document.querySelector('.champ');

  // connectors start collapsed
  gsap.set('.f-left, .f-right, .f-down', { scaleY: 0 });
  gsap.set('.f-bar', { scaleX: 0 });

  const tl = gsap.timeline({
    scrollTrigger: { trigger: bracket, start: 'top 72%', once: true },
  });

  tl.from(matches, {
      y: 34, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.14,
    })
    .to('.f-left, .f-right', { scaleY: 1, duration: 0.28, ease: 'power2.out' }, '-=0.1')
    .to('.f-bar',  { scaleX: 1, duration: 0.35, ease: 'power2.out' })
    .to('.funnel:not(.funnel--single) .f-down', { scaleY: 1, duration: 0.28, ease: 'power2.out' })
    .to('.funnel--single .f-down', { scaleY: 1, duration: 0.3, ease: 'power2.out' }, '+=0.05');

  if (champ) {
    // the champion gets its own lift-the-trophy sequence, not just a fade
    tl.from(champ, { scale: 0.6, y: 40, opacity: 0, duration: 0.7, ease: 'back.out(1.8)' }, '-=0.15')
      // opacity only — the rays' transform belongs to the CSS spin animation
      .from('.champ-rays', { opacity: 0, duration: 0.9, ease: 'power2.out' }, '<0.1')
      .from('.champ-trophy', { y: -140, rotate: -35, opacity: 0, duration: 0.8, ease: 'bounce.out' }, '<0.05')
      .from('.champ-stars i', { scale: 0, rotate: 180, duration: 0.4, ease: 'back.out(3)', stagger: 0.12 }, '-=0.3')
      .from('.champ-team', { y: 18, opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
      .from('.champ-title .ch', { y: 26, opacity: 0, duration: 0.4, ease: 'back.out(2)', stagger: 0.035 }, '-=0.15')
      .add(() => burst(), '-=0.4')
      .from('.champ-hint', { opacity: 0, duration: 0.5 }, '-=0.2');
  }
}
