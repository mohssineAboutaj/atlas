const port = 3000;

const src = "src/",
      jsFolder = src + "js/",
      jsFiles = jsFolder + "*.js",
      pugFolder = src + "pug/",
      pugFiles = pugFolder + "**/*.pug",
      pugMain = pugFolder + "index.pug",
      sassFolder = src + "scss/",
      sassFiles = sassFolder + "**/*.scss",
      sassMain = sassFolder + "style.scss",
      cssFolder = src + "css/",
      htmlFiles = src + "*.html";

const jsList = [
  './node_modules/@fortawesome/fontawesome-free/js/all.min.js',
  './node_modules/jquery/dist/jquery.min.js',
  './node_modules/popper/dist/popper.min.js',
  './node_modules/bootstrap/dist/js/bootstrap.min.js',
	jsFolder + 'script.js',
];

module.exports = {
	src,
  jsFolder,
  jsFiles,
	jsList,
  sassFolder,
  sassFiles,
  sassMain,
  cssFolder,
  pugFolder,
  pugFiles,
  pugMain,
  port,
}