const { parallel, series, task } = require("gulp");

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

exports.default = browserSyncTask;
