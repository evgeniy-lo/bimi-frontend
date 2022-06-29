import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp.src(app.path.source.images)
    .pipe(app.plugins.plumber())
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.source.images))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(imagemin(
      {
        verbose: true,
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3
      }
    ))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.source.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
}
