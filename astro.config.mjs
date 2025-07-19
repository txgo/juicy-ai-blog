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
  // Only use base path for GitHub Pages deployment
  base: process.env.NODE_ENV === 'production' ? '/juicy-ai-blog' : '/'
});
