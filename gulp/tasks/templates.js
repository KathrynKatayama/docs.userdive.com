'use strict'

var gulp = require('gulp')

gulp.task('templates', function () {
  var gulpJade = require('gulp-jade')
  var jade = require('jade')
  var dist = require('../config.js').dist
  var templates = require('../config.js').templates
  var marked = require('marked')

  // Synchronous highlighting with highlight.js
  jade.filters.marked = marked.setOptions({
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value
    }
  })

  return gulp.src(templates)
    .pipe(gulpJade({
      jade: jade
    }))
    .pipe(gulp.dest(dist))
})
