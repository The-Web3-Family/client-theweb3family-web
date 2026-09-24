module.exports = function (eleventyConfig) {
  // Static assets that ship as-is, unchanged, into the built site.
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/christopher.jpg");
  eleventyConfig.addPassthroughCopy("src/og-share.jpg");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Articles are plain Markdown files under src/articles/. Adding one is
  // the whole authoring workflow: no template edits needed. See
  // article-template.md at the repo root for the starting point.
  eleventyConfig.addCollection("articles", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/articles/*.md").sort((a, b) => b.date - a.date)
  );

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
