module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./scss');
  eleventyConfig.addPassthroughCopy("./src/css");
  return {
    pathPrefix: "/bootstrap-theme/",
    dir: {
      input: "src/docs",
      output: "docs",
    },
  };
};
