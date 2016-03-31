// Variables
var browser_sync      = require('browser-sync'),
    del               = require('del'),
    force_build       = true,
    gulp              = require('gulp'),
    gulp_autoprefixer = require('gulp-autoprefixer'),
    gulp_changed      = require('gulp-changed');
    gulp_concat       = require('gulp-concat'),
    gulp_cssnano      = require('gulp-cssnano'),
    gulp_duration     = require('gulp-duration'),
    gulp_ghpages      = require('gulp-gh-pages'),
    gulp_imagemin     = require('gulp-imagemin'),
    gulp_less         = require('gulp-less'),
    gulp_svg_sprite   = require('gulp-svg-sprite'),
    gulp_uglify       = require('gulp-uglify');
    Metalsmith        = require('metalsmith'),
    ms_changed        = require('metalsmith-changed'),
    ms_collections    = require('metalsmith-collections'),
    ms_in_place       = require('metalsmith-in-place'),
    ms_layouts        = require('metalsmith-layouts'),
    ms_move_up        = require('metalsmith-move-up'),
    ms_rootpath       = require('metalsmith-rootpath'),
    nunjucks          = require('nunjucks'),
    reload            = browser_sync.reload;


// Path Variables
var paths =  {
  'js': {
    'src': 'js/*.js',
    'dist': 'dist/js/',
    'build': 'build/js/'
  },
  'styles': {
    'src': 'less/**/*.less',
    'dist': 'dist/css/'
  },
  'svg': {
    'src': 'svg/*.svg',
    'dist': 'dist/svg/',
    'build': 'build/svg/'
  },
  'styles_docs': {
    'src': 'less/**/*.less',
    'build': 'build/css/'
  },
};


// Configure Nunjucks
nunjucks.configure('templates/', {watch: false});


// -------------------------------------------------
// --------------------- TASKS ---------------------
// -------------------------------------------------


// Browser-Sync
gulp.task('browser-sync', function() {
  browser_sync.init({
    server: {
      baseDir: "./build"
    }
  });
});


// Clean
gulp.task('clean', function() {
  return del([
    './build/**/*',
    './dist/**/*'
  ]);
});


// Javascript
gulp.task('js', function() {
  return gulp.src([
    'node_modules/boomsvgloader/dist/js/boomsvgloader.min.js',
    paths.js.src
    ])
    .pipe(gulp_concat('rhinostyle-docs.js'))
    .pipe(gulp_uglify())
    .pipe(gulp.dest(paths.js.build)) // build docs
    .pipe(gulp_duration('building js'))
    .pipe(reload({stream:true}));
});


// Metalsmith
gulp.task('metalsmith', function() {
  return Metalsmith(__dirname)
  .source('src')
  .clean(false)
  .use(ms_changed({
    force: force_build
  }))
  .use(ms_in_place({
    engine: 'nunjucks'
  }))
  .use(ms_move_up('pages/**/*'))
  .use(ms_rootpath())
  .use(ms_layouts({
    engine: 'nunjucks',
    directory: 'templates',
    default: 'default.html'
  }))

  .destination('build')

  .build(function(err) {
    if (err) {
      throw err;
    }
    else {
      browser_sync.reload();
    }
  });
});


// Styles for Distribution
gulp.task('styles', function() {
  return gulp.src(['less/rhinostyle.less'])
    .pipe(gulp_less({ compress: true }))
    .pipe(gulp_autoprefixer({ browsers: ['last 2 versions','ie 10'], cascade: false }))
    .pipe(gulp_cssnano())
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(gulp_duration('building styles'))
    .pipe(reload({stream:true}));
});


// Styles for Documentation
gulp.task('styles_docs', function() {
  return gulp.src(['less/rhinostyle-docs.less'])
    .pipe(gulp_less({ compress: false }))
    .pipe(gulp_autoprefixer({ browsers: ['last 2 versions','ie 10'], cascade: false }))
    .pipe(gulp.dest(paths.styles_docs.build))
    .pipe(gulp_duration('building styles'))
    .pipe(reload({stream:true}));
});


// SVG Icons
gulp.task('svgicons', function () {
  return gulp.src(paths.svg.src)
    .pipe(gulp_imagemin())
    .pipe(gulp.dest(paths.svg.dist))
    .pipe(gulp.dest(paths.svg.build))
    .pipe(gulp_svg_sprite({
      'shape': {
        'id': {
          'generator': 'icon-'
        }
      },
      'mode': {
        'symbol': {
          'dest': '',
          'example': true,
          'sprite': 'sprite.svg'
        }
      },
      'svg': {
        'xmlDeclaration': false,
        'doctypeDeclaration': false,
        'dimensionAttributes': false
      }
    }))
    .pipe(gulp.dest(paths.svg.dist)) // distribution
    .pipe(gulp.dest(paths.svg.build)) // build docs
    .pipe(gulp_duration('building svg icons'))
    .pipe(reload({stream:true}));
});


// Server
gulp.task('server', ['browser-sync'], function() {
  nunjucks.configure('templates/', {watch: true});
  gulp.watch(paths.js.src, ['js']);
  gulp.watch(paths.styles.src, ['styles']);
  gulp.watch(paths.styles_docs.src, ['styles_docs']);
  gulp.watch(paths.svg.src, ['svgicons']);
  gulp.watch(['src/**/*', 'templates/**/*'], ['metalsmith']).on('change', function() {
    force_build = true;
  });
});

// Website
gulp.task('website', function () {
  return gulp.src('./build/**/*')
    .pipe(gulp_ghpages());
});


// Default
gulp.task('default', ['metalsmith', 'js', 'styles', 'svgicons', 'styles_docs']);



