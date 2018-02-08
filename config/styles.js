import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes';
import sorting from 'postcss-sorting';
import svgFragments from 'postcss-svg-fragments';

import paths from './paths';
import packagedata from '../package.json';

const $ = gulpLoadPlugins();
const { reload } = browserSync;
const rhinostyleVersion = `/*! ${packagedata.name} v${packagedata.version} */\n`;
const processors = [
  autoprefixer({ cascade: false }),
  cssnano({ zindex: false }),
  flexbugs(),
  sorting(),
  svgFragments(),
];

/**
 * Builds framework styles
 * @return {stream}
 */
export function distStyles() {
  const path = paths.styles;

  return gulp.src(path.src)
    // Do not compress to allow importing as 'less' in other projects.
    .pipe($.less({ compress: false }).on('error', function(err) { // eslint-disable-line func-names
      // Show error in console
      console.error(err.message); // eslint-disable-line no-console
      // Display error in the browser
      browserSync.notify(err.message, 3000);
      // Prevent gulp from catching the error and exiting the watch process
      this.emit('end');
    }))
    .pipe($.postcss(processors))
    .pipe($.insert.prepend(rhinostyleVersion))
    .pipe($.size({
      showFiles: true,
      title: 'Dist Styles:',
    }))
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
    .pipe($.less({ compress: false }).on('error', function(err) { // eslint-disable-line func-names
      // Show error in console
      console.error(err.message); // eslint-disable-line no-console
      // Display error in the browser
      browserSync.notify(err.message, 3000);
      // Prevent gulp from catching the error and exiting the watch process
      this.emit('end');
    }))
    .pipe($.postcss(processors))
    .pipe($.insert.prepend(rhinostyleVersion))
    .pipe($.size({
      showFiles: true,
      title: 'Doc Styles:',
    }))
    .pipe(gulp.dest(path.build))
    .pipe($.duration('Built Doc Styles'))
    .pipe(reload({ stream: true }));
}
