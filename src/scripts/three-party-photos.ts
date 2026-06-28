// Party — photos section ambience.
// Floating GLB props (glasses, soda, speakers) scattered down both sides of the
// photo grid. Bob + spin + mouse parallax + a kick of spin from scroll velocity.
// Lives on its own canvas inside .party-photos so it paints over the dark section
// background but behind the photos (.party-inner sits on top).

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

{
  const canvas  = document.getElementById('photos-canvas') as HTMLCanvasElement | null;
  const section = document.querySelector('.party-photos') as HTMLElement | null;
  if (canvas && section) {
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // ── Lights — same party palette as the hero scene ──
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    const pink   = new THREE.PointLight(0xff006e, 9, 30); pink.position.set(-6, 4, 6);
    const purple = new THREE.PointLight(0x8338ec, 7, 30); purple.position.set(6, -4, 6);
    const gold   = new THREE.PointLight(0xffbe0b, 5, 26); gold.position.set(0, 0, 8);
    scene.add(pink, purple, gold);

    // ── Visible-bounds helpers (world units at the z=0 plane) ──
    let halfH = 1, halfW = 1;
    function computeBounds() {
      const vFOV = (camera.fov * Math.PI) / 180;
      halfH = Math.tan(vFOV / 2) * camera.position.z;
      halfW = halfH * camera.aspect;
    }

    interface Prop {
      pivot: THREE.Group;
      spinner: THREE.Group;
      side: number;     // -1 left, +1 right
      yFrac: number;    // 0 = top of section, 1 = bottom
      bobAmp: number;
      bobFreq: number;
      spin: number;
      phase: number;
    }
    const props: Prop[] = [];

    function placeProp(p: Prop) {
      p.pivot.position.x = p.side * halfW * 0.82;
      p.pivot.position.y = (0.5 - p.yFrac) * (2 * halfH);
    }

    function sizeToSection() {
      const w = section!.clientWidth;
      const h = section!.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      computeBounds();
      props.forEach(placeProp);
    }

    // ── Load the 3 models, then scatter clones down both sides ──
    const URLS = [
      '/models/Party_Glasses.glb',
      '/models/Soda_Glass.glb',
      '/models/Bass_Speakers.glb',
    ];
    const SIZES = [1.7, 1.4, 2.2];   // target world size per model (matches URLS order)
    const COUNT = 8;                 // total floating props down the section

    const loader = new GLTFLoader();
    Promise.all(URLS.map(u => loader.loadAsync(u))).then((gltfs) => {
      const templates = gltfs.map((g, i) => {
        const model = g.scene;
        const dims = new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
        model.scale.setScalar(SIZES[i] / (Math.max(dims.x, dims.y, dims.z) || 1));
        const c = new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3());
        model.position.sub(c);
        model.traverse((o) => {
          const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
          if (m && 'emissive' in m) { m.emissive = new THREE.Color(0x150813); m.emissiveIntensity = 0.4; }
        });
        return model;
      });

      for (let i = 0; i < COUNT; i++) {
        const model = templates[i % templates.length].clone(true);
        const spinner = new THREE.Group();
        spinner.add(model);
        const pivot = new THREE.Group();
        pivot.add(spinner);
        spinner.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        scene.add(pivot);

        const prop: Prop = {
          pivot, spinner,
          side: i % 2 === 0 ? -1 : 1,
          // stagger down the section with a little jitter, keep clear of the very edges
          yFrac: 0.06 + (i / (COUNT - 1)) * 0.88 + (Math.random() - 0.5) * 0.04,
          bobAmp: 0.25 + Math.random() * 0.25,
          bobFreq: 0.5 + Math.random() * 0.5,
          spin: (Math.random() < 0.5 ? -1 : 1) * (0.3 + Math.random() * 0.4),
          phase: Math.random() * Math.PI * 2,
        };
        placeProp(prop);
        props.push(prop);
      }
    });

    // ── Inputs: mouse parallax + scroll-velocity kick ──
    let tx = 0, ty = 0;
    window.addEventListener('mousemove', (e) => {
      tx =  (e.clientX / window.innerWidth  - 0.5) * 1.2;
      ty = -(e.clientY / window.innerHeight - 0.5) * 1.2;
    });

    let lastScroll = window.scrollY;
    let scrollKick = 0;
    window.addEventListener('scroll', () => {
      const dy = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      scrollKick += dy * 0.0015;
    }, { passive: true });

    sizeToSection();
    new ResizeObserver(sizeToSection).observe(section);

    const clock = new THREE.Clock();
    (function tick() {
      requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      scrollKick *= 0.92;   // decay the scroll burst

      props.forEach((p) => {
        const baseX = p.side * halfW * 0.82;
        const baseY = (0.5 - p.yFrac) * (2 * halfH);
        p.pivot.position.x = baseX + tx * (0.4 + (p.side > 0 ? 0.2 : 0));
        p.pivot.position.y = baseY + Math.sin(t * p.bobFreq + p.phase) * p.bobAmp + ty * 0.3;
        p.spinner.rotation.y += p.spin * 0.01 + scrollKick;
        p.spinner.rotation.x = Math.sin(t * 0.4 + p.phase) * 0.25;
      });

      renderer.render(scene, camera);
    })();
  }
}
