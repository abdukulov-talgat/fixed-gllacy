import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import svgSprite from 'gulp-svg-sprite';
import replace from 'gulp-replace';


function sprite() {
    return gulp.src(app.paths.src.sprite)
        .pipe(plumber(
            notify.onError({
                title: 'SVG SPRITE',
                message: 'Error: <%= error.message %>'
            })))
        //☹️ but its useless
        // .pipe(replace(/fill\s*=\s*["']?[#a-f0-9no]*["']?/gi, ''))
        // .pipe(replace(/stroke\s*=\s*["']?[#a-f0-9no]*["']?/gi, ''))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    example: app.isDev,
                },
                // css: {example: true}, // Create a «css» sprite
                // view: { example: true }, // Create a «view» sprite
                // defs: { example: true }, // Create a «defs» sprite
                // symbol: { example: true }, // Create a «symbol» sprite
                // stack: { example: true } // Create a «stack» sprite
            }
        }))
        .pipe(gulp.dest(app.paths.build.images))
        .pipe(app.browserSync.stream());
}




export default sprite;
