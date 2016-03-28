var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('default', ['sass', 'sass:watch']);

gulp.task('sass', function (done) {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
    done();
})

gulp.task('sass:watch', function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
});
