var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var gulpLoadPlugins = require('gulp-load-plugins');
var $               = gulpLoadPlugins();

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: '.'
    },
    notify: false
  });
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('less', function() {
  gulp.src('src/less/style.less')
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .on('error', handleError)
    .pipe($.sourcemaps.write())
    .pipe($.autoprefixer())
    .pipe($.minifyCss({ keepSpecialComments: false }))
    .pipe(gulp.dest('build'));
});

gulp.task('build', ['less'], function() {});

gulp.task('serve', ['build'], function() {
  browserSync.reload();
});

gulp.task('watch', function() {
  gulp.watch(['src/less/**/*.less', '*.html'], ['serve']);
});

gulp.task('default', ['browser-sync', 'serve', 'watch']);
