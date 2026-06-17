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

[2026-06-09] — Week-04: full zen redesign — dark forest night sky (bgColor #0b1a12), layered mountain silhouette scene (6 PlaneGeometry ranges with displaced vertices + fog), moon with pulsing PointLight, drifting mist particles, stars; content replaced with frosted-dark-glass sections: kanji intro (友), serif haiku, Ma emptiness placeholder.
[2026-06-09] — Week-04: zen scene updated to original warm gold/orange palette (#FFD700/#FF6B35/#fffbf0) — golden-hour mountains with sun sphere, warm-earth silhouettes, golden dust particles; added photos section (6 Supabase week4 images); removed dark overrides.
[2026-06-09] — Week-04: added zen bird — 5-vertex line-art silhouette flies across sky randomly (12-18s crossing, 7-19s pause between), asymmetric wing flap (harder up, softer down), CatmullRom arc path, faces direction of travel.
[2026-06-09] — Week-04: replaced line-art bird with Bird.glb (GLTFLoader + AnimationMixer for wing flap), bird spawns at z=9-11 (in front of all mountains), faces direction of travel via curve tangent.
[2026-06-11] — Week-04: bird scale reduced 0.25→0.015; replaced time-based random flight with scroll-driven path (ScrollTrigger); two barrel rolls (yaw*pitch*roll quaternion composition) smoothstep-eased at ~25-48% and ~60-83% scroll; S-curve flight path with altitude swoops.
[2026-06-11] — Week-04: fixed bird y-position — was flying at y=6.8–9.2 (above camera frustum, off-screen); moved to y=3.8–5.2 to land within visible band at z≈10.
[2026-06-11] — Week-04: fixed bird orientation — model exported with body along +Y (spinning like helicopter); wrapped in pivot group, baked rotation.x=-π/2 on raw model so body aligns with +Z forward axis; barrel rolls now spin correctly around nose-to-tail axis.
[2026-06-11] — Week-04: fixed bird flying backwards (showing tail to camera) — changed rotation.x correction from -π/2 to +π/2 so nose maps to +Z and yaw drives it in correct flight direction.
[2026-06-11] — Week-04: fixed bird orientation definitively — raw model has forward=+X, up=+Z; applied quaternion(-0.5,-0.5,-0.5,0.5) (120° around (1,1,1)/√3) to remap forward→+Z and up→+Y in pivot-local space.
[2026-06-11] — Week-04: removed barrel rolls; bird now glides straight top-left to bottom-right (y 5.2→2.0, x -28→28) across scroll.
[2026-06-11] — Week-04: content revision — battery charging animation (CSS fill + JS counter, orange→gold colour shift), Tâmega river section (shorter/punchier copy, darker readable text), 3 tilted vibe cards (💤🏊🌅, rotate-on-hover CSS), removed daily log and numbers sections.
[2026-06-11] — Week-04: readability pass — removed 友 kanji + gold glow animations; all font-weight:300 headings → 500; all low-opacity faint text boosted to 0.55–0.82; active bat-line orange darkened to #c85000.
[2026-06-11] — Week-04: removed river wave SVGs, marquee strip, and "The river" section-tag; centered battery section content in frame.
[2026-06-11] — Index: added "journey home" countdown — live days/hours/min/sec to departure (Jul 31 22:00 +01:00), progress bar with ✈ marker showing % of adventure lived, weeks-lived/weeks-left/days-to-go stats. Self-contained section + inline script.
[2026-06-11] — Index countdown: START date corrected to 2026-05-20; added frosted-glass backdrop panel (blur+saturate, semi-opaque bg, green border) behind countdown for readability over globe canvas — globe left untouched to preserve hero composition.
[2026-06-11] — Index countdown: added finished state at departure — clock hidden, "✈ Home. / 11 weeks, lived." message, copy flips to past tense, bar locks 100%, panel gets celebratory green glow pulse, interval cleared. Tested via temp past DEPART then reverted to 2026-07-31.
[2026-06-11] — Index countdown bugfix: .cd-done/.cd-clock display:flex was overriding the [hidden] attribute (class beats [hidden] specificity), so "Home." finished-state showed permanently. Added .cd-clock[hidden],.cd-done[hidden]{display:none}.

[2026-06-12] — Made progress-bar plane (index) bigger (1.1rem→2rem) so green fill reads as a trail behind it.
[2026-06-12] — Week-04 section titles (zen/battery/tamega) now match other weeks: weight 900, UPPERCASE, solid color, removed gradient.
[2026-06-12] — Week-04 titles now exact-match global h2 size/line-height: clamp(2rem,5vw,4rem), line-height 0.95.
[2026-06-12] — Week-04 prose paragraphs (.tamega-body p) now match global .content-section p: 1.1rem, line-height 1.75, opacity 0.65.
[2026-06-12] — Week-04 vibes: added 4th card "Until late" (talking by river past midnight); grid 3→4 cols, 2-col at <=880px.
[2026-06-12] — Week-04 vibes grid back to 3 cols (user kept 3 cards).
[2026-06-12] — Week-04: replaced haiku/Iku section with 3D incense scene (incense-week04.ts): vertical stick + flickering ember + shader-based smoke particles rising/swaying/fading. New #incense-canvas; removed haiku CSS.
[2026-06-12] — Removed leftover incense import (was throwing on missing #incense-canvas → broke battery script) + deleted incense-week04.ts and incense CSS.