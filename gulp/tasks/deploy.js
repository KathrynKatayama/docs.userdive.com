'use strict'

var gulp = require('gulp')
gulp.task('deploy', function () {
  var oghliner = require('oghliner')
  return oghliner.deploy({
    rootDir: 'dist'
  })
})
