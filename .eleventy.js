module.exports = function (eleventyConfig) {
  // Static assets that ship as-is, unchanged, into the built site.
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/logo.png");
  eleventyConfig.addPassthroughCopy("src/christopher.jpg");
  eleventyConfig.addPassthroughCopy("src/og-share-v2.jpg");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  // Article cover images (1200x630 JPGs, one per article, named after the
  // article's own filename). See article-template.md.
  eleventyConfig.addPassthroughCopy("src/images");

  // Articles are plain Markdown files under src/articles/. Adding one is
  // the whole authoring workflow: no template edits needed. See
  // article-template.md at the repo root for the starting point.
  eleventyConfig.addCollection("articles", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/articles/*.md").sort((a, b) => b.date - a.date)
  );

  // Minutes to read, at a gentle 200 words a minute, for the article
  // date line ("4 minute read"). Strips tags before counting.
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("otherArticles", (list, url, n) =>
    (list || []).filter((a) => a.url !== url).slice(0, n));
  eleventyConfig.addFilter("readingTime", (html) => {
    const words = String(html || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });

  eleventyConfig.addFilter("readableDate", (dateObj) =>
    new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  // Curl straight quotes and apostrophes typed in article Markdown, per
  // CLAUDE.md. Deliberately keep the "replacements" rule disabled: it's
  // the part of markdown-it's typographer that turns -- and --- into en
  // and em dashes, and CLAUDE.md bans em dashes outright.
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.set({ typographer: true });
    mdLib.core.ruler.disable("replacements");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
