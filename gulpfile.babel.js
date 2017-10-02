import gulp from 'gulp';

//
// Import tasks
//

import { animationFlag, animationLogin, animationSecure, animationTime } from './config/animations';
import audio from './config/audio';
import icons from './config/icons';
import clean from './config/clean';
import deploy from './config/deploy';
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
gulp.task('docs:deploy', deploy);
gulp.task('dist:scripts', ['copy'], distScripts);
gulp.task('dist:styles', distStyles);
gulp.task('docs:scripts', ['copy'], docsScripts);
gulp.task('docs:site', ['styles:lint', 'icons'], pages);
gulp.task('docs:styles', ['styles:lint'], docsStyles);
gulp.task('icons', icons);
gulp.task('media', media);
gulp.task('server', ['watch'], server);
gulp.task('styles:lint', linter);
gulp.task('watch', watch);

//
// Bundled tasks
//

gulp.task('animations', ['animation:flag', 'animation:login', 'animation:secure', 'animation:time']);
gulp.task('default', ['audio', 'icons', 'dist:scripts', 'dist:styles', 'docs:scripts', 'docs:styles', 'docs:site', 'media']);
gulp.task('dist', ['audio', 'icons', 'dist:scripts', 'dist:styles', 'media']);
gulp.task('docs', ['icons', 'docs:scripts', 'docs:styles', 'docs:site', 'media']);
gulp.task('styles', ['docs:styles', 'dist:styles', 'styles:lint']);
gulp.task('website', ['docs:deploy']);
