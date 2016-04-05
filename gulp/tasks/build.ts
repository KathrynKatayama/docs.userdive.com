import * as gulp from "gulp";

gulp.task("build", function (callback) {
  let path: any = require("path");
  let root: any = require("../config").root;
  let gulpIf: any =  require("gulp-if");
  let htmlmin: any = require("gulp-htmlmin");
  let cssnano: any = require("gulp-cssnano");
  let uglify: any = require("gulp-uglify");

  return gulp.src(path.join(root, "_book/**"))
    .pipe(gulpIf("*.js", uglify({preserveComments: "some"})))
    .pipe(gulpIf("*.html", htmlmin({collapseWhitespace: true})))
    .pipe(gulpIf("*.css", cssnano()))
    .pipe(gulp.dest("dist"));
});
