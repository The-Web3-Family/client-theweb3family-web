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
    titleTag: z.string().nullish(),
    category: z.string().nullish(),
    schemaType: z.enum(['BlogPosting', 'Article', 'NewsArticle']).nullish(),
    shareImage: z.string().nullish(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).nullish(),
    draft: z.boolean().nullish(),
  }),
});

export const collections = { articles };
