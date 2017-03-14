import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes';

import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import browserSync from 'browser-sync';
import del from 'del';

import metalsmith from 'metalsmith';
import msChanged from 'metalsmith-changed';
import msInPlace from 'metalsmith-in-place';
import msRootpath from 'metalsmith-rootpath';
import msLayouts from 'metalsmith-layouts';
import nunjucks from 'nunjucks';

import paths from './config/gulpConfig';
import packagedata from './package.json';

import distConfig from './config/webpack.dist.config.js';
import docsConfig from './config/webpack.docs.config.js';

const reload = browserSync.reload;
const RhinoStyleVersion = `/*! ${packagedata.name} v${packagedata.version} */\n`;
const $ = gulpLoadPlugins();
let forceBuild = true;

// https://github.com/superwolff/metalsmith-layouts/issues/43
nunjucks.configure('./src/templates', { watch: false });

// -------------------------
// All Tasks
// -------------------------
gulp.task('animations', ['animation:flag', 'animation:login', 'animation:secure', 'animation:time']);
gulp.task('default', ['audio', 'icons', 'dist:scripts', 'dist:styles', 'docs:scripts', 'docs:styles', 'docs:site']);
gulp.task('dist', ['audio', 'icons', 'dist:scripts', 'dist:styles', 'styles:lint']);
gulp.task('docs', ['icons', 'docs:scripts', 'docs:styles', 'docs:site', 'styles:lint']);
gulp.task('server', ['docs:serve']);
gulp.task('styles', ['docs:styles', 'dist:styles', 'styles:lint']);
gulp.task('website', ['docs:deploy']);


// -------------------------
// Animations
// -------------------------
gulp.task('animation:flag', () => {
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
});

gulp.task('animation:login', () => {
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
});

gulp.task('animation:secure', () => {
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
});

gulp.task('animation:time', () => {
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
});

// -------------------------
// Audio
// -------------------------
gulp.task('audio', () => {
  const path = paths.audio;

  return gulp.src([
    path.src,
  ])
  .pipe(gulp.dest(path.build))
  .pipe(gulp.dest(path.dist))
  .pipe($.duration('Copied Audio'))
  .pipe(reload({ stream: true }));
});

// -------------------------
// Browswer Sync
// -------------------------
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './build',
    },
    port: 3002,
  });
});


// -------------------------
// Clean
// -------------------------
gulp.task('clean', () =>
  del([
    './build/**/*',
    './dist/**/*',
  ]),
);


// -------------------------
// Dist Scripts
// -------------------------
gulp.task('dist:scripts', () => {
  return webpackStream(distConfig, webpack)
  .pipe(gulp.dest(paths.scripts.dist));
});


// -------------------------
// Dist Styles
// -------------------------
gulp.task('dist:styles', () => {
  const path = paths.styles;
  const processors = [
    autoprefixer({ browsers: ['last 2 versions', 'not ie < 11', '>2%'], cascade: false }),
    cssnano({ zindex: false }),
    flexbugs(),
  ];

  return gulp.src(path.src)
    // Do not compress to allow importing as 'less' in other projects.
    .pipe($.less({ compress: false }))
    .pipe($.postcss(processors))
    .pipe($.insert.prepend(RhinoStyleVersion))
    .pipe(gulp.dest(path.dist))
    .pipe($.duration('Built Dist Styles'))
    .pipe(reload({ stream: true }));
});


// -------------------------
// Docs Deploy
// -------------------------
gulp.task('docs:deploy', () =>
  gulp.src('./build/**/*')
    .pipe($.ghPages()),
);


// -------------------------
// Docs React
// -------------------------
gulp.task('docs:scripts', () => {
  return webpackStream(docsConfig, webpack)
  .pipe(gulp.dest(paths.scripts.build));
});


// -------------------------
// Docs Serve
// -------------------------
gulp.task('docs:serve', ['browser-sync', 'docs'], () => {
  nunjucks.configure('./src/templates', { watch: true });

  gulp.watch(paths.icons.src, ['icons']);
  gulp.watch(paths.styles.src, ['dist:styles']);
  gulp.watch([paths.scripts.src], ['docs:scripts', reload]);
  gulp.watch(paths.styles.docAll, ['docs:styles']);
  gulp.watch([paths.metalsmith.pages, paths.metalsmith.templates], ['docs:site']).on('change', () => {
    forceBuild = true;
  });
});


// -------------------------
// Docs Site
// -------------------------
gulp.task('docs:site', () =>
  /* const path = paths.metalsmith; */

  metalsmith(__dirname)
  .source('./src/pages')
  .clean(false)
  .use(msChanged({ force: forceBuild }))
  .use(msInPlace({ engine: 'nunjucks' }))
  .use(msRootpath())
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
      browserSync.reload();
    }
  }),
);


// -------------------------
// Docs Styles
// -------------------------
gulp.task('docs:styles', () => {
  const path = paths.styles;
  const processors = [
    autoprefixer({ browsers: ['last 2 versions', 'not ie < 11', '>2%'], cascade: false }),
    cssnano({ zindex: false }),
    flexbugs(),
  ];
  return gulp.src(path.docSrc)
    .pipe($.less({ compress: false }))
    .pipe($.postcss(processors))
    .pipe($.insert.prepend(RhinoStyleVersion))
    .pipe(gulp.dest(path.build))
    .pipe($.duration('Built Doc Styles'))
    .pipe(reload({ stream: true }));
});


// -------------------------
// Icons
// -------------------------
gulp.task('icons', () => {
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
});


// -------------------------
// Style Linting
// -------------------------
gulp.task('styles:lint', () =>
  gulp.src('./src/less/**/*.less')
    .pipe($.lesshint())
    .pipe($.lesshint.reporter()),
);
