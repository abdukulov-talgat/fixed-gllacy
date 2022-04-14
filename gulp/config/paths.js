import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

const paths = {
    srcFolder: srcFolder,
    buildFolder: buildFolder,
    cleanFolder: buildFolder,
    rootFolder: rootFolder,
    src: {
        files: `${srcFolder}/files/**/*.*`,
        fonts: `${srcFolder}/fonts/`,
        html: `${srcFolder}/html/*.html`, // Все страницы должны лежать в корне папки html
        style: `${srcFolder}/scss/style.scss`,
    },
    build: {
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
        html: `${buildFolder}/`,
        style: `${buildFolder}/css/`,
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/html/**/*.html`,
        style: `${srcFolder}/scss/**/*.scss`,
    }
};




export default paths;
