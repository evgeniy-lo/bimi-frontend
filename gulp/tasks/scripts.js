import babel from "gulp-babel";
import webpack from "webpack-stream";

export const scripts = () => {
  return app.gulp.src(app.path.source.scripts, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber())
    .pipe(babel())
    .pipe(webpack(
      {
        mode: app.isBuild ? 'production' : 'development',
        output: {
          filename: 'main.min.js',
        }
      }
    ))
    .pipe(app.gulp.dest(app.path.build.scripts))
    .pipe(app.plugins.browsersync.stream());
}