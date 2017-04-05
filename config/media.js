import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import paths from './paths';

const $ = gulpLoadPlugins();

export default function media() {
  return gulp.src(paths.media.src)
  .pipe($.imagemin())
  .pipe(gulp.dest(paths.media.dist))
  .pipe(gulp.dest(paths.media.build))
  .pipe($.duration('Compressing Media'));
}
