import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes';
import sorting from 'postcss-sorting';
import inlineSVG from 'postcss-inline-svg';

import paths from './paths';
import packagedata from '../package.json';

const $ = gulpLoadPlugins();
const rhinostyleVersion = `/*! ${packagedata.name} v${packagedata.version} */\n`;
const processors = [
  autoprefixer({ cascade: false }),
  flexbugs(),
  sorting(),
  inlineSVG(),
  cssnano({ zindex: false }),
];

/**
 * Builds framework styles
 * @return {stream}
 */
export function distStyles() {
  const path = paths.styles;

  return gulp.src(path.src)
    .pipe($.changed(path.dist))
    .pipe($.sourcemaps.init())
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
    .pipe($.sourcemaps.write('./'))
    .pipe($.size({
      showFiles: true,
      title: 'Dist Styles:',
    }))
    .pipe(gulp.dest(path.dist))
    .pipe(browserSync.stream({ match: '**/*.css' }))
    .pipe($.duration('Built Dist Styles'));
}

/**
 * Builds framework styles
 * @return {stream}
 */
export default function docsStyles() {
  const path = paths.styles;

  return gulp.src(path.docSrc)
    .pipe($.changed(path.build))
    .pipe($.sourcemaps.init())
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
    .pipe($.sourcemaps.write('./'))
    .pipe($.size({
      showFiles: true,
      title: 'Doc Styles:',
    }))
    .pipe(gulp.dest(path.build))
    .pipe(browserSync.stream({ match: '**/*.css' }))
    .pipe($.duration('Built Doc Styles'));
}
