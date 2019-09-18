import gulp from 'gulp';
import browserSync from 'browser-sync';

import paths from './paths';

const { reload } = browserSync;

/**
 * Watch for changes in files
 * @return {void}
 */
export default function watch(cb) {
  gulp.watch(paths.svg.src, gulp.series('icons', reload));
  gulp.watch(paths.styles.docAll, gulp.series('dist:styles', 'docs:styles', reload));
  gulp.watch(paths.scripts.src, gulp.series('dist:scripts', 'docs:scripts', reload));
  gulp.watch([paths.metalsmith.pages, paths.metalsmith.templates], gulp.series('docs:site', reload));
  // Stop old version of gulp watch from running when modified
  gulp.watch(['gulpfile.babel.js', './config/*']).on('change', () => process.exit(0));
  cb();
}
