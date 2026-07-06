// Week 11 — finale interactions (2D / DOM, on top of the 3D scenes):
//   • stat numbers count up 0 → value when scrolled into view
//   • content sections, recap tiles and letters reveal on scroll
//   • the big "OBRIGADO AMARANTE" sign-off draws itself in letter by letter
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Count-up stats ───────────────────────────────────────────────
// Values look like "11", "900+", "1200", "∞", "5". Animate the leading
// number, preserve any suffix, and skip values with no number (e.g. "∞").
document.querySelectorAll<HTMLElement>('.stat-value').forEach((el) => {
  const raw = el.textContent?.trim() ?? '';
  const match = raw.match(/^(\d[\d,]*)(.*)$/);
  if (!match) return;                                   // "∞" and friends: leave as-is
  const target = parseInt(match[1].replace(/,/g, ''), 10);
  const suffix = match[2];
  const obj = { n: 0 };
  el.textContent = `0${suffix}`;
  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () => gsap.to(obj, {
      n: target,
      duration: 1.6,
      ease: 'power2.out',
      onUpdate: () => { el.textContent = `${Math.round(obj.n).toLocaleString()}${suffix}`; },
    }),
  });
});

// Cards are alive on their own (ambient CSS animations in week-11.astro):
// perpetual float, breathing glow, icon bob, sheen sweep — no scroll-driven
// entrance, so nothing can flash or revert on ScrollTrigger refresh.

// ─── Goodbye letters — typewriter, one after the other ────────────────
// Capture each paragraph's text, clear it, then type it out char-by-char
// when the card scrolls in. A blinking caret trails the cursor.
gsap.utils.toArray<HTMLElement>('.letter p').forEach((el, i) => {
  const full = el.textContent?.trim() ?? '';
  if (!full) return;
  // Reserve the final height BEFORE clearing: if typing grows the page,
  // every line-wrap shifts the memory-cloud pin math and "The End" teleports
  // when the extra height releases the pin at the bottom of the page.
  el.style.minHeight = `${el.getBoundingClientRect().height}px`;
  el.textContent = '';
  el.classList.add('type-caret');
  const state = { n: 0 };
  ScrollTrigger.create({
    trigger: el.closest('.letter') as HTMLElement,
    start: 'top 66%',
    once: true,
    onEnter: () => gsap.to(state, {
      n: full.length,
      duration: Math.max(1.2, full.length * 0.03),
      ease: 'none',
      delay: 0.4 + i * 0.5,   // second letter types after the first
      onUpdate: () => { el.textContent = full.slice(0, Math.round(state.n)); },
      onComplete: () => el.classList.remove('type-caret'),
    }),
  });
});

// ─── Sign-off: draw "OBRIGADO AMARANTE" letter by letter ──────────
const signoff = document.querySelector('.signoff-title');
if (signoff) {
  const letters = signoff.querySelectorAll('span');
  gsap.from(letters, {
    yPercent: 120, autoAlpha: 0, rotateZ: 8,
    duration: 0.7, ease: 'back.out(1.7)', stagger: 0.035,
    scrollTrigger: { trigger: signoff, start: 'top 80%', once: true },
  });
}

