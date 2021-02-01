const {series, parallel} = require('gulp')
const gulp = require('gulp')

const {appHTML, appCSS,appJSON, appJS, appIMG} = require('./gulpTasks/app')
const {monitorarArquivos, servidor} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJSON, appJS, appIMG),
    ),
    servidor,
    monitorarArquivos
)