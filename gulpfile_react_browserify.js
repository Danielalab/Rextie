// const gulp = require('gulp');
// const sourcemaps = require('gulp-sourcemaps');
// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
// const browserify = require('browserify');
// const babelify = require('babelify');
// const source = require('vinyl-source-stream');
// const rename = require('gulp-rename');
// const streamify = require('gulp-streamify');


// gulp.task('default', () => {
//     return browserify('index.js')
//         .transform(babelify, {presets: ["es2015", "react"]})
//         .bundle()
//         .pipe(source('app.min.js'))
//         .pipe(gulp.dest('public'))
//         .pipe(rename('app.min.js'))
//         .pipe(streamify(concat('app.min.js')))
//         .pipe(streamify(uglify()))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('public'));
// });

// gulp.task('watch', () => {
//     gulp.watch('js/*.js', ['default']);
// });