import fs from 'fs';
import path from 'path';
import metalsmith from 'metalsmith';
import msInPlace from 'metalsmith-in-place';
import msMoveUp from 'metalsmith-move-up';
import msRootpath from 'metalsmith-rootpath';
import msPermalinks from 'metalsmith-permalinks';
import msLayouts from 'metalsmith-layouts';
import msIgnore from 'metalsmith-ignore';
import nunjucks from 'nunjucks';
import browserSync from 'browser-sync';
import { resolve } from 'rsvp';

const { reload } = browserSync;

// https://github.com/superwolff/metalsmith-layouts/issues/43
nunjucks.configure(['./src/templates', './dist/svg'], {
  watch: false,
  noCache: true,
});

/**
 * Get top-level directories
 * @param  {array} srcPath
 * @return array
 */
function getDirectories(srcPath) {
  return fs.readdirSync(srcPath)
    .filter((file) => fs.statSync(path.join(srcPath, file)).isDirectory());
}

// Get source directories
const srcDirectories = getDirectories('./src').filter((item) => item !== 'pages');
// Will hold final, mutated directories
const ignoreDirectories = [];
// Loop through source directories and adjust paths based on `metalsmith-ignore` needs
srcDirectories.forEach((item) => {
  ignoreDirectories.push(
    `${item}/**/*`,
    `${item}/**/.*`,
  );
});

function runMetalsmith(resolve, reject) {
  return metalsmith(process.cwd())
    .source('./src')
    .clean(false)
    .use(msIgnore(ignoreDirectories))
    .use(msPermalinks())
    .use(msMoveUp({
      pattern: 'pages/**/*',
    }))
    .use(msRootpath())
    .use(msInPlace({
      engine: 'nunjucks',
      suppressNoFilesError: true,
    }))
    .use(msLayouts({
      engine: 'nunjucks',
      directory: './src/templates',
      default: 'default.html',
      suppressNoFilesError: true,
    }))
    .destination('./docs')
    .build((err) => {
      if (err) {
        reject(err);
      } else {
        reload();
        resolve();
      }
    });
}

/**
 * Build documentation pages through `metalsmith` *
 * as of gulp v4+ all asynchronous tasks must signal completion, this is accomplished by returning a promise
 * refer to this link for more information https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async
 * @return {Promise}
 */
export default function pages() {
  return new Promise(function(resolve, reject) {
    runMetalsmith(resolve, reject);
  });
}