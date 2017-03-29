import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

import paths from './paths';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

/**
 * SVG sprite for icons
 * @return {stream}
 */
export default function icons() {
  const path = paths.icons;

  return gulp.src(path.src)
    .pipe($.imagemin())
    .pipe(gulp.dest(path.dist))
    .pipe(gulp.dest(path.build))
    .pipe($.svgSprite({
      shape: {
        id: {
          generator: 'icon-',
        },
        dimension: {
          attributes: false,
        },
      },
      mode: {
        symbol: {
          dest: '',
          example: false,
          sprite: 'sprite.svg',
        },
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        dimensionAttributes: false,
      },
    }))
    .pipe(gulp.dest(path.dist))
    .pipe(gulp.dest(path.build))
    .pipe($.duration('Built Icons'))
    .pipe(reload({ stream: true }));
}
