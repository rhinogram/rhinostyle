import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes';

import paths from './paths';
import packagedata from '../package.json';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const rhinostyleVersion = `/*! ${packagedata.name} v${packagedata.version} */\n`;
const processors = [
  autoprefixer({ browsers: ['last 2 versions', 'not ie < 11', '>2%'], cascade: false }),
  cssnano({ zindex: false }),
  flexbugs(),
];

/**
 * Builds framework styles
 * @return {stream}
 */
export function distStyles() {
  const path = paths.styles;

  return gulp.src(path.src)
  // Do not compress to allow importing as 'less' in other projects.
  .pipe($.less({ compress: false }))
  .pipe($.postcss(processors))
  .pipe($.insert.prepend(rhinostyleVersion))
  .pipe(gulp.dest(path.dist))
  .pipe($.duration('Built Dist Styles'))
  .pipe(reload({ stream: true }));
}

/**
 * Builds framework styles
 * @return {stream}
 */
export function docsStyles() {
  const path = paths.styles;

  return gulp.src(path.docSrc)
  .pipe($.less({ compress: false }))
  .pipe($.postcss(processors))
  .pipe($.insert.prepend(rhinostyleVersion))
  .pipe(gulp.dest(path.build))
  .pipe($.duration('Built Doc Styles'))
  .pipe(reload({ stream: true }));
}
