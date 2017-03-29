import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

import paths from './paths';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

/**
 * Copies audio files to build/dist directories
 * @return {stream}
 */
export default function audio() {
  const path = paths.audio;

  return gulp.src([
    path.src,
  ])
  .pipe(gulp.dest(path.build))
  .pipe(gulp.dest(path.dist))
  .pipe($.duration('Copied Audio'))
  .pipe(reload({ stream: true }));
}
