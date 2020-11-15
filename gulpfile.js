const { watch, parallel, series, task, src, dest } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();

function browserSyncTask() {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
    online: false,
    notify: false,
  });
}

function scripts() {
  return src(["src/part1.js", "src/part2.js"])
    .pipe(concat("app.js"))
    .pipe(uglify())
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}

function startWatch() {
  watch("src/*", scripts);
}

exports.browserSyncTask = browserSyncTask;
exports.scripts = scripts;
exports.default = series(scripts, parallel(startWatch, browserSyncTask));
