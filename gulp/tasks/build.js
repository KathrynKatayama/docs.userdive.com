'use strict'

var gulp = require('gulp')
gulp.task('build', function (callback) {
  var path = require('path')
  var root = require('../config.js').root
  var gulpIf = require('gulp-if');
  var htmlmin = require('gulp-htmlmin');
  var cssnano = require('gulp-cssnano');
  var uglify = require('gulp-uglify');

  return gulp.src(path.join(root, '_book/**'))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
})
