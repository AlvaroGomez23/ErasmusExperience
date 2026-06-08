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
[2026-05-30] — Week-02: full-screen water ripple shader background (WebGL, mouse + scroll spawn ripples); glassContent mode enabled so frosted sections let water show through.
[2026-05-30] — Week-02: water shader alpha lowered to 0.55; hero lifted to z-index:3 so text/models stay above water; removed mouse-move ripple trigger (scroll only).
[2026-05-30] — Week-02: water-canvas JS-moved to body before #three-canvas so z-index:-1 is root-context-relative (was trapped inside .week-content z-index:10 stacking context).
[2026-05-30] — Week-02: temperature "40ºC!" blinks red forever via CSS step animation.
[2026-05-30] — Week-02: added GLB loader to three-week-02.ts — Sun.glb loads on #three-canvas with golden lighting, slow rotation, particle field, mouse parallax.
[2026-05-30] — Gallery: camera model lowered by 1.5 units (position.y offset in tick loop).
[2026-05-30] — Added utils/convert-upload.mjs: converts raw photos to webp@75%, renames to weekXX-NN.webp, uploads to Supabase bucket Photos/weekXX/. Fixed .gitignore (was ignoring entire utils/, now only utils/output/).
[2026-05-30] — Gallery: "↓ N more" expand now togglable — collapse button (↑ Show less) removes extra photos, restores fade + show-more, scrolls section into view.
[2026-05-30] — Renamed week-10 → week-11 (11-week Erasmus); created new week-10 placeholder; fixed all data refs in weeks.ts, gallery.ts, routes.ts; fixed broken three-week-10.ts import in week-11.astro.
[2026-05-31] — Added secret party page (/party): password-gated (FIESTA), dark neon theme, Three.js disco sphere + colored confetti particle clouds + orbiting lights, polaroid photo grid from Supabase Photos/party/ folder.
[2026-05-31] — Party page: switched polaroid grid from fixed-column grid to CSS masonry (columns), removed forced 4:3 aspect ratio — photos now display at natural proportions.
[2026-05-31] — Party page: fixed photo size (grid minmax 150-190px capped), restored 4:3 cover crop for uniform polaroids; replaced static lightbox with prev/next carousel (arrow keys + click buttons, fade transition, photo counter).
[2026-05-31] — Party page: rewrote carousel with GSAP — overlay fade+scale open/close, slide-left/right between photos with busy guard; fixed position:fixed-inside-fixed bug by switching nav buttons to position:absolute.
[2026-05-31] — Party page: full GSAP polaroid system — staggered chaos-drop entrance per card, perpetual independent float (y+rotation), hover lifts+straightens+neon-glow via paused float tween, resume float on mouseleave.
[2026-05-31] — Party page: fixed oversized photos — switched polaroid grid from CSS grid (minmax not constraining) to flex-wrap with hard width:175px per item; shrank Three.js particles (0.07→0.032) and ring opacity (0.35→0.18).
[2026-05-31] — Party page: reverted confetti/orbs GSAP experiment — restored Three.js 3D background (three-party.ts); kept GSAP carousel + polaroid animations.
[2026-05-31] — Party page: fixed carousel (moved outside #party-content — was trapped in its stacking context/opacity:0); fixed photo size (grid repeat(auto-fill, 160px) strict fixed columns, no stretch).
[2026-05-31] — Party page: replaced polaroid+carousel entirely with gallery.astro pattern — photo-grid, photo-item, simple lightbox (click to zoom, Escape/click-outside to close), show-more button. Same behaviour as weekly gallery pages.
[2026-06-01] — Party page: fixed gate title "PARTY" appearing shifted right — added text-indent:-0.04em to compensate letter-spacing optical centering offset.
[2026-06-01] — Easter eggs: (1) type "party" on any page → redirect to /party; (2) the × between Jose and Álvaro in nav is a hidden link to /party (invisible, cursor:default, works on mobile tap).
[2026-06-02] — Party gate: fixed PARTY title centering — translateX(-8%) scoped to min-width:769px so desktop centers correctly without breaking mobile.
[2026-06-03] — Week-03: full festival theme (Festa de São Gonçalo) — dark night bg (#0e0014), scroll-triggered 3D fireworks on fixed canvas (rockets rise + burst in Three.js perspective with depth/flash sphere), inline interactive 3D fireworks launcher (click/tap to shoot), star field, GSAP SVG draw "São Gonçalo", stat cards, nav/weekstrip/hero/footer dark-mode overrides via is:global.
[2026-06-03] — Week-03: restored rocket Line trails (20-point shift-history), restored central octahedron wireframe + orbital particle cloud, fixed burst double-creation bug (Points added to scene once), faster burst velocity + bigger flash for instant pop feel.
[2026-06-03] — Week-03: fixed invisible trails in click-to-shoot canvas — swapped THREE.Line → THREE.Points (linewidth not supported in WebGL so lines were 1px invisible), raised rocket start from y=-8 to y=-6.5 so trail enters inline canvas viewport from frame 1.
[2026-06-03] — Week-03: removed click-to-shoot inline canvas section (not adding value).
[2026-06-03] — Week-03: added 42 spinning 3D confetti ribbons (BoxGeometry, festival colors, per-piece random rotation/drift, sine-wave sway, loop from bottom when exiting top).
[2026-06-08] — Week-03: replaced octahedron wireframe with Star.glb model (scale 3.8) as central 3D object; loaded via GLTFLoader with pink wireframe material matching week color.
[2026-06-08] — Week-03: Star model now full solid mesh (MeshStandardMaterial, pink+emissive+metalness), Y-axis-only spin, three-point lighting (ambient + pink directional + orange fill).
[2026-06-08] — Week-02: fixed double border on photos — each photo-item had a redundant nested photo-item div, removed inner wrapper.
[2026-06-08] — Gallery: synced all week subtitles in gallery.ts to match weeks.ts (weeks 1, 3, 4, 6, 7, 8, 9, 10, 11 were stale or mismatched).
[2026-06-08] — Party page: fixed week-dot styles not applying — moved .week-dot/.week-strip overrides from scoped <style> to <style is:global> so they reach inside WeekStrip child component. Now matches week-03 navbar exactly.
[2026-06-08] — Party gate: escape link now a pill button with breathing pulse animation (opacity 0.45↔1 loop), pauses on hover with full white; text "← take me back home". Escape key still works too.
[2026-06-08] — Week-04: full WIP construction page — 3D gold cubes fall+stack with bounce (GSAP), rotating scaffold wireframe, construction tape banners, pulsing warning lights, fake terminal typewriter with build logs, progress bar that never finishes.
[2026-06-08] — Week-03: festival string lights (14 colored glowing bulbs strung across top of section, async flicker), neon flicker heading on "NIGTHS IN AMARANTE", sparkle cursor trail (pink/orange/gold dots float up from mouse while over content).

[2026-06-08] — Analytics: added @vercel/analytics to all pages (WeekLayout, index, gallery, party) via default import from @vercel/analytics/astro.
