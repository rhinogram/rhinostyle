const paths = {
  animation_flag: {
    src: './src/animation/flag/*.svg',
    dist: './dist/animation/flag/',
    build: './docs/animation/flag/',
  },
  animation_login: {
    src: './src/animation/login/*.svg',
    dist: './dist/animation/login/',
    build: './docs/animation/login/',
  },
  animation_secure: {
    src: './src/animation/secure/*.svg',
    dist: './dist/animation/secure/',
    build: './docs/animation/secure/',
  },
  animation_time: {
    src: './src/animation/time/*.svg',
    dist: './dist/animation/time/',
    build: './docs/animation/time/',
  },
  audio: {
    src: './src/audio/*.mp3',
    dist: './dist/audio/',
    build: './docs/audio/',
  },
  media: {
    src: './src/media/*',
    dist: './dist/media/',
    build: './docs/media/',
  },
  metalsmith: {
    pages: './src/pages/**/*.html',
    templates: './src/templates/*.html',
  },
  scripts: {
    docEntry: './src/scripts/docs/entry.js',
    distEntry: './src/scripts/components/index.js',
    src: './src/scripts/**/*.{js,jsx,txt}',
    dist: './dist/scripts/',
    build: './docs/scripts/',
  },
  styles: {
    src: './src/less/rhinostyle-docs.less',
    docSrc: './src/less/rhinostyle-docs.less',
    docAll: './src/less/**/*.less',
    dist: './dist/css/',
    build: './docs/css/',
  },
  svg: {
    src: ['./src/svg/*.svg'],
    json: './src/svg',
  },
};

export default paths;
