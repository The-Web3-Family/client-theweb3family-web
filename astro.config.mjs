import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

export default defineConfig({
  site: 'https://theweb3family.com',

  output: 'static',
  build: { format: 'directory' },

  markdown: {
    processor: satteri({
      features: { smartPunctuation: { dashes: false, ellipses: false } },
    }),
  },
});
