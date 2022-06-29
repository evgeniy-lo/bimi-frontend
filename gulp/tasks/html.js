import webpHtmlNosvg from "gulp-webp-html-nosvg";
import htmlmin from "gulp-htmlmin";

export const html = () => {
  return app.gulp.src(app.path.source.html)
    .pipe(app.plugins.plumber())
    .pipe(webpHtmlNosvg())
    .pipe(
      app.plugins.if(
        app.isBuild,
        htmlmin()
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
}
