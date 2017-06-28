import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import reporter from 'postcss-reporter';
import stylelint from 'stylelint';
import less from 'postcss-less';

const $ = gulpLoadPlugins();

/**
 * Run styles through `lesshint`
 * @return {stream}
 */
export default function linter() {
  return gulp.src('./src/less/**/*.less')
  .pipe($.postcss(
    [
      stylelint(),
      reporter({ clearMessages: true }),
    ],
    {
      syntax: less,
    },
  ));
}
