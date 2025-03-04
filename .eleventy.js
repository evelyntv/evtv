const pluginTOC = require('eleventy-plugin-toc')

module.exports = async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");

    // Plugins
    eleventyConfig.addPlugin(pluginTOC);
    
    eleventyConfig.addFilter("randomItem", (arr) => {
      arr.sort(() => {
        return 0.5 - Math.random();
      });
      return arr.slice(0, 1);
    });
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };

  

