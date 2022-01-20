'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';

gulp.task('merge', () => {
  return gulp.src('src/*/*.js')
    .pipe(concat('common.js'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('watching', () => {
  gulp.watch('src/*/*.js', gulp.series('merge'));
});

gulp.task('server', gulp.series(gulp.parallel('merge'), () => {
  return browserSync.init({
  	server: {
    	baseDir: './'
    }
  });
}));

gulp.task('start', gulp.series(gulp.parallel('server', 'watching')));
