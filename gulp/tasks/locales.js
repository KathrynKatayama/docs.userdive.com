'use strict'

var gulp = require('gulp')
gulp.task('locales', function () {
  var path = require('path')
  var config = require('../config.js')
  return gulp.src(path.join(config.root, 'src/locales/**'))
    .pipe(gulp.dest(path.join(config.dist, 'locales')))
})
