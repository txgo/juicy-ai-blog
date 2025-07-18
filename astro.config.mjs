// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    keystatic()
  ],
  output: 'hybrid',
  site: 'https://yourusername.github.io',
  base: '/juicy-ai-blog'
});
