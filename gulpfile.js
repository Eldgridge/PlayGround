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


var lib    = require('bower-files')();


var bower_files    = require('bower-files')();
gulp.task('bower', function () {
  gulp.src(lib.ext(['js', 'css']).files)
    .pipe(gulp.dest('app/lib'));
});
