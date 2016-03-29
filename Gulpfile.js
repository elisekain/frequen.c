var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

gulp.task('default', ['build-dev', 'webpack-dev-server','sass', 'sass:watch']);

gulp.task('build-dev', ['webpack:build-dev'], function () {
    gulp.watch(['app/**/*'], ['webpack:build-dev']);
});

var myDevConfig = webpackConfig;
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

var devCompiler = webpack(myDevConfig);

gulp.task('webpack:build-dev', function (done) {
    devCompiler.run(function (err, stats) {
        if(err) throw new gutil.PluginError('webpack:build-dev', err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        done();
    });
});

gulp.task("webpack-dev-server", function (done) {
    var myConfig = webpackConfig;
    myConfig.devtool = "eval";
    myConfig.debug = true;

    new WebpackDevServer(webpack(myConfig), {
        contentBase: 'dist/',
        stats: {
            colors: true
        }
    }).listen(8080, 'localhost', function (err) {
        if (err) throw new gutil.PluginError('webpack-dev-server', err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});

gulp.task('sass', function (done) {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
    done();
});

gulp.task('sass:watch', function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
});
