var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('scss-compile', function() {
    return gulp.src('app/scss/home.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({
            stream: true
    }));
})


gulp.task('watch', ['browserSync'], function(){
     gulp.watch('app/scss/*.scss', ['scss-compile']);
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app',
      proxy: "http://localhost:3000/app"
    },
  })
})