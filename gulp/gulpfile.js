var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob')
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var postcss = require('gulp-postcss');
var autoprefixcer = require('autoprefixer');
var cssdeclsort = require('css-declaration-sorter');
var mqpacker = require('css-mqpacker');

gulp.task('sass', function() {
  return gulp.src('../scss/**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(postcss([mqpacker()]))
    .pipe(postcss([
      cssdeclsort({
        order: 'smacss'
      })
    ]))
    .pipe(postcss([
      autoprefixcer({
        browsers: ["last 2 versions", "ie >= 11", "Android >= 4"], 
        cascade: false
      })
    ]))
    .pipe(sourcemaps.write('../css'))
    .pipe(gulp.dest('../css'));
});
gulp.task('sassmin', function() {
  return gulp.src('../scss/**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(postcss([mqpacker()]))
    .pipe(postcss([
      cssdeclsort({
        order: 'smacss'
      })
    ]))
    .pipe(postcss([
      autoprefixcer({
        browsers: ["last 2 versions", "ie >= 11", "Android >= 4"], 
        cascade: false
      })
    ]))
    .pipe(sourcemaps.write('../css'))
    .pipe(gulp.dest('../css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('../scss/**/*.scss', gulp.series('sass'));
});
gulp.task('sassmin:watch', function() {
  gulp.watch('../scss/**/*.scss', gulp.series('sassmin'));
});
