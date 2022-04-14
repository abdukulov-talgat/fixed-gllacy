import gulp from 'gulp';
import browserSync from 'browser-sync';
import paths from './gulp/config/paths.js';
import clean from './gulp/tasks/clean.js';
import copy from './gulp/tasks/copy.js';
import fonts from './gulp/tasks/fonts.js';
import html from './gulp/tasks/html.js';
import style from './gulp/tasks/style.js';
import server from './gulp/tasks/server.js';




global.app = {
    browserSync: browserSync.create(),
    isDev: !process.argv.includes('--build'),
    isBuild: process.argv.includes('--build'),
};




function watch(cb) {
    gulp.watch(paths.watch.files, copy);
    gulp.watch(paths.watch.html, html);
    gulp.watch(paths.watch.style, style);

    cb();
}




const mainTasks = gulp.parallel(
    copy,
    fonts,
    html,
    style
);

const build = gulp.series(clean, mainTasks);
const serve = gulp.series(build, server, watch);



export { dev };
export default dev;
