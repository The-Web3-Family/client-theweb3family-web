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
    // Optional extras, used by the News articles:
    // titleTag    the browser-tab and search title, when it differs from the headline
    // category    a section name for search engines, such as News
    // schemaType  the structured-data type, BlogPosting unless set
    // shareImage  a link-preview image, kept off the page itself
    // faq         questions and answers, repeated for search engines as FAQPage data
    titleTag: z.string().nullish(),
    category: z.string().nullish(),
    schemaType: z.enum(['BlogPosting', 'Article', 'NewsArticle']).nullish(),
    shareImage: z.string().nullish(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).nullish(),
    // draft: true builds the page at its own address and keeps it off the
    // Articles list, the "more articles" links, and the sitemap, and asks
    // search engines to skip it. Remove the line to publish.
    draft: z.boolean().nullish(),
  }),
});

export const collections = { articles };
