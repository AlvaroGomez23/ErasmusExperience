let buf = '';
document.addEventListener('keydown', (e) => {
  if (e.key.length !== 1) return;
  buf = (buf + e.key.toLowerCase()).slice(-5);
  if (buf === 'party') window.location.href = '/party';
});
