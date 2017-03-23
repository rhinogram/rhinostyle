import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import fs from 'fs';
import utilPath from 'path';

import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes';

import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import browserSync from 'browser-sync';
import del from 'del';

import metalsmith from 'metalsmith';
import msInPlace from 'metalsmith-in-place';
import msMoveUp from 'metalsmith-move-up';
import msRootpath from 'metalsmith-rootpath';
import msPermalinks from 'metalsmith-permalinks';
import msLayouts from 'metalsmith-layouts';
import msIgnore from 'metalsmith-ignore';
import nunjucks from 'nunjucks';

import paths from './config/gulpConfig';
import packagedata from './package.json';

import distConfig from './config/webpack.dist.config.js';
import docsConfig from './config/webpack.docs.config.js';

const reload = browserSync.reload;
const RhinoStyleVersion = `/*! ${packagedata.name} v${packagedata.version} */\n`;
const $ = gulpLoadPlugins();

// https://github.com/superwolff/metalsmith-layouts/issues/43
nunjucks.configure(['./src/templates', './dist/svg'], {
  watch: false,
  noCache: true,
});

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
gulp.task('docs:serve', ['browser-sync'], () => {
  gulp.watch(paths.icons.src, ['icons']);
  gulp.watch(paths.styles.src, ['dist:styles']);
  gulp.watch([paths.scripts.src], ['docs:scripts', reload]);
  gulp.watch(paths.styles.docAll, ['docs:styles']);
  gulp.watch([paths.metalsmith.pages, paths.metalsmith.templates], ['docs:site']);
});


// -------------------------
// Docs Site
// -------------------------

/**
 * Get top-level directories
 * @param  {array} srcPath
 * @return array
 */
function getDirectories(srcPath) {
  return fs.readdirSync(srcPath)
    .filter(file => fs.statSync(utilPath.join(srcPath, file)).isDirectory());
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

// Since we inline the built icon sprite within the generated pages,
// we make sure we've completed this task beforehand
gulp.task('docs:site', ['icons'], () =>
  metalsmith(process.cwd())
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
  }))
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
// Style Linting
// -------------------------
gulp.task('styles:lint', () =>
  gulp.src('./src/less/**/*.less')
    .pipe($.lesshint())
    .pipe($.lesshint.reporter()),
);

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
