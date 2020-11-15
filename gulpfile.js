const { parallel, series, task, src, dest } = require("gulp");
const concat = require("gulp-concat");

const browserSync = require("browser-sync").create();

function browserSyncTask() {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
    online: false,
    notify: false,
  });
}

function scripts() {
  return src(["src/part1.js", "src/part2.js"])
    .pipe(concat("app.js"))
    .pipe(dest("src"));
}

exports.browserSyncTask = browserSyncTask;
exports.scripts = scripts;
