var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass')

function style () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

function sassWatch () {
    gulp.watch('./sass/**/*.scss', style)
}

function serve () {
    browserSync.init({
        server: "./"
    })

    gulp.watch('./sass/**/*.scss', style)
    gulp.watch("*.html").on('change', browserSync.reload)
}

exports.style = style
exports.sasswatch = sassWatch
exports.serve = serve
