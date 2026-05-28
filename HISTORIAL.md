[2026-05-28] — Added polaroid photo gallery to week-02: 6 cards fly in on scroll, float continuously, straighten on hover. Placeholders ready for real images.
[2026-05-28] — Week-01 scroll flight: plane approaches from off-screen left, banks level, and lands at center as user scrolls through the hero section.
[2026-05-28] — Week-01: removed highlights section (low-value placeholder cards).
[2026-05-28] — Removed highlights section from all 10 week pages.
[2026-05-28] — Week-02: replaced fixed float-canvas with inline interactive canvas below "Aprenent i disfrutant" — 3 draggable wireframe shapes (icosahedron, torus knot, octahedron), drag to rotate, auto-spin when idle.
[2026-05-28] — Week-01: replaced SVG path plane with GLB clone — small Boeing 737 follows a CatmullRomCurve3 S-path through the 3D scene, scroll-driven via ScrollTrigger scrub, auto-banks along tangent.
[2026-05-28] — Refactored scripts: three-week.ts = base (wireframe + shared GSAP); three-week-01.ts = GLB/path-plane; three-week-02.ts = migrated from models-week02.ts; three-week-03 to 10 = stubs. Each week imports its own script.
