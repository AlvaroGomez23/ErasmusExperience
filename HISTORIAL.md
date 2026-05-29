[2026-05-28] — Added polaroid photo gallery to week-02: 6 cards fly in on scroll, float continuously, straighten on hover. Placeholders ready for real images.
[2026-05-28] — Week-01 scroll flight: plane approaches from off-screen left, banks level, and lands at center as user scrolls through the hero section.
[2026-05-28] — Week-01: removed highlights section (low-value placeholder cards).
[2026-05-28] — Removed highlights section from all 10 week pages.
[2026-05-28] — Week-02: replaced fixed float-canvas with inline interactive canvas below "Aprenent i disfrutant" — 3 draggable wireframe shapes (icosahedron, torus knot, octahedron), drag to rotate, auto-spin when idle.
[2026-05-28] — Week-01: replaced SVG path plane with GLB clone — small Boeing 737 follows a CatmullRomCurve3 S-path through the 3D scene, scroll-driven via ScrollTrigger scrub, auto-banks along tangent.
[2026-05-28] — Refactored scripts: three-week.ts = base (wireframe + shared GSAP); three-week-01.ts = GLB/path-plane; three-week-02.ts = migrated from models-week02.ts; three-week-03 to 10 = stubs. Each week imports its own script.
[2026-05-28] — Created immersive gallery page (/gallery): Three.js scroll-driven camera flies through 10 glowing week frames; click opens CSS3D carousel; click photo opens lightbox. Data in src/data/gallery.ts with English subtitles and placeholder URLs.
[2026-05-28] — Wired gallery to Supabase Storage (bucket: Photos, folders: week1…week10). Client-side fetch via REST API (no SDK). Env vars SUPABASE_URL + SUPABASE_KEY injected server-side at build, passed to client via JSON script tag.
[2026-05-28] — Rebuilt gallery as clean site-style page: same nav/fonts/card system as week pages. Shimmer skeletons while photos load, lightbox on click, 10 week sections with Supabase-fetched photos.
[2026-05-29] — gallery.astro: fixed garbled footer text (Ã— → ×) and lightbox close button (œ• → ✕); added console.logs to debug Supabase photo loading (config check, per-folder fetch URL, HTTP status, file list, filtered count).
[2026-05-29] — gallery.astro: replaced raw fetch Supabase calls with @supabase/supabase-js SDK (createClient, storage.from().list(), storage.from().getPublicUrl()).
[2026-05-29] — Supabase Storage fixed: added RLS SELECT policy for anon role on bucket Photos + enabled public bucket. Photos now load in gallery. Removed debug console.logs.
[2026-05-29] — Gallery: show first 6 photos, gradient fade overlay on grid bottom, minimal "↓ N more" text trigger reveals rest.
[2026-05-29] — three-gallery.ts: new script for gallery page with photo_cam.glb (Draco), material transparency fix, green particles. three-index.ts restored to globe for main page.
[2026-05-29] — Week-01 and Week-02: corrected English grammar and phrasing (quantifiers, tense consistency, word order, subject omissions).
[2026-05-29] — Added EU flag favicon (/photos/Flag_of_Europe.svg.webp) to all pages (index, WeekLayout, gallery).
[2026-05-29] — Translated entire site to English: html lang attributes, meta descriptions, nav/hero/footer labels, all page content (weeks 01–10), weeks.ts subtitles and dates.
