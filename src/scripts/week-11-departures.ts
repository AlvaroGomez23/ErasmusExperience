// Week 11 — departure board. Every character in every row becomes a small
// split-flap tile; on scroll-in each tile cycles random characters (staggered
// per row / per column) before settling on its real one — like an airport
// Solari board. Reduced motion: tiles render settled immediately.
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const board = document.getElementById('dep-board');

type Flap = { el: HTMLElement; target: string; settleAt: number };

if (board) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const flaps: Flap[] = [];

  // Wrap every character of every cell in a .flap tile, remembering its
  // final character and when (ms after start) it should stop shuffling.
  board.querySelectorAll<HTMLElement>('.dep-row').forEach((row, r) => {
    row.querySelectorAll<HTMLElement>('.dep-cell').forEach((cell) => {
      const text = cell.textContent ?? '';
      cell.textContent = '';
      [...text].forEach((ch, c) => {
        const span = document.createElement('span');
        span.className = 'flap';
        span.textContent = reduce ? ch : ' ';
        cell.appendChild(span);
        flaps.push({
          el: span,
          target: ch,
          settleAt: 300 + r * 130 + c * 28 + Math.random() * 250,
        });
      });
    });
  });

  if (!reduce) {
    const io = new IntersectionObserver((entries, obs) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      obs.disconnect();

      const t0 = performance.now();
      let last = 0;
      (function spin(now: number) {
        const elapsed = now - t0;
        // Shuffle at ~22fps — real flap boards are chunky, not smooth.
        if (now - last > 45) {
          last = now;
          let pending = 0;
          for (const f of flaps) {
            if (elapsed >= f.settleAt) {
              if (f.el.textContent !== f.target) f.el.textContent = f.target;
            } else {
              pending++;
              // Spaces flip through blanks occasionally so rows shimmer unevenly.
              f.el.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
          if (pending === 0) return;   // everything settled — stop the loop
        }
        requestAnimationFrame(spin);
      })(t0);
    }, { threshold: 0.25 });
    io.observe(board);
  }
}
