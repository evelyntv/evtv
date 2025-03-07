const pluginTOC = require('eleventy-plugin-toc')

module.exports = async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addWatchTarget("./src/img/");

    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };

  

