import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { clear } from "./gulp/tasks/clear.js";
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { styles } from "./gulp/tasks/styles.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { images } from "./gulp/tasks/images.js";
import { critical } from "./gulp/tasks/criticalCss.js";
import { server } from "./gulp/tasks/server.js";
import { zip } from "./gulp/tasks/zip.js";

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
}

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.styles, styles);
  gulp.watch(path.watch.scripts, scripts);
  gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(copy, html, styles, scripts, images);
const dev = gulp.series(clear, mainTasks, gulp.parallel(watcher, server));
const image = gulp.series(clear, images);
const criticalCss = gulp.task("criticalCss", critical);
const build = gulp.series(clear, mainTasks);
const deployZIP = gulp.series(clear, mainTasks, zip);

export { dev }
export { image }
export { criticalCss }
export { build }
export { deployZIP }

gulp.task('default', dev);
