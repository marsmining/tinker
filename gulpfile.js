var gulp = require("gulp");
var less = require("gulp-less");
var path = require("path");

gulp.task("less", function () {
    gulp.src("less/*.less")
        .pipe(less({
            paths: [ path.join(__dirname, "less", "includes") ]
        }))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("watch", function () {
    var watcher = gulp.watch("less/**/*.less", ["less"]);
    watcher.on("change", function(event) {
        console.log("File " + event.path + " was " + event.type + ", running tasks...");
    });
});

gulp.task("default", ["less"]);
