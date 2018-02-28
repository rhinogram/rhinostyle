const paths = {
  animation_flag: {
    src: './src/animation/flag/*.svg',
    dist: './dist/animation/flag/',
    build: './build/animation/flag/',
  },
  animation_login: {
    src: './src/animation/login/*.svg',
    dist: './dist/animation/login/',
    build: './build/animation/login/',
  },
  animation_secure: {
    src: './src/animation/secure/*.svg',
    dist: './dist/animation/secure/',
    build: './build/animation/secure/',
  },
  animation_time: {
    src: './src/animation/time/*.svg',
    dist: './dist/animation/time/',
    build: './build/animation/time/',
  },
  audio: {
    src: './src/audio/*.mp3',
    dist: './dist/audio/',
    build: './build/audio/',
  },
  media: {
    src: './src/media/*',
    dist: './dist/media/',
    build: './build/media/',
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
    build: './build/scripts/',
  },
  styles: {
    src: './src/less/rhinostyle.less',
    docSrc: './src/less/rhinostyle-docs.less',
    docAll: './src/less/**/*.less',
    dist: './dist/css/',
    build: './build/css/',
  },
  svg: {
    src: ['./src/svg/*.svg'],
    json: './src/svg',
  },
};

export default paths;
