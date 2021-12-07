import gulp from 'gulp';

//
// Import tasks
//

import { animationFlag, animationLogin, animationSecure, animationTime } from './config/animations';
import audio from './config/audio';
import icons from './config/icons';
import clean from './config/clean';
import linter from './config/linter';
import media from './config/media';
import pages from './config/pages';
import { copyModernizr, distScripts, docsScripts } from './config/scripts';
import server from './config/server';
import { distStyles, docsStyles } from './config/styles';
import watch from './config/watch';

//
// Instantiate tasks
//

gulp.task('animation:flag', animationFlag);
gulp.task('animation:login', animationLogin);
gulp.task('animation:secure', animationSecure);
gulp.task('animation:time', animationTime);
gulp.task('audio', audio);
gulp.task('copy', copyModernizr);
gulp.task('clean', clean);
gulp.task('dist:styles', distStyles);
gulp.task('docs:site', pages);
gulp.task('styles:lint', linter);
gulp.task('icons', icons);
gulp.task('media', media);
gulp.task('watch', watch);

gulp.task('dist:scripts', gulp.parallel('copy', distScripts));
gulp.task('docs:scripts', gulp.parallel('copy', docsScripts));
gulp.task('docs:styles', gulp.parallel('styles:lint', docsStyles));
gulp.task('serve', gulp.parallel('watch', server));

//
// Bundled tasks
//

gulp.task('animations', gulp.parallel('animation:flag', 'animation:login', 'animation:secure', 'animation:time'));
gulp.task('default', gulp.parallel('audio', 'icons', 'dist:scripts', 'dist:styles', 'docs:scripts', 'docs:styles', 'docs:site', 'media'));
gulp.task('dist', gulp.parallel('audio', 'icons', 'dist:scripts', 'dist:styles', 'media'));
gulp.task('docs', gulp.parallel('icons', 'docs:scripts', 'docs:styles', 'docs:site', 'media'));
gulp.task('styles', gulp.parallel('docs:styles', 'dist:styles', 'styles:lint'));
gulp.task('build', gulp.parallel('styles', 'docs', 'dist', 'default', 'animations'));
