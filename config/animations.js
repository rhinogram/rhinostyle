import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

import paths from './paths';

const $ = gulpLoadPlugins();
const { reload } = browserSync;

/**
 * Flag animation
 * @return {stream}
 */
export function animationFlag() {
  const path = paths.animation_flag;

  return gulp.src(path.src)
    .pipe($.svgSprite({
      transform: [{
        svgo: {
          plugins: [
            {
              convertTransform: false,
            },
          ],
        },
      }],
      mode: {
        css: {
          dest: '',
          bust: false,
          sprite: 'sprite.svg',
          layout: 'vertical',
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
    .pipe($.duration('Built Flag Animation'))
    .pipe(reload({ stream: true }));
}

/**
 * Login animation
 * @return {stream}
 */
export function animationLogin() {
  const path = paths.animation_login;

  return gulp.src(path.src)
    .pipe($.svgSprite({
      mode: {
        css: {
          dest: '',
          bust: false,
          sprite: 'sprite.svg',
          layout: 'vertical',
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
    .pipe($.duration('Built Login Animation'))
    .pipe(reload({ stream: true }));
}

/**
 * Secure animation
 * @return {stream}
 */
export function animationSecure() {
  const path = paths.animation_secure;

  return gulp.src(path.src)
    .pipe($.svgSprite({
      transform: [{
        svgo: {
          plugins: [
            {
              convertTransform: false,
            },
          ],
        },
      }],
      mode: {
        css: {
          dest: '',
          bust: false,
          sprite: 'sprite.svg',
          layout: 'vertical',
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
    .pipe($.duration('Built Secure Animation'))
    .pipe(reload({ stream: true }));
}

/**
 * Time animation
 * @return {stream}
 */
export function animationTime() {
  const path = paths.animation_time;

  return gulp.src(path.src)
    .pipe($.svgSprite({
      mode: {
        css: {
          dest: '',
          bust: false,
          sprite: 'sprite.svg',
          layout: 'vertical',
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
    .pipe($.duration('Built Time Animation'))
    .pipe(reload({ stream: true }));
}
