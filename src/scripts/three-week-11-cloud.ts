// Week 11 — "memory cloud". Floats a field of cards in 3D space with a
// pinned scroll-flythrough, mouse parallax, and a hand-drawn "The End".
//
// LOAD_PHOTOS = false → uses week-coloured placeholder cards only, makes ZERO
// Supabase requests (safe against usage limits). Flip to true to pull real
// photos from every published week's Supabase folder.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { createClient } from '@supabase/supabase-js';
import { weeks } from '../data/weeks';

gsap.registerPlugin(ScrollTrigger);

const LOAD_PHOTOS = true;   // ← set true to load ALL real Supabase photos (folder listing)

// Load exactly ONE photo (a single public-object GET) and reuse it across
// every card in the cloud. Set to '' to fall back to colour placeholders.
// Must be '' when LOAD_PHOTOS is true, or the shared photo overrides every card.
const SINGLE_PHOTO = '';

const canvas = document.getElementById('memory-canvas') as HTMLCanvasElement | null;
if (canvas) init(canvas);

function readJSON<T>(id: string, fallback: T): T {
  const el = document.getElementById(id);
  if (!el?.textContent) return fallback;
  try { return JSON.parse(el.textContent) as T; } catch { return fallback; }
}

// Fisher-Yates in place — new random order every page load.
function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function collectPhotoUrls(): Promise<string[]> {
  const cfg = readJSON<{ url?: string; key?: string }>('sb-config', {});
  if (!cfg.url || !cfg.key) return [];

  const supabase = createClient(cfg.url, cfg.key);
  const BUCKET = 'Photos';
  const PHOTO_RE = /\.(jpe?g|webp|png)$/i;
  const PER_WEEK = 4;   // random photos taken from each week — keeps texture count sane

  // Discover folders live by listing the bucket root — any week folder added to
  // Supabase shows up automatically on next visit, no code change needed.
  // (Storage lists folders as entries whose id is null.)
  const { data: roots } = await supabase.storage.from(BUCKET).list('', { limit: 1000 });
  const folders = (roots ?? []).filter((e) => !e.id).map((e) => e.name);

  // Pull PER_WEEK photos from every folder. list() runs live at page load, so
  // new photos inside a folder also appear automatically on next visit.
  const perWeek: string[][] = await Promise.all(folders.map(async (folder) => {
    const { data, error } = await supabase.storage.from(BUCKET).list(folder, {
      limit: 500, sortBy: { column: 'name', order: 'asc' },
    });
    if (error || !data) return [];
    const files = data.filter((f) => PHOTO_RE.test(f.name));
    if (files.length === 0) return [];
    // Random pick for variety — shuffle the folder, take up to PER_WEEK.
    return shuffle(files).slice(0, PER_WEEK).map((f) =>
      supabase.storage.from(BUCKET).getPublicUrl(`${folder}/${f.name}`).data.publicUrl,
    );
  }));

  // Interleave weeks round-robin so the cloud mixes weeks instead of clustering
  // one week together, then shuffle the whole set for good measure. Cap at 200.
  const urls: string[] = [];
  const max = Math.max(0, ...perWeek.map((w) => w.length));
  for (let i = 0; i < max; i++) {
    for (const w of perWeek) {
      if (w[i] && urls.length < 200) urls.push(w[i]);
    }
  }
  return shuffle(urls);
}

// Gradient placeholder card in a week's colour (no network needed).
function makeGradientTexture(hex: string): THREE.CanvasTexture {
  const w = 320, h = 400;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d')!;
  const col = new THREE.Color(hex);
  const light = col.clone().lerp(new THREE.Color(0xffffff), 0.35).getStyle();
  const dark  = col.clone().lerp(new THREE.Color(0x000000), 0.25).getStyle();
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, light);
  g.addColorStop(1, dark);
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 8;
  ctx.strokeRect(4, 4, w - 8, h - 8);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Build the card list: either real photo URLs, or ~24 colour placeholders.
async function buildItems(): Promise<Array<{ url?: string; color?: string }>> {
  if (LOAD_PHOTOS) {
    const urls = await collectPhotoUrls();
    if (urls.length) return urls.map((url) => ({ url }));
  }
  const items: Array<{ color: string }> = [];
  for (let i = 0; i < 24; i++) items.push({ color: weeks[i % weeks.length].primaryColor });
  return items;
}

