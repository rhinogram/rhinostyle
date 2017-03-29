import browserSync from 'browser-sync';

/**
 * Start BrowserSync instanse
 * @return {void}
 */
export default function server() {
  browserSync.init({
    server: {
      baseDir: './build',
    },
    port: 3002,
  });
}
