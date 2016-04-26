export const paths = {
  animations: {
    src:   './src/animation/*.svg',
    dist:  './dist/animation/',
    build: './build/animation/'
  },
  metalsmith: {
    pages:     './src/pages/**/*',
    templates: './src/templates/**/*'
  },
  scripts: {
    docSrc: './src/scripts/docs/*.js',
    dist:   './dist/scripts/',
    build:  './build/scripts/'
  },
  styles: {
    src:    './src/less/rhinostyle.less',
    docSrc: './src/less/rhinostyle-docs.less',
    dist:   './dist/css/',
    build:  './build/css/'
  },
  icons: {
    src:   './src/svg/*.svg',
    dist:  './dist/svg/',
    build: './build/svg/'
  }
};
