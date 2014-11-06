var gulp = require("gulp");
var less = require("gulp-less");
var path = require("path");

var lessGlob = "less/*.less";

gulp.task("less", function () {
    gulp.src(lessGlob)
        .pipe(less({
            paths: [ path.join(__dirname, "less", "includes") ]
        }))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("watch", function () {
    var watcher = gulp.watch(lessGlob, ["less"]);
    watcher.on("change", function(event) {
        console.log("File " + event.path + " was " + event.type + ", running tasks...");
    });
});
