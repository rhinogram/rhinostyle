import fs from 'fs';
import path from 'path';
import RSVP from 'rsvp';
import Svgo from 'svgo';
import parse5 from 'parse5';
import recursiveReadSync from 'recursive-readdir-sync';

import paths from '../paths';

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {RSVP.Promise<string>}
 */
function optimizeSvg(svg) {
  // configure svgo
  const svgo = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      { removeAttrs: { attrs: '(fill|stroke.*)' } },
    ],
  });

  return new RSVP.Promise((resolve) => {
    svgo.optimize(svg, ({ data }) => resolve(data));
  });
}

/**
 * Get content between opening and closing `<svg>` tags.
 *
 * @param  {string} svg
 * @return {string}
 */
function getSvgContent(svg) {
  const fragment = parse5.parseFragment(svg);
  const content = parse5.serialize(fragment.childNodes[0]);
  return content;
}

/**
 * Build an icons object in the format: `{ <icon name>: <svg content> }`.
 *
 * @return {RSVP.Promise<Object>}
 */
export function buildIconsObject() {
  const icons = {};

  paths.svg.src.forEach((value) => {
    // Strip off wildcard (used in gulp watch)
    const cleanPath = path.join('../../', value.replace('**/*.svg', '').replace('/*.svg', ''));

    // Gather SVG files
    const svgFiles = recursiveReadSync(path.resolve(__dirname, cleanPath))
      .filter(file => path.extname(file) === '.svg');

    svgFiles.forEach((svgFile) => {
      const svg = fs.readFileSync(path.resolve(__dirname, cleanPath, svgFile), 'utf8');
      const key = path.basename(svgFile, '.svg');

      icons[key] = optimizeSvg(svg)
        .then(optimizedSvg => getSvgContent(optimizedSvg));
    });
  });

  return RSVP.hash(icons);
}

export function buildIconsFile() {
  buildIconsObject()
    .then((icons) => {
      const jsonPath = path.join('../../', paths.svg.json);

      fs.writeFile(
        path.resolve(__dirname, `${jsonPath}/icons.json`),
        JSON.stringify(icons),
        (err) => { // eslint-disable-line consistent-return
          if (err) return err;
        },
      );
    });
}
