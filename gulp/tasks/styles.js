import dartSass from "sass";
import gulpSass from "gulp-sass";
import importer from "node-sass-tilde-importer";
import rename from "gulp-rename";
import cleancss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";

const sass = gulpSass(dartSass);

export const styles = () => {
  return app.gulp.src(app.path.source.styles, { sourcemaps: app.isDev })
    .pipe(sass(
      {
        importer: importer,
        outputStyle: 'expanded'        
      }
    ).on('error', sass.logError))
    .pipe(webpcss(
      {
        webpClass: ".webp",
        noWebpClass: ".no-webp"
      }
    ))
    .pipe(autoprefixer(
      {
        grid: true,
        overrideBrowserslist: ["last 10 versions"],
        cascade: false,
      }
    ))
    .pipe(cleancss())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(app.plugins.browsersync.stream());
}
