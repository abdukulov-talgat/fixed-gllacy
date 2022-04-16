import gulp from 'gulp';


function server(cb) {
    app.browserSync.init({
        server: {
            baseDir: `${app.paths.buildFolder}`,
            port: 3000,
        },
        notify: false,
        // open: false
    });

    cb();
}




export default server;
