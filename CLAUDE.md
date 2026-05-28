# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server (localhost:4321)
npm run build    # production build → dist/
npm run preview  # preview built site
```

No test runner or linter is configured.

## Stack

- **Astro 4** — static site, no SSR
- **Three.js 0.169** — 3D scenes on every page
- **GSAP 3.12 + ScrollTrigger** — hero entrance + scroll animations
- **TypeScript** (strict null checks)
- Deploy: Netlify (`https://amarante-erasmus.netlify.app`)

## Architecture

### Pages → Layout → Scripts

All week pages (`week-01.astro` … `week-10.astro`) are thin prop-wrappers around `WeekLayout.astro`. The layout owns the full DOM structure: nav, `#three-canvas`, hero, `<main class="week-content">`, footer. Page files only pass props and inject content via `<slot />`.

Week colors are injected as CSS custom properties via Astro's `define:vars` inside a scoped `<style>` block in WeekLayout. Use `--week-primary`, `--week-accent`, `--week-bg` in any stylesheet.

### Two canvas layers

Every week page has **two** independent Three.js canvases:

| Canvas | ID | z-index | Script | Purpose |
|--------|-----|---------|--------|---------|
| Layout canvas | `#three-canvas` | 0 (CSS) | `three-week.ts` | Central geometry or GLB model + particle field |
| Per-page canvas | `#float-canvas` | 1 (inline) | `models-week02.ts` (etc.) | Scroll-driven floating wireframe shapes |

`three-week.ts` reads `data-week`, `data-primary`, and `data-model` attributes from `#three-canvas` to know which geometry or GLB to load. When `data-model` is set (week-01 uses `/models/boeing_737-300.glb`), it loads the GLB; otherwise it picks a geometry by week number (`makeCentralGeo(weekNum)`).

### Central data source

`src/data/weeks.ts` exports the `WeekData[]` array — single source of truth for slugs, titles, colors, and prev/next nav. The index page reads it directly; week pages duplicate the values as props (they predate the data file, so there is some redundancy).

### Glass content mode

`WeekLayout` accepts a `glassContent` boolean prop. When true, `week-content--glass` class is applied to `<main>`, making the white background transparent so the 3D canvas shows through. Individual `.content-section` elements get frosted-glass cards. The CSS for this is in `global.css` under `/* ─── GLASS CONTENT MODE ─── */`.

### Adding a new week page

1. Add entry to `src/data/weeks.ts`
2. Create `src/pages/week-XX.astro` passing all `WeekLayout` props
3. Optionally add a per-page script in `src/scripts/` and import it inside the page's `<script>` tag
4. To use a GLB model, place it in `public/models/` and pass `modelPath="/models/file.glb"` to WeekLayout

## Mandatory Rules
- After EVERY change, add an entry at the end of the file called HISTORIAL.md:
`[YYYY-MM-DD]  — brief summary`
- Read this file at the start of every session
REMEMBER TO ADD THE ENTRIES AT THE END OF THE FILE.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.