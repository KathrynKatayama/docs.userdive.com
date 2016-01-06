'use strict'

var gulp = require('gulp')
gulp.task('build', ['templates'], function (callback) {
  var path = require('path')
  var root = require('../config.js').root
  return gulp.src(path.join(root, 'app/**'))
    .pipe(gulp.dest('dist'))
})
