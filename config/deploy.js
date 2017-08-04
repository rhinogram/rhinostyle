import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

/**
 * Deploy built documentation site to GitHub pages
 * @return {void}
 */
export default function deploy() {
  return gulp.src('./build/**/*')
    .pipe($.ghPages());
}
