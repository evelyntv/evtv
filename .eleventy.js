const markdownItCheckbox = require("markdown-it-task-checkbox")

var md = require('markdown-it')()
            .use(require('markdown-it-task-checkbox'),{
              disabled: true,
              divWrap: false,
              divClass: 'checkbox',
              idPrefix: 'cbx_',
              ulClass: 'task-list',
              liClass: 'task-list-item'
            });

md.render('- [x] unchecked') // =>
// <ul class="task-list">
//  <li class="task-list-item">
//     <div classname="checkbox">
//       <input type="checkbox" id="cbx_0" checked="true" disabled="true">
//       <label for="cbx_0">unchecked</label>
//     </div>
//  </li>
// </ul>

module.exports = async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addWatchTarget("./src/img/");

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItCheckbox));

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};