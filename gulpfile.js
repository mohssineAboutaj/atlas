const gulp = require('gulp'),
      gulpSass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      gulpConcat = require('gulp-concat'),
      gulpPug = require('gulp-pug'),
      config = require('./config');

// set path of files & folder
const { src,
        jsFiles,
        sassFiles,
        sassMain,
        cssFolder,
        jsList: jsFilderToConcat,
        pugFiles,
        pugMain,
        port,
} = config;

// custom fuction to handle the errors
function handleErr(err) {
  if (err) {
    console.log(err)
  }
}

// SASS task
gulp.task('sass-task', () => {
  return gulp.src(sassMain)
        .pipe(gulpSass())
        .on('error', handleErr)
        .pipe(gulp.dest(cssFolder))
        .pipe(browserSync.stream())
        .pipe(browserSync.stream())
});

// javaScript task
gulp.task('js-task', () => {
  return gulp.src(jsFilderToConcat)
        .pipe(gulpConcat("main.js"))
        .on('error', handleErr)
        .pipe(gulp.dest(src))
        .pipe(browserSync.stream())
});

// html task
gulp.task('pug-task', () => {
  return gulp.src(pugMain)
        .pipe(gulpPug({
          pretty: true,
        }))
        .on('error', handleErr)
        .pipe(gulp.dest(src))
        .pipe(browserSync.stream())
});

// server & hotReload taks
gulp.task('server-task', () => {
  browserSync.init({
    ui: false,
    port: port,
    server: {
      baseDir: src,
    }
  })
});

// watch task
gulp.task('watch-task', () => {
  // watch sass files & do the sass task
  gulp.watch(sassFiles, ['sass-task']);

  // watch js files & do the js task
  gulp.watch(jsFiles, ['js-task']);

  // watch html files & do the html task
  gulp.watch(pugFiles, ['pug-task']);
});

// default task
gulp.task('default', [
  'js-task',
  'sass-task',
  'pug-task',
  'watch-task',
  'server-task',
]);
