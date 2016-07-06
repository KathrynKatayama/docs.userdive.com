/// <reference path='../../typings/index.d.ts' />
import gulp = require('gulp')

gulp.task('build', function (callback: Function) {
  const path: any = require('path')
  const root: any = require('../config').root
  const gulpIf: any =  require('gulp-if')
  const htmlmin: any = require('gulp-htmlmin')
  const cssnano: any = require('gulp-cssnano')
  const uglify: any = require('gulp-uglify')

  return gulp.src(path.join(root, '_book/**'))
    .pipe(gulpIf('*.js', uglify({preserveComments: 'some'})))
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest(path.join(root, 'dist')))
})
