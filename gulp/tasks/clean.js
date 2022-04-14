import del from 'del';
import paths from '../config/paths.js';

function clean() {
    return del(paths.cleanFolder);
}


export default clean;
