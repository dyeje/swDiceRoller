'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var concatCss = require('gulp-concat-css');

gulp.task('default', ['sass', 'pug']);

gulp.task('pug', function buildHTML() {
  return gulp.src('markup/index.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('out/'))
});

gulp.task('sass', function () {
  return gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss("site.css"))
    .pipe(gulp.dest('out/'));
});

gulp.task('watch', function () {
  gulp.watch('html/index.pug', ['pug']);
  gulp.watch('css/*.scss', ['sass']);
});
