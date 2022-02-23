const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');

function generateCSS(cb) {
    src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
    cb();
}

exports.css = generateCSS

function watchFiles(cb){
    watch('./sass/**/*.scss', generateCSS)
    watch('./js/script.js', minifyJs)
}

exports.watch = watchFiles

function minifyJs() {
    return src('./js/script.js', { allowEmpty: true})
    .pipe(minify({noSource: true}))
    .pipe(dest('./js'))
}

exports.minify = minifyJs