async function init(canvas: HTMLCanvasElement) {
  const items = await buildItems();
  if (items.length === 0) return;   // nothing to show, leave canvas empty

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.z = 14;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  function resize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  const loader = new THREE.TextureLoader();
  loader.crossOrigin = 'anonymous';
  const group = new THREE.Group();
  scene.add(group);

  // Preload the single shared photo ONCE (one network request total).
  let sharedTex: THREE.Texture | null = null;
  let sharedAspect = 0.8;
  if (SINGLE_PHOTO) {
    sharedTex = await new Promise<THREE.Texture | null>((resolve) => {
      loader.load(SINGLE_PHOTO, (tex) => resolve(tex), undefined, () => resolve(null));
    });
    if (sharedTex) {
      sharedTex.colorSpace = THREE.SRGBColorSpace;
      const img = sharedTex.image as HTMLImageElement;
      if (img?.width) sharedAspect = img.width / img.height;
    }
  }

  type Card = { mesh: THREE.Mesh; spin: number; bob: number; phase: number };
  const cards: Card[] = [];
  const R = 8;   // cloud radius

  function popIn(mat: THREE.MeshBasicMaterial, mesh: THREE.Mesh) {
    gsap.to(mat, { opacity: 1, duration: 1.2, ease: 'power2.out', delay: Math.random() * 0.6 });
    gsap.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 1.1, ease: 'back.out(1.6)', delay: Math.random() * 0.6 });
  }

  items.forEach((item, i) => {
    // Fibonacci sphere → even distribution around the camera.
    const y = 1 - (i / Math.max(1, items.length - 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = i * 2.399963229728653;   // golden angle
    const pos = new THREE.Vector3(
      Math.cos(theta) * radius, y, Math.sin(theta) * radius,
    ).multiplyScalar(R * (0.7 + Math.random() * 0.5));

    const mat = new THREE.MeshBasicMaterial({
      color: 0x888888, transparent: true, opacity: 0, side: THREE.DoubleSide,
      toneMapped: false,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
    mesh.position.copy(pos);
    mesh.scale.setScalar(0.001);
    group.add(mesh);
    cards.push({ mesh, spin: (Math.random() - 0.5) * 0.3, bob: 0.2 + Math.random() * 0.3, phase: Math.random() * Math.PI * 2 });

    if (sharedTex) {
      // Every card shares the one preloaded photo (no extra requests).
      const h = 2.6, w = h * sharedAspect;
      mesh.geometry.dispose();
      mesh.geometry = new THREE.PlaneGeometry(w, h);
      mat.color.set(0xffffff);
      mat.map = sharedTex;
      mat.needsUpdate = true;
      popIn(mat, mesh);
    } else if (item.color) {
      // Placeholder card — ready immediately, no network.
      const h = 2.6, w = h * 0.8;
      mesh.geometry.dispose();
      mesh.geometry = new THREE.PlaneGeometry(w, h);
      mat.color.set(0xffffff);
      mat.map = makeGradientTexture(item.color);
      mat.needsUpdate = true;
      popIn(mat, mesh);
    } else if (item.url) {
      loader.load(item.url, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        const img = tex.image as HTMLImageElement;
        const aspect = img && img.width ? img.width / img.height : 1;
        const h = 2.6, w = h * aspect;
        mesh.geometry.dispose();
        mesh.geometry = new THREE.PlaneGeometry(w, h);
        mat.color.set(0xffffff);
        mat.map = tex;
        mat.needsUpdate = true;
        popIn(mat, mesh);
      });
    }
  });

  // Mouse parallax.
  let tx = 0, ty = 0;
  window.addEventListener('mousemove', (e) => {
    tx =  (e.clientX / window.innerWidth  - 0.5) * 2.2;
    ty = -(e.clientY / window.innerHeight - 0.5) * 2.2;
  });

  // Scroll flythrough: PIN the section and fly the camera straight through
  // the whole cloud (front → back) so every photo passes the viewer. The
  // pin gives us a long, controlled scroll budget independent of page speed.
  const Z_START = 16;    // in front of the cloud
  const Z_END   = -11;   // just past the back of it (minimal empty void)
  const flight = { z: Z_START };

  // "The End" — hand-drawn stroke that writes itself in over the final
  // stretch of the flythrough, then fills. Driven by the same pinned scroll.
  const endSvg  = document.querySelector<SVGSVGElement>('.the-end');
  const endText = endSvg?.querySelector<SVGTextElement>('text') ?? null;
  const DASH = 2600;
  const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
  function drawEnd(p: number) {
    if (!endSvg || !endText) return;
    const d = clamp01((p - 0.4) / 0.55);        // draw across most of the flythrough, done by ~95% — holds before the pin releases
    endSvg.style.opacity = String(clamp01(d * 6));                    // gentle fade-in, not a hard cut → no pop
    endText.style.strokeDashoffset = String(DASH * (1 - d));
    endText.style.fillOpacity = String(clamp01((d - 0.7) / 0.3));     // fill after the outline
  }

  gsap.to(flight, {
    z: Z_END,
    ease: 'none',
    scrollTrigger: {
      trigger: '#memory-cloud',
      start: 'center center',
      end: '+=200%',
      pin: true,
      anticipatePin: 1,        // pre-set the pin so engaging/releasing doesn't jump
      invalidateOnRefresh: true, // recompute pin start/end on every refresh (see below)
      scrub: 1,
      onUpdate: (self) => drawEnd(self.progress),
    },
  });

  // The recap canvases and this cloud load async AFTER ScrollTrigger first
  // measured the page, so the pin start/end were computed against a stale,
  // shorter layout — leaving a viewport-dependent jump at the release. Recompute
  // once everything has settled (and again on full load) so the numbers are real.
  ScrollTrigger.refresh();
  window.addEventListener('load', () => ScrollTrigger.refresh());

  const clock = new THREE.Clock();
  (function tick() {
    requestAnimationFrame(tick);
    const t = clock.getElapsedTime();

    group.rotation.y = t * 0.05;

    for (const c of cards) {
      c.mesh.lookAt(camera.position);                       // always face viewer
      c.mesh.rotation.z += 0;                               // (billboard, keep upright)
      c.mesh.position.y += Math.sin(t * c.bob + c.phase) * 0.0025;
    }

    camera.position.x += (tx - camera.position.x) * 0.04;
    camera.position.y += (ty - camera.position.y) * 0.04;
    // Track the scrubbed flight depth directly — the ScrollTrigger scrub is
    // already smoothed, so a second lerp here only adds lag that overshoots
    // and "teleports" when you stop scrolling.
    camera.position.z = flight.z;
    // Look forward along the flight direction (never flips when passing through).
    camera.lookAt(camera.position.x * 0.5, camera.position.y * 0.5, camera.position.z - 10);

    renderer.render(scene, camera);
  })();
}
