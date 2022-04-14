import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import paths from '../config/paths.js';




function html() {
    return gulp.src(paths.src.html)
        .pipe(plumber(
            notify.onError({
                title: 'HTML',
                message: 'Error: <%= error.message%>'
            })))
        .pipe(fileinclude())
        .pipe(replace(/@img\//g, 'img/'))
        .pipe(gulp.dest(paths.build.html))
        .pipe(app.browserSync.stream());
}





export default html;
