/// <reference path="../../typings/index.d.ts" />
import gulp = require("gulp");

gulp.task("serve", () => {
  let connect: any = require("gulp-connect");
  connect.server({
    root: "dist"
  });
});
