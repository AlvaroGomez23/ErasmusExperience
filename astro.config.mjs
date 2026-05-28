import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://amarante-web.vercel.app',
  vite: {
    optimizeDeps: {
      include: ['three', 'gsap'],
    },
  },
});
