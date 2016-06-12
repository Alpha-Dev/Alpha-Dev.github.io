var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    webpack = require('gulp-webpack'),
    autoprefixer = require('gulp-autoprefixer'),
    image = require('gulp-image'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    handlebars = require('gulp-compile-handlebars'),
    connect = require('gulp-connect'),

    rename = require("gulp-rename");
function onError(err){
  console.log(err);
}
gulp.task('test',function(){
  connect.reload();
})

gulp.task('js',()=> {
  var name_holder;
  return gulp.src(['src/scripts/**.**'])
      .pipe(plumber({
        errorHandler: onError
      }))
      .pipe(rename(function (path) {
        name_holder = path.basename;
      }))
      .pipe(webpack(require ('./webpack.config.js')))
      .pipe(rename(function (path) {
        path.basename = name_holder+".min";
      }))
      .pipe(gulp.dest('public/scripts'))
      .pipe(connect.reload());
});
gulp.task('sass', ()=>{
  return gulp.src('src/scss/*.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cssnano())
    .pipe(rename((path)=>{
      path.basename += ".min";
    }))
    .pipe(gulp.dest('public/css'))
    .pipe(connect.reload());
});
gulp.task("html",()=>{
return gulp.src('src/**/**.html')
  .pipe(plumber({
    errorHandler: onError
  }))
  /*
  .pipe(handlebars({}, {}))
  .pipe(rename((path)=>{
    path.extname=".html";
  }))
  */
  .pipe(gulp.dest('public'))
  .pipe(connect.reload());
});
gulp.task('image_optimization', () => {
	return gulp.src('src/images_dev/*.*')
		.pipe(image())
		.pipe(gulp.dest('public/images_prod'))
    .pipe(connect.reload());
});
gulp.task('move_assets',() =>{
  return gulp.src('src/assets/**/**.**')
  .pipe(gulp.dest("public/assets"))
  .pipe(connect.reload());
})
gulp.task('default',['js','sass','html']);

gulp.task('watch',()=>{
  gulp.watch('src/scss/**/**.scss',['sass']);
  gulp.watch('src/scripts/**/**.*',["js"]);
  gulp.watch('src/**/**.html',['html']);
  gulp.watch('src/assets/**/**.**',['move_assets']);
  connect.server({
    root: 'public',
    livereload: true
  });
});
