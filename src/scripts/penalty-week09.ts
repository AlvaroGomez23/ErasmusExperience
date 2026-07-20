// Week 09 — penalty shootout minigame (self-contained 2D canvas).
// Two-stage timing shot:
//   ① a direction arrow sweeps side to side — click/space to lock aim.
//   ② a power ring pulses in and out — click/space to lock intensity.
// Bad aim goes wide, too much power sails over the bar, too little dribbles in.
// Keeper guesses a corner and dives — top corners are unreachable. Five shots.
const canvas = document.getElementById('pk-canvas') as HTMLCanvasElement | null;

if (canvas) {
  const ctx = canvas.getContext('2d')!;
  const goalsEl = document.getElementById('pk-goals')!;
  const trackEl = document.getElementById('pk-track')!;
  const msgEl = document.getElementById('pk-msg')!;
  const resetBtn = document.getElementById('pk-reset')!;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── ball sprite (same ⚽ that floats around the trophy) ──
  const ballImg = document.createElement('canvas');
  ballImg.width = ballImg.height = 128;
  const bctx = ballImg.getContext('2d')!;
  bctx.font = '112px serif';
  bctx.textAlign = 'center';
  bctx.textBaseline = 'middle';
  bctx.fillText('⚽', 64, 74);

  // ── keeper sprite frames (idle/charge/down face left, dive faces right) ──
  const kf: Record<string, HTMLImageElement> = {};
  for (const n of ['idle', 'charge', 'dive', 'down']) {
    const im = new Image();
    im.src = `/photos/keeper/${n}.png`;
    kf[n] = im;
  }

  // ── canvas sizing (CSS px logical space, dpr-crisp) ──
  let W = 0, H = 0;
  function resize() {
    const cssW = canvas!.clientWidth || 600;
    const cssH = Math.round(cssW * 0.62);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas!.width = cssW * dpr;
    canvas!.height = cssH * dpr;
    canvas!.style.height = cssH + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    W = cssW; H = cssH;
  }
  resize();

  const geo = () => {
    const goalW = W * 0.64, goalH = H * 0.30;
    const goalL = (W - goalW) / 2, goalT = H * 0.14;
    return {
      goalL, goalT, goalW, goalH,
      goalR: goalL + goalW, goalB: goalT + goalH,
      ballX0: W / 2, ballY0: H * 0.86, ballR: H * 0.05,
      kw: goalW * 0.24, kh: goalH * 0.9,
      // direction sweep range (extends past the posts so you can miss wide)
      sMin: goalL - goalW * 0.06, sMax: goalL + goalW * 1.06,
    };
  };

  // ── state ──
  type Phase = 'aim-dir' | 'aim-pow' | 'flying' | 'over';
  type Outcome = 'goal' | 'save' | 'wide' | 'over';
  let phase: Phase = 'aim-dir';
  let goals = 0, shots = 0;
  const MAX_SHOTS = 5;
  let dirLock = 0.5;                    // locked direction 0..1
  let shot = { tx: 0, ty: 0, kx: 0, out: 'goal' as Outcome, t: 0 };
  let keeperX = 0;
  let chargeFlip = false;               // random charge facing — a feint
  let flash = 0;
  let flashCol = '255,194,0';

  // TV-style shootout markers — one dot per shot (green goal · red miss)
  const dots: HTMLElement[] = [];
  for (let i = 0; i < MAX_SHOTS; i++) {
    const d = document.createElement('span');
    d.className = 'pk-dot';
    trackEl.appendChild(d);
    dots.push(d);
  }

  function reset() {
    phase = 'aim-dir'; goals = 0; shots = 0; flash = 0;
    keeperX = W / 2;
    goalsEl.textContent = '0';
    dots.forEach((d) => (d.className = 'pk-dot'));
    msgEl.textContent = '';
    msgEl.className = 'pk-msg';
  }
  keeperX = W / 2;

  // triangle wave 0..1
  const tri = (x: number) => { const f = x - Math.floor(x); return f < 0.5 ? f * 2 : 2 - 2 * f; };
  const now = () => performance.now() / 1000;
  const perDir = reduce ? 1.7 : 1.05;   // sweep period (s) — smaller = harder
  const perPow = reduce ? 1.4 : 0.85;

  const dirVal = () => tri(now() / perDir);
  const powVal = () => tri(now() / perPow);

  // ── resolve a shot from locked direction + power ──
  const OVER = 0.85;    // power above this sails over the bar
  const HIGH = 0.55;    // power above this = top corner, keeper can't reach

  function fire(power: number) {
    const g = geo();
    const tx = g.sMin + dirLock * (g.sMax - g.sMin);
    let ty: number, out: Outcome;

    // keeper commits to a random third and dives there
    const zone = Math.floor(Math.random() * 3);           // 0 L · 1 C · 2 R
    const kx = g.goalL + g.goalW * (0.2 + zone * 0.3);

    if (tx < g.goalL || tx > g.goalR) {
      out = 'wide'; ty = g.goalB - g.goalH * 0.5;
    } else if (power > OVER) {
      out = 'over'; ty = g.goalT - g.goalH * 0.35;
    } else {
      ty = g.goalB - (Math.min(power, OVER) / OVER) * g.goalH * 0.95;
      const myThird = Math.min(2, Math.floor((tx - g.goalL) / g.goalW * 3));
      const beaten = power >= HIGH;                        // top corner clears him
      out = (zone === myThird && !beaten) ? 'save' : 'goal';
    }
    shot = { tx, ty, kx, out, t: 0 };
    phase = 'flying';
  }

  // ── one interaction: advance the two-stage aim ──
  function advance() {
    if (phase === 'aim-dir') {
      dirLock = dirVal();
      chargeFlip = Math.random() < 0.5;   // keeper leans a random way to bluff
      phase = 'aim-pow';
    } else if (phase === 'aim-pow') {
      fire(powVal());
    }
  }
  function onKey(e: KeyboardEvent) {
    if (e.code === 'Space' && phase !== 'flying' && phase !== 'over') { e.preventDefault(); advance(); }
  }
  canvas.addEventListener('pointerdown', advance);
  window.addEventListener('keydown', onKey);
  resetBtn.addEventListener('click', reset);

  // ── shot resolution ──
  function land() {
    shots++;
    const scored = shot.out === 'goal';
    if (scored) goals++;
    goalsEl.textContent = String(goals);
    dots[shots - 1].classList.add(scored ? 'is-goal' : 'is-miss');
    flash = 1;
    const label: Record<Outcome, [string, string, string]> = {
      goal: ['GOAL! ⚽', 'is-goal', '255,194,0'],
      save: ['SAVED! 🧤 (keeper guessed your side — go higher)', 'is-save', '30,91,230'],
      wide: ['WIDE! 😬', 'is-miss', '158,27,50'],
      over: ['OVER THE BAR! 🚀', 'is-miss', '158,27,50'],
    };
    const [text, cls, col] = label[shot.out];
    msgEl.textContent = text;
    msgEl.className = 'pk-msg ' + cls;
    flashCol = col;
    if (shots >= MAX_SHOTS) {
      phase = 'over';
      const v = goals >= 4 ? 'Golden Boot.' : goals >= 2 ? 'Decent boot.' : goals >= 1 ? 'One is one.' : 'Bench material.';
      setTimeout(() => {
        msgEl.textContent = `Full time — ${goals}/${MAX_SHOTS}. ${v}`;
        msgEl.className = 'pk-msg is-full';
      }, 750);
    } else {
      phase = 'aim-dir';
    }
  }

  // ── drawing ──
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
  const drawBall = (x: number, y: number, r: number) => ctx.drawImage(ballImg, x - r, y - r, r * 2, r * 2);

  function drawGoal(g: ReturnType<typeof geo>) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(g.goalL, g.goalT, g.goalW, g.goalH);
    ctx.clip();
    ctx.strokeStyle = 'rgba(255,255,255,0.26)';
    ctx.lineWidth = 1;
    const step = g.goalW / 13;
    for (let x = g.goalL; x <= g.goalR; x += step) { ctx.beginPath(); ctx.moveTo(x, g.goalT); ctx.lineTo(x, g.goalB); ctx.stroke(); }
    for (let y = g.goalT; y <= g.goalB; y += step) { ctx.beginPath(); ctx.moveTo(g.goalL, y); ctx.lineTo(g.goalR, y); ctx.stroke(); }
    ctx.restore();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = Math.max(4, W * 0.012);
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(g.goalL, g.goalB);
    ctx.lineTo(g.goalL, g.goalT);
    ctx.lineTo(g.goalR, g.goalT);
    ctx.lineTo(g.goalR, g.goalB);
    ctx.stroke();
  }

  // draw one keeper frame, scaled to a consistent body height off `idle`,
  // anchored bottom-centre at `baseY`. `flip` mirrors horizontally.
  function drawKeeperSprite(name: string, cx: number, baseY: number, flip: boolean, g: ReturnType<typeof geo>) {
    const img = kf[name];
    const ref = kf.idle.naturalHeight;
    if (!img.naturalHeight || !ref) return;          // frames not loaded yet
    const scale = (g.kh * 1.15) / ref;               // idle stands ~ goal height
    const w = img.naturalWidth * scale, h = img.naturalHeight * scale;
    ctx.save();
    ctx.translate(cx, baseY);
    if (flip) ctx.scale(-1, 1);
    ctx.drawImage(img, -w / 2, -h, w, h);
    ctx.restore();
  }

  // choose frame + facing for the current moment
  // idle/charge/down face LEFT by default, dive faces RIGHT → mirror accordingly
  function keeper(g: ReturnType<typeof geo>) {
    if (phase === 'flying') {
      const t = Math.min(1, shot.t);
      const dir = Math.sign(shot.kx - W / 2);        // -1 left · +1 right
      const isCenter = Math.abs(shot.kx - W / 2) < g.goalW * 0.06;
      if (t < 0.16 || isCenter) {
        drawKeeperSprite('charge', keeperX, g.goalB, chargeFlip, g);
      } else if (t < 0.72) {
        drawKeeperSprite('dive', keeperX, g.goalB - g.kh * 0.12, dir < 0, g);
      } else {
        drawKeeperSprite('down', keeperX, g.goalB, dir > 0, g);
      }
    } else if (phase === 'aim-pow') {
      drawKeeperSprite('charge', keeperX, g.goalB, chargeFlip, g);
    } else {
      drawKeeperSprite('idle', keeperX, g.goalB, false, g);
    }
  }

  function drawPitch(g: ReturnType<typeof geo>) {
    const grd = ctx.createLinearGradient(0, 0, 0, H);
    grd.addColorStop(0, '#2a1a55');
    grd.addColorStop(0.42, '#1c7a3a');
    grd.addColorStop(1, '#14622e');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    for (let i = 0; i < 6; i += 2) ctx.fillRect(0, g.goalB + (H - g.goalB) * (i / 6), W, (H - g.goalB) / 6);
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.beginPath(); ctx.arc(g.ballX0, g.ballY0 + g.ballR * 1.5, g.ballR * 0.26, 0, Math.PI * 2); ctx.fill();
  }

  function hint(text: string, g: ReturnType<typeof geo>) {
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.font = `700 ${Math.max(12, W * 0.026)}px var(--font-mono, monospace)`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(text, W / 2, 8);
    ctx.textBaseline = 'alphabetic';
  }

  function draw() {
    const g = geo();
    drawPitch(g);
    drawGoal(g);

    if (phase === 'aim-dir') {
      keeperX += (W / 2 - keeperX) * 0.1;
      keeper(g);
      drawBall(g.ballX0, g.ballY0, g.ballR);
      // sweeping direction arrow along the goal mouth
      const d = dirVal();
      const ax = g.sMin + d * (g.sMax - g.sMin);
      const ay = g.goalB + g.ballR * 0.4;
      // track: green inside the posts, red in the wide zones
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(232,17,45,0.65)';
      ctx.beginPath(); ctx.moveTo(g.sMin, ay); ctx.lineTo(g.goalL, ay); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(g.goalR, ay); ctx.lineTo(g.sMax, ay); ctx.stroke();
      ctx.strokeStyle = 'rgba(140,214,18,0.85)';
      ctx.beginPath(); ctx.moveTo(g.goalL, ay); ctx.lineTo(g.goalR, ay); ctx.stroke();
      // arrow — green when on frame, red when it would go wide
      const inFrame = ax >= g.goalL && ax <= g.goalR;
      ctx.fillStyle = inFrame ? '#8CD612' : '#E8112D';
      ctx.strokeStyle = '#12092e';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(ax, ay - g.ballR * 0.9);
      ctx.lineTo(ax - g.ballR * 0.5, ay - g.ballR * 1.7);
      ctx.lineTo(ax + g.ballR * 0.5, ay - g.ballR * 1.7);
      ctx.closePath();
      ctx.fill(); ctx.stroke();
      hint('① Stop the arrow on GREEN (between the posts)', g);
    } else if (phase === 'aim-pow') {
      keeperX += (W / 2 - keeperX) * 0.1;
      keeper(g);
      // locked aim line — green if on frame, red if wide
      const tx = g.sMin + dirLock * (g.sMax - g.sMin);
      const onFrame = tx >= g.goalL && tx <= g.goalR;
      ctx.strokeStyle = onFrame ? 'rgba(140,214,18,0.9)' : 'rgba(232,17,45,0.9)';
      ctx.setLineDash([6, 6]); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(g.ballX0, g.ballY0); ctx.lineTo(tx, g.goalT); ctx.stroke();
      ctx.setLineDash([]);
      drawBall(g.ballX0, g.ballY0, g.ballR);
      // reference rings: HIGH (green, beats keeper) and OVER (red, over the bar)
      const rr = (p: number) => g.ballR * 1.3 + p * g.ballR * 2.8;
      ctx.setLineDash([3, 5]); ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(140,214,18,0.5)';
      ctx.beginPath(); ctx.arc(g.ballX0, g.ballY0, rr(HIGH), 0, Math.PI * 2); ctx.stroke();
      ctx.strokeStyle = 'rgba(232,17,45,0.55)';
      ctx.beginPath(); ctx.arc(g.ballX0, g.ballY0, rr(OVER), 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
      // live pulsing power ring: yellow (low) → green (top corner) → red (over)
      const p = powVal();
      const col = p > OVER ? '232,17,45' : p >= HIGH ? '140,214,18' : '255,194,0';
      ctx.strokeStyle = `rgba(${col},0.98)`;
      ctx.lineWidth = 4;
      ctx.beginPath(); ctx.arc(g.ballX0, g.ballY0, rr(Math.min(p, 1)), 0, Math.PI * 2); ctx.stroke();
      hint('② Stop in the GREEN ring = goal · past red = over the bar', g);
    } else if (phase === 'flying') {
      shot.t += reduce ? 0.05 : 0.03;
      const t = Math.min(1, shot.t);
      const bx = g.ballX0 + (shot.tx - g.ballX0) * t;
      const arc = Math.sin(t * Math.PI) * H * 0.12;
      const by = g.ballY0 + (shot.ty - g.ballY0) * t - arc;
      const scale = 1 - 0.45 * t;
      const dv = easeOut(t);
      keeperX = W / 2 + (shot.kx - W / 2) * dv;
      keeper(g);
      drawBall(bx, by, g.ballR * scale);
      if (t >= 1) land();
    } else {
      keeperX += (W / 2 - keeperX) * 0.1;
      keeper(g);
      drawBall(g.ballX0, g.ballY0, g.ballR);
      hint('Full time — press Reset', g);
    }

    if (flash > 0) {
      flash -= 0.028;
      ctx.fillStyle = `rgba(${flashCol},${Math.max(0, flash) * 0.28})`;
      ctx.fillRect(0, 0, W, H);
    }
  }

  let rafId = 0;
  (function tick() {
    rafId = requestAnimationFrame(tick);
    draw();
  })();

  window.addEventListener('resize', resize);
  document.addEventListener('astro:before-swap', () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('resize', resize);
    window.removeEventListener('keydown', onKey);
  }, { once: true });
}
