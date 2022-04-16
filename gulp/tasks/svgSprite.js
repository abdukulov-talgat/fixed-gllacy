import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import svgSprite from 'gulp-svg-sprite';



function sprite() {
    return gulp.src(app.paths.src.sprite)
        .pipe(plumber(
            notify.onError({
                title: 'SVG SPRITE',
                message: 'Error: <%= error.message %>'
            })))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    example: app.isDev,
                }
            }
        }))
        .pipe(gulp.dest(app.paths.build.images));
}




export default sprite;
