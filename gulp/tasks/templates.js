'use strict'

var gulp = require('gulp')

gulp.task('templates', function () {
  var jade = require('gulp-jade')
  var app = require('../config.js').app
  var templates = require('../config.js').templates

  return gulp.src(templates)
    .pipe(jade({locals: {}}))
    .pipe(gulp.dest(app))
})
