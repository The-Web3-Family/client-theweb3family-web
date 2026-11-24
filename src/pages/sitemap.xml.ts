import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const pages = [
  '/',
  '/about/',
  '/articles/',
  '/case-studies/',
  '/case-studies/love-aid-foundation/',
  '/case-studies/ask-g-pop/',
  '/case-studies/rap-frogs/',
  '/contact/',
  '/privacy/',
  '/support/',
];

export const GET: APIRoute = async () => {
  const built = new Date().toISOString();
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const entries = [
    ...pages.map((path) => ({ path, lastmod: built })),
    ...articles.map((article) => ({ path: `/articles/${article.id}/`, lastmod: article.data.date.toISOString() })),
  ];
  const body = `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((e) => `  <url>\n    <loc>https://theweb3family.com${e.path}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
