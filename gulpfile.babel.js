'use strict';

import gulp         from 'gulp';
import imagemin     from 'gulp-imagemin';
import svgSprite    from 'gulp-svg-sprite';
import duration     from 'gulp-duration';
import less         from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import minify       from 'gulp-cssnano';
import concat       from 'gulp-concat';
import uglify       from 'gulp-uglify';
import ghPages      from 'gulp-gh-pages';
import gutil        from 'gulp-util';

import webpack      from 'webpack';
import browserSync  from 'browser-sync';
import del          from 'del';

import Metalsmith   from 'metalsmith';
import nunjucks     from 'nunjucks';
import changed      from 'metalsmith-changed';
import inPlace      from 'metalsmith-in-place';
import rootpath     from 'metalsmith-rootpath';
import layouts      from 'metalsmith-layouts';

import { paths }  from './config/gulpConfig';
import distConfig from './config/webpack.dist.config.js';
import docsConfig from './config/webpack.docs.config.js';

const reload = browserSync.reload;

let force_build = true;

nunjucks.configure('./src/templates', { watch: false });

gulp.task('default', ['animations', 'icons', 'dist:scripts', 'dist:styles', 'docs:scripts', 'docs:styles', 'docs:site']);
gulp.task('dist', ['animations', 'icons', 'dist:scripts', 'dist:styles']);
gulp.task('docs', ['animations', 'icons', 'docs:scripts', 'docs:styles', 'docs:site']);
gulp.task('server', ['docs:serve']);

gulp.task('animations', () => {
  const path = paths.animations;

  return gulp.src(path.src)
    .pipe(imagemin())
    .pipe(gulp.dest(path.dist))
    .pipe(gulp.dest(path.build))
    .pipe(svgSprite({
      shape: {
        id: {
          generator: 'icon-'
        }
      },
      mode: {
        css: {
          dest: '',
          example: true,
          bust: false,
          sprite: 'sprite.svg',
          layout: 'horizontal'
        }
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        dimensionAttributes: false
      }
    }))
    .pipe(gulp.dest(path.dist))
    .pipe(gulp.dest(path.build))
    .pipe(duration('Built Animations'))
    .pipe(reload({ stream: true }));
});

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });
});

gulp.task('clean', () => {
  return del([
    './build/**/*',
    './dist/**/*'
  ]);
});

gulp.task('dist:scripts', (callback) => {
  webpack(distConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    stats = stats.toString();

    // Remove dropping unused statements and individual modules built
    const tester = /Dropping unused(.*?)\n|\n(.*?)\[built\]/g;
    stats = stats.replace(tester, '');
    gutil.log('[webpack]', stats);
    gutil.log('[webpack]', new Date());

    callback();
  });
});

gulp.task('dist:styles', () => {
  const path = paths.styles;

  return gulp.src(path.src)
    .pipe(less({ compress: true }))
    .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie 10'], cascade: false }))
    .pipe(minify())
    .pipe(gulp.dest(path.dist))
    .pipe(duration('Built Dist Styles'))
    .pipe(reload({ stream: true }));
});

gulp.task('dosc:deploy', function () {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task('docs:react', () => {
  docsConfig.devtool = 'source-map';
  docsConfig.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  );

  let compiler = webpack(docsConfig);

  compiler.watch(200, (err, stats) => {
    if(err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({}));
    gutil.log('[webpack]', new Date());
    gutil.log('THIS IS FOR DEVELOPMENT ONLY.');
    gutil.log('PLEASE BUILD NORMALLY BEFORE COMMITTING.');

    browserSync.reload();
  });
});

gulp.task('docs:scripts', ['docs:react'], () => {
  const path = paths.scripts;

  return gulp.src([
    './node_modules/boomsvgloader/dist/js/boomsvgloader.js',
    path.docSrc
    ])
    .pipe(concat('rhinostyle-docs.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.build))
    .pipe(duration('Built Doc Scripts'))
    .pipe(reload({ stream: true }));
});

gulp.task('docs:serve', ['browser-sync', 'docs'], () => {
  nunjucks.configure('./src/templates', { watch: true });

  gulp.watch(paths.scripts.build, ['docs:scripts']);
  gulp.watch(paths.styles.src, ['dist:styles']);
  gulp.watch(paths.styles.docSrc, ['docs:styles']);
  gulp.watch(paths.animations.src, ['animations']);
  gulp.watch(paths.icons.src, ['icons']);
  gulp.watch([paths.metalsmith.pages, paths.metalsmith.templates], ['docs:site']).on('change', () => {
    force_build = true;
  });
});

gulp.task('docs:site', () => {
  const path = paths.metalsmith;

  return Metalsmith(__dirname)
  .source('./src/pages')
  .clean(false)
  .use(changed({ force: force_build }))
  .use(inPlace({ engine: 'nunjucks' }))
  .use(rootpath())
  .use(layouts({
    engine:    'nunjucks',
    directory: './src/templates',
    default:   'default.html'
  }))
  .destination('./build')
  .build((err) => {
    if (err) {
      throw err;
    } else {
      browserSync.reload();
    }
  });
});

gulp.task('docs:styles', () => {
  const path = paths.styles;

  return gulp.src(path.docSrc)
    .pipe(less({ compress: false }))
    .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie 10'], cascade: false }))
    .pipe(gulp.dest(path.build))
    .pipe(duration('Built Doc Styles'))
    .pipe(reload({ stream: true }));
});

gulp.task('icons', () => {
  const path = paths.icons;

  return gulp.src(path.src)
    .pipe(imagemin())
    .pipe(gulp.dest(path.dist))
    .pipe(gulp.dest(path.build))
    .pipe(svgSprite({
      shape: {
        id: {
          generator: 'icon-'
        }
      },
      mode: {
        symbol: {
          dest: '',
          example: true,
          sprite: 'sprite.svg'
        }
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        dimensionAttributes: false
      }
    }))
    .pipe(gulp.dest(path.dist))
    .pipe(gulp.dest(path.build))
    .pipe(duration('Built Icons'))
    .pipe(reload({ stream: true }));
});
