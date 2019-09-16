import browserSync from 'browser-sync';

/**
 * Start BrowserSync instanse
 * @return {void}
 */
export default function server() {
  console.log('HEREEEREREE');
  browserSync.init({
    server: {
      baseDir: './docs',
    },
  });
}
