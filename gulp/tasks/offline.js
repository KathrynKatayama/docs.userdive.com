'use strict'

var gulp = require('gulp')
gulp.task('offline', ['build'], function () {
  var oghliner = require('oghliner')
  return oghliner.offline({
    rootDir: 'dist/',
    fileGlobs: [
      'assets/**',
      'en/**',
      'ja/**',
      'locales/**'
    ]
  })
})
