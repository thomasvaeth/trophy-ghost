'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
  return gulp.src('./dist/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
  .pipe(minifyCss({compatibility: 'ie8'}))
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('bundleScripts', function() {
  return gulp.src([
    './dist/js/vendor/rellax.js',
    './dist/js/vendor/wow.js',
    './dist/js/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./assets/js'));
});

gulp.task('minifyBundle', ['bundleScripts'], function() {
  return gulp.src('./assets/js/app.js')
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('./assets/js'));
});

gulp.task('build', ['sass', 'minifyBundle']);

gulp.task('watch', function() {
  gulp.watch('./dist/scss/**/*.scss', ['sass']);
  gulp.watch('./dist/js/**/*.js', ['minifyBundle']);
});

gulp.task('default', ['build', 'watch']);
