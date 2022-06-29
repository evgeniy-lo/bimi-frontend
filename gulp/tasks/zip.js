import del from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
  del(['./www', './www.zip'])
  return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(app.plugins.plumber())
    .pipe(zipPlugin('www.zip'))
    .pipe(app.gulp.dest('./'));
}
