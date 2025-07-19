// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind()
  ],
  output: 'static',
  site: 'https://txgo.github.io',
  // Use base path for GitHub Pages deployment (GitHub Actions sets CI=true)
  base: process.env.CI ? '/juicy-ai-blog/' : '/'
});
