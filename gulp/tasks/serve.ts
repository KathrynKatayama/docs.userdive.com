import * as gulp from "gulp";

gulp.task("serve", () => {
  let connect: any = require("gulp-connect");
  connect.server({
    root: "dist"
  });
});
