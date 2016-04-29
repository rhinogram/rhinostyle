export const paths = {
  animations: {
    src:   './src/animation/*.svg',
    dist:  './dist/animation/',
    build: './build/animation/'
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
    docAll: './src/less/',
    dist:   './dist/css/',
    build:  './build/css/'
  },
  icons: {
    src:   './src/svg/*.svg',
    dist:  './dist/svg/',
    build: './build/svg/'
  }
};
