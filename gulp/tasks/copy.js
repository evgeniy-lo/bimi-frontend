export const copy = () => {
  return app.gulp.src(app.path.source.assets)
    .pipe(app.gulp.dest(app.path.build.assets));
}
