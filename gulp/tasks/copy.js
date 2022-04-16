import gulp from 'gulp';


function copy() {
    return gulp.src(app.paths.src.files)
        .pipe(gulp.dest(app.paths.build.files));
}




export default copy;
