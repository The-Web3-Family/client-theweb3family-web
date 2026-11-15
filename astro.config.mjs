// theweb3family.com, built with Astro. Read CLAUDE.md before changing anything.
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

export default defineConfig({
  site: 'https://theweb3family.com',

  // Plain static files, one folder per page (/about/index.html), the same
  // addresses the Eleventy build produced. Vercel serves what lands in dist/.
  output: 'static',
  build: { format: 'directory' },

  // Articles are plain Markdown. Straight quotes and apostrophes curl on
  // their own. Dashes and triple dots stay exactly as typed, since
  // CLAUDE.md keeps em dashes out of the copy.
  markdown: {
    processor: satteri({
      features: { smartPunctuation: { dashes: false, ellipses: false } },
    }),
  },
});
