var gulp = require('gulp'),
    babelify = require('babelify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('gulp-browserify'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imageop = require('gulp-image-optimization');
    rename = require("gulp-rename");

gulp.task('babel', function () {
  return gulp.src(['babel/script.js'])
      .pipe(sourcemaps.init())
      .pipe(browserify({
          transform:['babelify']
      }))
      .pipe(uglify())
      .pipe(rename("bundled.min.js"))
      .pipe(gulp.dest('script'));
});
gulp.task('connect', function() {
    connect.server({
        livereload: true,
        port: 8888
    });
});

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('sass', function(){
  return gulp.src('sass/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(cssnano())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('css'));
});
gulp.task('default',['connect','babel','sass']);
