import gulp from "gulp"
import log from "fancy-log";
import _critical from "critical";

const stream = _critical.stream;

process.setMaxListeners(100);

export const critical = () => {
  return gulp
    .src("dist/index.html")
    .pipe(
      stream({
        base: "dist/",
        inline: true,
        css: ["dist/static/style/main.css"],
        dimensions: [
          {
            height: 500,
            width: 320
          },
          {
            height: 1000,
            width: 1920
          }
        ],
        ignore: ["@font-face"]
      })
    )
    .on("error", err => {
      log.error(err.message);
    })
    .pipe(gulp.dest("dist"));
};
