import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

import paths from './paths';
import distConfig from './webpack.dist.config.js';
import docsConfig from './webpack.docs.config.js';

/**
 * Runs framework scripts through webpack
 * @return {stream}
 */
export function distScripts() {
  return webpackStream(distConfig, webpack)
  .pipe(gulp.dest(paths.scripts.dist));
}

/**
 * Runs documentation scripts through webpack
 * @return {stream}
 */
export function docsScripts() {
  return webpackStream(docsConfig, webpack)
  .pipe(gulp.dest(paths.scripts.build));
}
