import del from 'del';

/**
 * Deletes `dist` and `build` directories
 * @return {stream}
 */
export default function clean() {
  return del([
    './build/**/*',
    './dist/**/*',
  ]);
}
