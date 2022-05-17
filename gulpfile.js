import gulp from 'gulp';
import ts from 'gulp-typescript';
import concat from 'gulp-concat';
// import browserify from 'browserify';
// import source from 'vinyl-source-stream';
// import tsify from 'tsify';

const tsProject = ts.createProject('tsconfig.json');

gulp.task('merge', () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(concat('common.js'))
    .pipe(gulp.dest('dist'));
});

// gulp.task('start', gulp.series(gulp.parallel('merge'), () => {
//   return browserify({
//       basedir: './',
//       // debug: true,
//       // entries: ['src/main.ts'],
//       cache: {},
//       packageCache: {}
//     })
//     .plugin(tsify)
//     .bundle()
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest('dist'));
// }));