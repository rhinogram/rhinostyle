import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import paths from './paths';

const $ = gulpLoadPlugins();

/**
 * SVG sprite for icons
 * @return {stream}
 */
export default function icons() {
  const path = paths.svg;

  return gulp.src(path.src)
    .pipe($.svgSprite({
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        dimensionAttributes: false,
      },
      shape: {
        transform: [{
          svgo: {
            plugins: [
              { cleanupIDs: false },
              { convertShapeToPath: false },
              { mergePaths: false },
              { removeAttrs: { attrs: '(stroke)' } },
            ],
          },
        }],
      },
      mode: {
        symbol: {
          dest: '',
          sprite: 'sprite.svg',
        },
      },
    }))
    .pipe($.size({
      showFiles: true,
      title: 'Icons:',
    }))
    .pipe(gulp.dest(path.dist))
    .pipe(gulp.dest(path.build))
    .pipe($.duration('Built Icons'));
}
