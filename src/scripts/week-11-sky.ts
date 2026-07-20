// Week 11 — sunset sky. Two fixed gradient layers behind the 3D canvas
// crossfade as you scroll: day (body bg) → sunset → starry night,
// so the memory-cloud flythrough and "The End" land under the stars.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sky    = document.getElementById('sky');
const sunset = document.querySelector<HTMLElement>('.sky-sunset');
const night  = document.querySelector<HTMLElement>('.sky-night');

if (sky && sunset && night) {
  // #sky is authored inside <main> (a z-10 stacking context) — re-parent it
  // to <body> so its z-index:-1 actually lands BEHIND the 3D canvas (z 0).
  // Astro's scoped-style attributes move with the nodes, styles keep applying.
  document.body.appendChild(sky);

  // Both fades are anchored to elements at or ABOVE the memory-cloud pin
  // start. The flythrough lazy-inits mid-scroll and its pin adds ~200vh of
  // page height — a page-progress ('max') scrub re-maps at that refresh and
  // the sky visibly stepped backwards. Element anchors don't move when the
  // pin spacer appears, so the fade stays linear the whole way down.
  ScrollTrigger.create({
    trigger: '#dep-board',
    start: 'top bottom',
    endTrigger: '#boarding-pass',
    end: 'center center',
    scrub: 0.5,
    onUpdate: (self) => { sunset.style.opacity = String(self.progress); },
  });

  ScrollTrigger.create({
    trigger: '.letter-grid',
    start: 'top 75%',
    endTrigger: '#memory-cloud',
    end: 'center center',   // fully night exactly when the flythrough pins
    scrub: 0.5,
    onUpdate: (self) => { night.style.opacity = String(self.progress); },
  });
}
