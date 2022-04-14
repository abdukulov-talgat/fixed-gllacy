import gulp from 'gulp';
import paths from '../config/paths.js';


function copy() {
    return gulp.src(paths.src.files)
        .pipe(gulp.dest(paths.build.files));
}




export default copy;
