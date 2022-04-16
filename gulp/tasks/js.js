import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import webpack from 'webpack-stream';



function js() {
    return gulp.src(app.paths.src.js)
        .pipe(plumber(
            notify.onError({
                title: 'SCSS',
                message: 'Error: <%= error.message %>'
            })))
        .pipe(webpack({
            mode: app.isDev ? 'development' : 'production',
            devtool: 'source-map',
            output: {
                filename: 'script.min.js',
            }
        }))
        .pipe(gulp.dest(app.paths.build.js))
        .pipe(app.browserSync.stream());
}



export default js;
