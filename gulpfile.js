var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function(){
  gulp.src('.')
    .pipe(webserver({
      host: '0.0.0.0',
      port: '8080',
      path: 'app/',
      fallback: 'app/index.html'
    }));
});

var gulp   = require('gulp');

var lib    = require('bower-files')();
 
gulp.task('default', function () {
  gulp.src(lib.ext('js').files)
    .pipe(gulp.dest('public/js'));
});

