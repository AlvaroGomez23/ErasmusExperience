// Week 08 — connection globe
// A small wireframe globe rendered into a bounded #globe-canvas inside a content
// section (NOT the fullscreen layout canvas). Plots a pin per arrival country +
// Amarante, then draws an arc from each country to Amarante. Auto-rotates, and
// can be dragged. Arcs draw themselves in when the globe scrolls into view.

import gsap from 'gsap';
import * as THREE from 'three';

const canvas = document.getElementById('globe-canvas') as HTMLCanvasElement | null;
if (canvas) {
  const wrap = canvas.parentElement as HTMLElement;

  // Passport palette
  const NAVY = 0x1b3a5c;
  const ACCENT = 0xb23a2e;
  const CREAM = 0xe9e0cd;

  const R = 1.6; // globe radius

  // Where everyone arrived from (lat/lon in degrees) + the destination.
  const PLACES = [
    { code: 'ESP', lat: 40.42, lon: -3.70 },
    { code: 'MAR', lat: 33.57, lon: -7.59 },
    { code: 'RUS', lat: 55.75, lon: 37.62 },
    { code: 'ARM', lat: 40.18, lon: 44.51 },
    { code: 'MEX', lat: 19.43, lon: -99.13 },
  ];
  const AMARANTE = { lat: 41.27, lon: -8.08 };

  // lat/lon (deg) → point on a sphere of the given radius
  function toVec(lat: number, lon: number, radius = R): THREE.Vector3 {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta),
    );
  }

  // ─── Renderer / scene / camera ─────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0.4, 5);

  scene.add(new THREE.AmbientLight(0xffffff, 1));
  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(3, 4, 5);
  scene.add(key);

  function resize() {
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // globe is one group we spin
  const globe = new THREE.Group();
  scene.add(globe);

  // ─── Sphere: faint solid fill + wireframe shell ────────
  // Occluder: a solid sphere in the paper colour, just under the surface. It
  // hides the dots/pins on the far hemisphere so we only read the front face —
  // and because it matches the section background it disappears into the page.
  const PAPER = 0xf3ecdb;
  const occluder = new THREE.Mesh(
    new THREE.SphereGeometry(R * 0.985, 48, 48),
    new THREE.MeshBasicMaterial({ color: PAPER }),
  );
  globe.add(occluder);

  // faint equator/meridian pair for a hint of structure (not a full grid)
  const ringMat = new THREE.MeshBasicMaterial({ color: NAVY, wireframe: true, transparent: true, opacity: 0.12 });
  globe.add(new THREE.Mesh(new THREE.SphereGeometry(R, 24, 12), ringMat));

  // ─── Pins ──────────────────────────────────────────────
  function addPin(lat: number, lon: number, color: number, size: number) {
    const pin = new THREE.Mesh(
      new THREE.SphereGeometry(size, 16, 16),
      new THREE.MeshBasicMaterial({ color }),
    );
    pin.position.copy(toVec(lat, lon, R));
    globe.add(pin);
    return pin;
  }

  PLACES.forEach((p) => addPin(p.lat, p.lon, NAVY, 0.045));
  const home = addPin(AMARANTE.lat, AMARANTE.lon, ACCENT, 0.07);
  // pulsing halo on Amarante
  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(0.07, 16, 16),
    new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.35 }),
  );
  halo.position.copy(home.position);
  globe.add(halo);
  gsap.to(halo.scale, { x: 2.4, y: 2.4, z: 2.4, duration: 1.6, ease: 'sine.out', repeat: -1, yoyo: true });
  gsap.to(halo.material, { opacity: 0, duration: 1.6, ease: 'sine.out', repeat: -1, yoyo: true });

  // ─── Continent dots ────────────────────────────────────
  // Fetch a low-res land outline, then stipple a dot over every land cell of a
  // lat/lon grid (ray-cast point-in-polygon). Reads as continent silhouettes.
  type Ring = number[][];
  function inRing(lon: number, lat: number, ring: Ring): boolean {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const xi = ring[i][0], yi = ring[i][1];
      const xj = ring[j][0], yj = ring[j][1];
      if (((yi > lat) !== (yj > lat)) && (lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi)) inside = !inside;
    }
    return inside;
  }

  fetch('/data/land-110m.geojson')
    .then((r) => r.json())
    .then((geo: any) => {
      // Flatten every feature to a list of outer rings (holes ignored at 110m).
      const rings: Ring[] = [];
      for (const f of geo.features) {
        const g = f.geometry;
        if (g.type === 'Polygon') rings.push(g.coordinates[0]);
        else if (g.type === 'MultiPolygon') for (const poly of g.coordinates) rings.push(poly[0]);
      }

      const positions: number[] = [];
      const STEP = 2.4; // degrees between dots
      for (let lat = -84; lat <= 84; lat += STEP) {
        // widen lon spacing near the poles so dot density stays even
        const lonStep = STEP / Math.max(0.2, Math.cos((lat * Math.PI) / 180));
        for (let lon = -180; lon < 180; lon += lonStep) {
          if (rings.some((ring) => inRing(lon, lat, ring))) {
            const v = toVec(lat, lon, R * 1.004);
            positions.push(v.x, v.y, v.z);
          }
        }
      }

      const dotGeo = new THREE.BufferGeometry();
      dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      const dots = new THREE.Points(
        dotGeo,
        new THREE.PointsMaterial({ color: NAVY, size: 0.035, sizeAttenuation: true, transparent: true, opacity: 0.85 }),
      );
      globe.add(dots);
    })
    .catch(() => { /* land layer is decorative — ignore fetch/parse failures */ });

  // ─── Arcs (country → Amarante), drawn in on scroll ─────
  const dest = toVec(AMARANTE.lat, AMARANTE.lon, R);
  const arcs: { line: THREE.Line; count: number }[] = [];

  PLACES.forEach((p) => {
    const start = toVec(p.lat, p.lon, R);
    // lift the midpoint off the surface — longer hops arc higher
    const mid = start.clone().add(dest).multiplyScalar(0.5);
    const lift = 1 + start.distanceTo(dest) * 0.35;
    mid.normalize().multiplyScalar(R * lift);

    const curve = new THREE.QuadraticBezierCurve3(start, mid, dest);
    const pts = curve.getPoints(60);
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    geo.setDrawRange(0, 0); // hidden until animated in
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.85 }));
    globe.add(line);
    arcs.push({ line, count: pts.length });
  });

  let drawn = false;
  function drawArcs() {
    if (drawn) return;
    drawn = true;
    arcs.forEach((a, i) => {
      const proxy = { n: 0 };
      gsap.to(proxy, {
        n: a.count,
        duration: 1.1,
        delay: 0.15 * i,
        ease: 'power2.out',
        onUpdate: () => a.line.geometry.setDrawRange(0, Math.round(proxy.n)),
      });
    });
  }

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { drawArcs(); io.disconnect(); } }),
    { threshold: 0.3 },
  );
  io.observe(canvas);

  // ─── Drag to spin + auto-rotate ────────────────────────
  let dragging = false;
  let px = 0;
  let vy = 0.0025; // idle spin speed
  canvas.addEventListener('pointerdown', (e) => { dragging = true; px = e.clientX; vy = 0; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - px;
    px = e.clientX;
    globe.rotation.y += dx * 0.005;
  });
  canvas.addEventListener('pointerup', () => { dragging = false; vy = 0.0025; });

  // orient so Europe faces the camera at rest
  globe.rotation.y = -0.4;

  let rafId = 0;
  (function tick() {
    rafId = requestAnimationFrame(tick);
    if (!dragging) globe.rotation.y += vy;
    renderer.render(scene, camera);
  })();

  document.addEventListener('astro:before-swap', () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('resize', resize);
    renderer.dispose();
  }, { once: true });
}
