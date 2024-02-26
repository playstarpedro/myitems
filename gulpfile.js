const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// compila o sass em css
function compSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
};

// executa as funções padrões
exports.default = gulp.parallel(compSass);
//executa o watch
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compSass));
};