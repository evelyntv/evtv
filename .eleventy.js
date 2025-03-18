const markdownItCheckbox = require("markdown-it-task-checkbox");
const { DateTime } = require("luxon");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addWatchTarget("./src/img/");

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItCheckbox));

  eleventyConfig.addFilter("numCommas", (value) => value.toLocaleString());

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // const options = {
  //   dateStyle: "full",
  //   timeZoneName: "long"
  //   // timeStyle: "full",
  //   // weekday: "long",
  //   // year: "numeric",
  //   // month: "long",
  //   // day: "numeric",
  // };

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode(
    "niceDate",
    (date) =>
      `${new Date(date).toLocaleDateString("en-US", {dateStyle: "full"})}`,
  );

  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};

