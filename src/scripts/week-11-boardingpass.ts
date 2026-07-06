// Week 11 — boarding pass. Flips up into place when scrolled in, then
// tracks the pointer with a 3D tilt + moving glare. Reduced motion just
// shows the ticket flat, no tilt.
const stage = document.querySelector<HTMLElement>('.pass-stage');
const pass = document.querySelector<HTMLElement>('#boarding-pass');

if (stage && pass) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Entrance — flip up once, on scroll-in.
  const io = new IntersectionObserver((entries, obs) => {
    if (entries.some((e) => e.isIntersecting)) {
      pass.classList.add('is-in');
      obs.disconnect();
    }
  }, { threshold: 0.4 });
  io.observe(pass);

  if (!reduce) {
    const MAX = 12;   // max tilt in degrees
    stage.addEventListener('pointermove', (e) => {
      if (!pass.classList.contains('is-in')) return;
      const r = pass.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;   // -0.5 … 0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      pass.style.transform =
        `rotateY(${px * MAX}deg) rotateX(${-py * MAX}deg) translateZ(6px)`;
      pass.style.setProperty('--mx', `${(px + 0.5) * 100}%`);
      pass.style.setProperty('--my', `${(py + 0.5) * 100}%`);
    });
    stage.addEventListener('pointerleave', () => {
      pass.style.transform = '';   // fall back to the rest state
    });
  }
}
