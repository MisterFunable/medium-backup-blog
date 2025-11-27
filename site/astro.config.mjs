import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://misterfunable.github.io/blog',
  base: '/blog',
  vite: {
    plugins: [tailwindcss()]
  }
});