// Week 11 — recap wall. Each card shows, small and slowly spinning, the
// actual 3D hero that week represents: its GLB model, or (weeks 8–10, which
// have no GLB) the wireframe geometry the layout canvas uses for them.
//
// ONE shared WebGL renderer draws every card off-screen, then the frame is
// copied (2D drawImage) into that card's own <canvas>. This keeps the whole
// wall to a SINGLE WebGL context — ten separate contexts blow past the
// browser limit — while every card stays a normal, in-flow element (no
// full-screen overlay, no scissor rects, no z-index tricks).
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const slots = Array.from(
  document.querySelectorAll<HTMLCanvasElement>('.recap-canvas'),
);

// Wireframe geometries for the weeks without a GLB (matches three-week.ts).
function makeGeo(name: string): THREE.BufferGeometry {
  switch (name) {
    case 'sphere':   return new THREE.SphereGeometry(2, 8, 5);
    case 'cone':     return new THREE.ConeGeometry(1.5, 3.5, 5);
    case 'cylinder': return new THREE.CylinderGeometry(1.5, 1.8, 3.2, 6);
    default:         return new THREE.IcosahedronGeometry(2, 0);
  }
}

// Fetch each GLB at most once; hand back a fresh clone per card.
const gltfLoader = new GLTFLoader();
const modelCache = new Map<string, Promise<THREE.Group>>();
function loadModel(path: string): Promise<THREE.Group> {
  let p = modelCache.get(path);
  if (!p) {
    p = new Promise<THREE.Group>((resolve, reject) => {
      gltfLoader.load(path, (gltf) => resolve(gltf.scene), undefined, reject);
    });
    modelCache.set(path, p);
  }
  return p.then((scene) => scene.clone(true));
}

// On-card size overrides per model (units; default 2.4).
const MODEL_TARGET: Record<string, number> = {
  '/models/Airplane.glb': 3.1,
  '/models/bridge.glb':   3.1,
  '/models/Car.glb':      3.1,
};

// Centre an object at the origin and scale it to a consistent on-card size.
// Order is critical: SCALE first, then recompute the box and re-centre.
// Many of these GLBs (Airplane, Bird, bridge, Car) sit far from their local
// origin; centring before scaling lets the scale re-introduce a huge offset
// (child_world = center × (scale − 1)) that flings the mesh off-screen.
function frame(obj: THREE.Object3D, target = 2.4) {
  obj.updateMatrixWorld(true);
  const size = new THREE.Box3().setFromObject(obj).getSize(new THREE.Vector3());
  const maxDim = Math.max(...size.toArray()) || 1;
  obj.scale.multiplyScalar(target / maxDim);

  obj.updateMatrixWorld(true);
  const center = new THREE.Box3().setFromObject(obj).getCenter(new THREE.Vector3());
  obj.position.sub(center);
}

type Item = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  spinner: THREE.Group;
};

function buildScene(canvas: HTMLCanvasElement): Item | null {
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const color = new THREE.Color(canvas.dataset.color || '#888');
  const modelPath = canvas.dataset.model;
  const geoName = canvas.dataset.geo;
  // Astro renders missing props as the string "undefined".
  const hasModel = modelPath && modelPath !== 'undefined';
  const hasGeo = geoName && geoName !== 'undefined';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 5;

  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  scene.add(new THREE.HemisphereLight(0xffffff, color.clone().multiplyScalar(0.3), 0.7));
  const key = new THREE.DirectionalLight(0xffffff, 1.8); key.position.set(3, 5, 4); scene.add(key);
  const rim = new THREE.DirectionalLight(color.clone(), 0.9); rim.position.set(-4, -2, -3); scene.add(rim);

  const spinner = new THREE.Group();
  scene.add(spinner);

  // Per-model on-card size (default 2.4). Plane/bridge/car read a touch small
  // at the shared size, so give them a bit more room.
  const target = MODEL_TARGET[modelPath as string] ?? 2.4;

  if (hasModel) {
    loadModel(modelPath!).then((model) => { frame(model, target); spinner.add(model); })
      .catch(() => addFallbackGeo(spinner, color));
  } else {
    const mesh = new THREE.Mesh(
      makeGeo(hasGeo ? geoName! : 'default'),
      new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.85 }),
    );
    frame(mesh);
    spinner.add(mesh);
  }

  return { canvas, ctx, scene, camera, spinner };
}

function addFallbackGeo(spinner: THREE.Group, color: THREE.Color) {
  const mesh = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2, 0),
    new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.85 }),
  );
  frame(mesh);
  spinner.add(mesh);
}

function run(slots: HTMLCanvasElement[]) {
  const items = slots.map(buildScene).filter((i): i is Item => i !== null);
  if (!items.length) return;

  const dpr = Math.min(window.devicePixelRatio, 2);

  // ONE off-screen WebGL renderer. Its own canvas never enters the DOM — we
  // resize it to each card and copy the pixels across with drawImage.
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(dpr);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const gl = renderer.domElement;

  const clock = new THREE.Clock();
  (function tick() {
    requestAnimationFrame(tick);
    const t = clock.getElapsedTime();
    const vh = window.innerHeight;

    for (const item of items) {
      const { canvas, ctx } = item;
      const rect = canvas.getBoundingClientRect();
      // Skip cards fully off-screen — no wasted GPU on what you can't see.
      if (rect.bottom < 0 || rect.top > vh || rect.width === 0) continue;

      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));

      // Match the card's backing store to its CSS size (crisp on HiDPI).
      const bw = Math.floor(w * dpr), bh = Math.floor(h * dpr);
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw; canvas.height = bh;
      }

      // Render this card's scene into the shared off-screen renderer.
      renderer.setSize(w, h, false);
      item.camera.aspect = w / h;
      item.camera.updateProjectionMatrix();
      item.spinner.rotation.y = t * 0.6;
      item.spinner.rotation.x = Math.sin(t * 0.4) * 0.2;
      renderer.render(item.scene, item.camera);

      // Copy the fresh frame onto the card's own 2D canvas.
      ctx.clearRect(0, 0, bw, bh);
      ctx.drawImage(gl, 0, 0, bw, bh);
    }
  })();
}

// Kick off lazily — building the scenes fetches seven GLBs, so wait until the
// recap wall is within half a viewport instead of hitting the network at load.
if (slots.length) {
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      io.disconnect();
      run(slots);
    }
  }, { rootMargin: '50% 0px' });
  io.observe(slots[0]);
}
