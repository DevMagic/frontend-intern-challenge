const gulp = require('gulp')
const babel = require('gulp-babel')
const unglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const jsonminify = require('gulp-jsonminify')



function appHTML(){
   return gulp.src('src/index.html').pipe(htmlmin({collapseWhitespace: true})).pipe(gulp.dest('build'))
}

function appCSS(){
    return gulp.src('src/styles/index.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(concat('index.css'))
    .pipe(gulp.dest('build/styles'))
}
function appJSON(){
    return gulp.src('src/urls.json').pipe(jsonminify()).pipe(gulp.dest('build'))
}

function appJS(){
    return gulp.src('src/index.js').pipe(babel({presets: ['ENV']}))
    .pipe(unglify())
    .pipe(concat('index.js'))
    .pipe(gulp.dest('build'))
}
function appIMG(){
    return gulp.src('src/assets/*.*').pipe(gulp.dest('build/assets'))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJSON', appJSON)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML, appCSS, appJSON ,appJS, appIMG, 
}