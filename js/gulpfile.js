'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('default', ['sass', 'pug']);

gulp.task('pug', function buildHTML() {
  return gulp.src('index.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('.'))
});

gulp.task('sass:watch', function () {
  gulp.watch('styles.scss', ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('styles.scss', ['sass']);
});