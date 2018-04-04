var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');

var config = {
  source: './src/',
  dist: './public/'
};

var paths = {
  assets: "assets/",
  html: "*.html",
  sass: "sass/*.scss",
  css: "css/*.css",
  js: "*.js",
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: paths.assets + paths.sass,
  js: config.source + paths.js,
  css: config.source + paths.css,
};

gulp.task('html', ()=> {
  gulp.src(sources.html)
  .pipe(gulp.dest(config.dist));
});

gulp.task('js', function () {
  return gulp.src(sources.js)
    .pipe(concat('app.min.js'))
    .pipe(babel({ presets: ['react','env'] }))
    .pipe(uglify())
    .pipe(gulp.dest(config.dist + 'js'))
});

gulp.task('css', function () {
  return gulp.src([sources.css, sources.sass])
    .pipe(sass())
    .pipe(concat('main.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest(config.dist + 'css'))
});

gulp.task('watch', function () {
  gulp.watch(sources.html, ['html']);
  gulp.watch([sources.css, sources.sass], ['css']);
  gulp.watch(sources.js, ['js']);
});

gulp.task('default', [ 'css', 'js']);