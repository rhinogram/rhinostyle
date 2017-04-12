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

const reload = browserSync.reload;

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
    .filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
}

// Get source directories
const srcDirectories = getDirectories('./src').filter(item => item !== 'pages');
// Will hold final, mutated directories
const ignoreDirectories = [];
// Loop through source directories and adjust paths based on `metalsmith-ignore` needs
srcDirectories.forEach((item) => {
  ignoreDirectories.push(
    `${item}/**/*`,
    `${item}/**/.*`,
  );
});

/**
 * Build documentation pages through `metalsmith`
 * @return {stream}
 */
export default function pages() {
  return metalsmith(process.cwd())
  .source('./src')
  .clean(false)
  .use(msIgnore(ignoreDirectories))
  .use(msPermalinks())
  .use(msMoveUp({
    pattern: 'pages/**/*',
  }))
  .use(msRootpath())
  .use(msInPlace())
  .use(msLayouts({
    engine:    'nunjucks',
    directory: './src/templates',
    default:   'default.html',
  }))
  .destination('./build')
  .build((err) => {
    if (err) {
      throw err;
    } else {
      reload();
    }
  });
}
