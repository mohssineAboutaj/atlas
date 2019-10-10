const src = "src/",
      jsFolder = src + "js/",
      jsFiles = jsFolder + "*.js",
      sassFolder = src + "scss/",
      sassFiles = sassFolder + "*.scss",
      cssFolder = src + "css/",
      htmlFiles = src + "*.html";

const jsList = [
	jsFolder + 'script.js',
];

module.exports = {
	src,
  jsFolder,
  jsFiles,
  sassFolder,
  sassFiles,
  cssFolder,
  htmlFiles,
	jsList,
}