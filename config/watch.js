import gulp from 'gulp';
import browserSync from 'browser-sync';

import paths from './paths';

const reload = browserSync.reload;

/**
 * Watch for changes in files
 * @return {void}
 */
export default function watch() {
  gulp.watch(paths.icons.src, ['icons']);
  gulp.watch(paths.styles.src, ['dist:styles']);
  gulp.watch([paths.scripts.src], ['docs:scripts', reload]);
  gulp.watch(paths.styles.docAll, ['docs:styles']);
  gulp.watch([paths.metalsmith.pages, paths.metalsmith.templates], ['docs:site']);
  // Stop old version of gulp watch from running when modified
  gulp.watch(['gulpfile.babel.js', './config/*']).on('change', () => process.exit(0));
}
