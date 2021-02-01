const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos(){
    return gulp.src('build').pipe(webserver({
        port: 8080, 
        open: true, 
        livereload: true
    }))
}

function servidor(cb){
    watch('src/*.html', () => gulp.series('appHTML')())
    watch('src/assets/*.**', () => gulp.series('appIMG')())
    watch('src/styles/*.**', () => gulp.series('appCSS')())
    watch('src/*.json', () => gulp.series('appJSON')())
    watch('src/*.js', () => gulp.series('appJS')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}