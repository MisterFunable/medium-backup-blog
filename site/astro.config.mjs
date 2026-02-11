import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://misterfunable.github.io',
  base: '/medium-backup-blog',
  vite: {
    plugins: [tailwindcss()]
  }
});