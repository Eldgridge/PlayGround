var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function(){
  gulp.src('.')
    .pipe(webserver({
      host: '0.0.0.0',
      port: '8080',
      path: '/',
      fallback: 'app/index.html'
    }));
});

