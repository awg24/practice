var gulp = require('gulp'),
    browserify = require("gulp-browserify");

gulp.task("scripts", function(){
    gulp.src(["public/main.js"])
        .pipe(browserify({
            debug: true,
            transform:["reactify"]
        }))
        .pipe(gulp.dest("./"));
});

gulp.task("default", ["scripts"]);
gulp.task('something', ['scripts']);