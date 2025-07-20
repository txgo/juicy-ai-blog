// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  site: 'https://txgo.github.io',
  // Use base path for GitHub Pages deployment (GitHub Actions sets CI=true)
  base: process.env.CI ? '/juicy-ai-blog/' : '/'
});
