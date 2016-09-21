import * as gulp from 'gulp'
import * as gulpIf from 'gulp-if'
import * as htmlmin from 'gulp-htmlmin'
import * as path from 'path'
import * as uglify from 'gulp-uglify'

import { global } from '../config'

gulp.task('build', function (callback: Function) {
  const cssnano: any = require('gulp-cssnano')

  return gulp.src(path.join(global, '_book/**'))
    .pipe(gulpIf('*.js', uglify({preserveComments: 'some'})))
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest(path.join(global, 'dist')))
})
