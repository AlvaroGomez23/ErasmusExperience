// Week 11 — split-flap departure board. Each cell rolls forward through the
// character set until it lands on its target letter, with a mechanical
// "clack" (a quick vertical fold) on every step. Columns further right start
// later, so the whole board ripples into place. Fires once, when scrolled in.
const CHARS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-';
const STEP_MS = 55;   // time between flips
const COL_MS = 45;    // extra delay per column → left-to-right ripple

const board = document.querySelector<HTMLElement>('.flap-board');
if (board) {
  const cells = [...board.querySelectorAll<HTMLElement>('.flap-cell')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const face = (cell: HTMLElement) => cell.querySelector<HTMLElement>('.flap-char')!;

  if (reduce) {
    // No motion: just show the final letters.
    cells.forEach((c) => { face(c).textContent = c.dataset.char || ' '; });
  } else {
    const run = () => cells.forEach((cell) => {
      const targetIdx = Math.max(0, CHARS.indexOf(cell.dataset.char || ' '));
      const col = Number(cell.dataset.col) || 0;
      const el = face(cell);
      let cur = 0;
      el.textContent = CHARS[0];
      window.setTimeout(() => {
        const iv = window.setInterval(() => {
          cur++;
          el.textContent = CHARS[cur];
          // Quick fold: char drops in from the top edge, like a flap turning.
          el.animate(
            [
              { transform: 'translateY(-48%) rotateX(62deg)', opacity: 0.35 },
              { transform: 'translateY(0) rotateX(0deg)', opacity: 1 },
            ],
            { duration: 90, easing: 'ease-out' },
          );
          if (cur >= targetIdx) window.clearInterval(iv);
        }, STEP_MS);
      }, col * COL_MS);
    });

    // Trigger once when the board scrolls into view.
    const io = new IntersectionObserver((entries, obs) => {
      if (entries.some((e) => e.isIntersecting)) { run(); obs.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(board);
  }
}
