// Articles are plain Markdown files in src/content/articles/. Adding one is
// the whole workflow: it appears on /articles/ and gets its own page.
// See article-template.md at the repo root.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().nullish(),
    description: z.string(),
    summary: z.string().nullish(),
    image: z.string().nullish(),
    imageAlt: z.string().nullish(),
    imageCaption: z.string().nullish(),
    keyword: z.string().nullish(),
  }),
});

export const collections = { articles };
