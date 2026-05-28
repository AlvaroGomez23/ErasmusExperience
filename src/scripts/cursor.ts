import gsap from 'gsap';

const ring = document.createElement('div');
ring.className = 'cursor-ring';
document.body.append(ring);

let mx = -100, my = -100;
let rx = -100, ry = -100;

window.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
});

gsap.ticker.add(() => {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  gsap.set(ring, { x: rx, y: ry });
});

document.addEventListener('mouseleave', () => gsap.to(ring, { opacity: 0, duration: 0.3 }));
document.addEventListener('mouseenter', () => gsap.to(ring, { opacity: 1, duration: 0.3 }));

document.addEventListener('mouseover', (e) => {
  if ((e.target as Element).closest('a, button'))
    gsap.to(ring, { scale: 1.25, duration: 0.3, ease: 'power2.out' });
});
document.addEventListener('mouseout', (e) => {
  if ((e.target as Element).closest('a, button'))
    gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power2.out' });
});
