export const paths = {
  animation_flag: {
    src:   './src/animation/flag/*.svg',
    dist:  './dist/animation/flag/',
    build: './build/animation/flag/'
  },
  metalsmith: {
    pages:     './src/pages/**/*.html',
    templates: './src/templates/*.html'
  },
  scripts: {
    docSrc: './src/scripts/docs/*.js',
    cmpSrc: './src/scripts/docs/*.jsx',
    dist:   './dist/scripts/',
    build:  './build/scripts/'
  },
  styles: {
    src:    './src/less/rhinostyle.less',
    docSrc: './src/less/rhinostyle-docs.less',
    docAll: './src/less/*.less',
    dist:   './dist/css/',
    build:  './build/css/'
  },
  icons: {
    src:   './src/svg/*.svg',
    dist:  './dist/svg/',
    build: './build/svg/'
  }
};
