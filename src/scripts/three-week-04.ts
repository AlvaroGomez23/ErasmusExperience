import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);

// ─── ZEN MOUNTAIN — GOLDEN HOUR ───────────────────────
{
  const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xfffbf0);
  scene.fog = new THREE.Fog(0xfffbf0, 16, 46);

  const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 3.5, 14);
  camera.lookAt(0, 2.5, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // Warm golden lighting
  scene.add(new THREE.AmbientLight(0xffe4c0, 3.0));
  const sunRay = new THREE.DirectionalLight(0xffc840, 1.8);
  sunRay.position.set(4, 9, 3);
  scene.add(sunRay);

  // Sun
  const sunMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1.0, 24, 24),
    new THREE.MeshBasicMaterial({ color: 0xffe566 })
  );
  sunMesh.position.set(6, 11, -7);
  scene.add(sunMesh);

  const haloGeo = new THREE.CircleGeometry(2.8, 32);
  const halo = new THREE.Mesh(haloGeo, new THREE.MeshBasicMaterial({
    color: 0xffd700, transparent: true, opacity: 0.07, side: THREE.DoubleSide,
  }));
  halo.position.set(6, 11, -7.1);
  scene.add(halo);

  const sunGlow = new THREE.PointLight(0xff8820, 4, 26);
  sunGlow.position.copy(sunMesh.position);
  scene.add(sunGlow);

  // Mountain ranges
  function makeMountainRange(maxPeak: number, zPos: number, color: number, seed: number): THREE.Mesh {
    const planeH = maxPeak + 6;
    const geo = new THREE.PlaneGeometry(55, planeH, 120, 1);
    const pos = geo.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < pos.count; i++) {
      if (pos.getY(i) > 0) {
        const x = pos.getX(i);
        const h =
          (Math.sin(x * 0.14 + seed)        + 1) * 0.30 +
          (Math.sin(x * 0.35 + seed * 1.7)  + 1) * 0.22 +
          (Math.sin(x * 0.71 + seed * 0.8)  + 1) * 0.18 +
          (Math.sin(x * 1.42 + seed * 2.3)  + 1) * 0.10 +
          (Math.sin(x * 2.84 + seed * 1.1)  + 1) * 0.05 +
          (Math.sin(x * 5.68 + seed * 3.2)  + 1) * 0.02;
        pos.setY(i, (h / 1.74) * maxPeak);
      }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color, fog: true }));
    mesh.position.set(0, -4 + planeH / 2, zPos);
    return mesh;
  }

  scene.add(makeMountainRange(3.0,  8,  0x2a1a08, 1.10));
  scene.add(makeMountainRange(4.5,  5,  0x3d2810, 2.55));
  scene.add(makeMountainRange(6.0,  2,  0x5a3c18, 3.92));
  scene.add(makeMountainRange(7.5, -2,  0x784e20, 5.41));
  scene.add(makeMountainRange(8.0, -7,  0x966228, 7.03));
  scene.add(makeMountainRange(7.0, -13, 0xb47830, 8.77));

  // Golden dust
  const DUST = 900;
  const dustArr = new Float32Array(DUST * 3);
  for (let i = 0; i < DUST; i++) {
    dustArr[i * 3]     = (Math.random() - 0.5) * 50;
    dustArr[i * 3 + 1] = Math.random() * 8;
    dustArr[i * 3 + 2] = (Math.random() - 0.5) * 30 + 5;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustArr, 3));
  scene.add(new THREE.Points(dustGeo, new THREE.PointsMaterial({
    size: 0.10, color: 0xffc840, transparent: true, opacity: 0.25, sizeAttenuation: true, fog: true,
  })));

  // ─── SCROLL-DRIVEN BIRD ───────────────────────────────
  const flightPath = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-28,  5.2, 10.5),
    new THREE.Vector3(-14,  4.4, 10.0),
    new THREE.Vector3(  0,  3.6,  9.5),
    new THREE.Vector3( 14,  2.8, 10.0),
    new THREE.Vector3( 28,  2.0, 10.5),
  ]);

  let birdPivot: THREE.Group | null = null;
  let birdMixer: THREE.AnimationMixer | null = null;
  let scrollProg = 0;

  // Pre-allocated quaternion/vector scratch objects — no per-frame allocation
  const _qYaw   = new THREE.Quaternion();
  const _qPitch = new THREE.Quaternion();
  const _axisY  = new THREE.Vector3(0, 1, 0);
  const _axisX  = new THREE.Vector3(1, 0, 0);

  new GLTFLoader().load('/models/Bird.glb', (gltf) => {
    const birdModel = gltf.scene;
    birdModel.scale.setScalar(0.015);
    // Raw model: forward=+X, up=+Z — need forward=+Z, up=+Y in pivot-local space.
    // 120° rotation around (1,1,1)/√3 achieves both: q=(-0.5,-0.5,-0.5, 0.5)
    birdModel.quaternion.set(-0.5, -0.5, -0.5, 0.5);

    birdPivot = new THREE.Group();
    birdPivot.add(birdModel);
    birdPivot.visible = false;
    scene.add(birdPivot);

    if (gltf.animations.length > 0) {
      birdMixer = new THREE.AnimationMixer(birdModel);
      birdMixer.clipAction(gltf.animations[0]).play();
    }
  });

  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => { scrollProg = self.progress; },
  });

  // Mouse parallax
  let mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2;
    my = -(e.clientY / window.innerHeight - 0.5) * 2;
  });

  const clock = new THREE.Clock();
  let prevT = 0;

  (function tick() {
    requestAnimationFrame(tick);
    const t  = clock.getElapsedTime();
    const dt = t - prevT;
    prevT = t;

    // Camera parallax
    camera.position.x += (mx * 2.0 - camera.position.x) * 0.016;
    camera.position.y += (my * 0.8 + 3.5 - camera.position.y) * 0.016;
    camera.lookAt(0, 2.5, 0);

    // Sun breathe
    sunGlow.intensity = 3.5 + Math.sin(t * 0.4) * 0.8;

    // Dust drift
    const dp = dustGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < DUST; i++) {
      const nx = dp.getX(i) + 0.002;
      const ny = dp.getY(i) + 0.001;
      dp.setX(i, nx > 25 ? -25 : nx);
      dp.setY(i, ny > 9  ? 0   : ny);
    }
    dp.needsUpdate = true;

    if (birdMixer) birdMixer.update(dt);

    // ── Bird scroll-driven flight ──────────────────────
    if (birdPivot) {
      const BIRD_START = 0.02;
      const BIRD_END   = 0.98;

      if (scrollProg < BIRD_START || scrollProg > BIRD_END) {
        birdPivot.visible = false;
      } else {
        birdPivot.visible = true;
        const p = (scrollProg - BIRD_START) / (BIRD_END - BIRD_START);

        const pos     = flightPath.getPoint(p);
        const tangent = flightPath.getTangent(p);
        birdPivot.position.copy(pos);

        const yaw   = Math.atan2(tangent.x, tangent.z);
        const pitch = -Math.asin(Math.max(-0.9, Math.min(0.9, tangent.y)));

        _qYaw.setFromAxisAngle(_axisY, yaw);
        _qPitch.setFromAxisAngle(_axisX, pitch);

        birdPivot.quaternion.copy(_qYaw).multiply(_qPitch);
      }
    }

    renderer.render(scene, camera);
  })();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}

// Section fade-ins
gsap.utils.toArray<HTMLElement>('.content-section').forEach((s) => {
  gsap.fromTo(s, { y: 40, opacity: 0 }, {
    y: 0, opacity: 1, duration: 1.4, ease: 'power2.out',
    scrollTrigger: { trigger: s, start: 'top 82%' },
  });
});
