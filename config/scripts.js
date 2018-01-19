import gulp from 'gulp';
import path from 'path';
import webpack from 'webpack';
import PluginError from 'plugin-error';
import log from 'fancy-log';

import paths from './paths';
import distConfig from './webpack.dist.config.js';
import docsConfig from './webpack.docs.config.js';

/**
 * Runs framework scripts through webpack
 * @return {stream}
 */
export function distScripts(callback) {
  webpack(distConfig, (err, stats) => {
    if (err) {
      throw new PluginError('[webpack:build]', err);
    }

    log(
      `[webpack:build]\nCompleted ${stats.toString({
        assets: true,
        chunks: false,
        modules: false,
        chunkModules: false,
        colors: true,
        hash: false,
        timings: false,
        version: false,
      })}`);

    callback();
  });
}

/**
 * Runs documentation scripts through webpack
 * @return {stream}
 */
export function docsScripts(callback) {
  webpack(docsConfig, (err, stats) => {
    if (err) {
      throw new $.util.PluginError('[webpack:build]', err);
    }

    util.log(
      `[webpack:build]\nCompleted ${stats.toString({
        assets: true,
        chunks: false,
        modules: false,
        chunkModules: false,
        colors: true,
        hash: false,
        timings: false,
        version: false,
      })}`);

    callback();
  });
}

export function copyModernizr() {
  return gulp.src('./src/scripts/vendor/modernizr.custom.js')
    .pipe(gulp.dest(path.resolve(paths.scripts.build)));
}
