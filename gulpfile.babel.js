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
gulp.task('watch', watch);
gulp.task('media', media);
gulp.task('docs:scripts', gulp.series('copy', docsScripts, done => done()));
gulp.task('docs:styles', gulp.series('styles:lint', docsStyles, done => done()));
gulp.task('dist:scripts', gulp.series('copy', distScripts, done => done()));
gulp.task('serve', gulp.series('watch', server, done => done()));

//
// Bundled tasks
//

gulp.task('animations', gulp.series('animation:flag', 'animation:login', 'animation:secure', 'animation:time', done => done()));
gulp.task('default', gulp.series('audio', 'icons', 'dist:scripts', 'dist:styles', 'docs:scripts', 'docs:styles', 'docs:site', 'media', done => done()));
gulp.task('dist', gulp.series('audio', 'icons', 'dist:scripts', 'dist:styles', 'media', done => done()));
gulp.task('docs', gulp.series('icons', 'docs:scripts', 'docs:styles', 'docs:site', 'media', done => done()));
gulp.task('styles', gulp.series('docs:styles', 'dist:styles', 'styles:lint', done => done()));
gulp.task('build', gulp.series('styles', 'docs', 'dist', 'default', 'animations', done => done()));
