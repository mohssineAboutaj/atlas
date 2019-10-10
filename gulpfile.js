const gulp = require('gulp'),
      gulpSass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      gulpConcat = require('gulp-concat'),
      config = require('./config');

// set path of files & folder
const src = config.src,
      jsFolder = config.jsFolder,
      jsFiles = config.jsFiles,
      sassFolder = config.sassFolder,
      sassFiles = config.sassFiles,
      cssFolder = config.cssFolder,
      htmlFiles = config.htmlFiles,
      jsFilderToConcat = config.jsList;

// fuction to handle the errors
function handleErr(err) {
  if (err) {
    console.log(err)
  }
}

gulp.task('sass-task', () => {
  return gulp.src(sassFiles)
        .pipe(gulpSass())
        .on('error', handleErr)
        .pipe(gulp.dest(cssFolder))
        .pipe(browserSync.stream());
});

// javaScript task
gulp.task('js-task', () => {
  return gulp.src(jsFilderToConcat)
        .pipe(gulpConcat("main.js"))
        .on('error', handleErr)
        .pipe(gulp.dest(src))
});

// server & hotReload taks
gulp.task('server-task', () => {
  browserSync.init({
    server: {
      port: 3000,
      baseDir: src,
    }
  })
});

// html task
gulp.task('html-task', () => {
  browserSync.reload();
});

// watch task
gulp.task('watch-task', () => {
  // watch sass files & do the sass task
  gulp.watch(sassFiles, ['sass-task']);

  // watch js files & do the js task
  gulp.watch(jsFiles, ['js-task']);

  // watch html files & do the html task
  gulp.watch(htmlFiles, ['html-task']);
});

// default task
gulp.task('default', [
  'js-task',
  'sass-task',
  'watch-task',
  'server-task',
]);
