'use strict'

var gulp = require('gulp')
gulp.task('serve', function () {
  var connect = require('gulp-connect')
  connect.server({
    root: 'dist'
  })
})
