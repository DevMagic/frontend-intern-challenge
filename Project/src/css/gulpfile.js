const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')

function transformCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) 
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'))
}

exports.default = series(transformCSS)

