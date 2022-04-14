import gulp from 'gulp';
import paths from '../config/paths.js';


function server(cb) {
    app.browserSync.init({
        server: {
            baseDir: `${paths.buildFolder}`,
            port: 3000,
        },
        notify: false,
        // open: false
    });

    cb();
}




export default server;
