import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://amarante-erasmus.netlify.app',
  vite: {
    optimizeDeps: {
      include: ['three', 'gsap'],
    },
  },
});
