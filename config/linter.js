import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

/**
 * Run styles through `lesshint`
 * @return {stream}
 */
export default function linter() {
  return gulp.src('./src/less/**/*.less')
  .pipe($.lesshint())
  .pipe($.lesshint.reporter());
}
