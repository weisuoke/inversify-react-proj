const path = require('path');
const gulp = require('gulp');
const babel = require("gulp-babel");
const watch = require("gulp-watch");
const rollup = require("gulp-rollup");
const ts = require('gulp-typescript');
const replace = require("rollup-plugin-replace");
const eslint = require('gulp-eslint');
const tscConfig = require('./src/server/tsconfig.json').compilerOptions;

const entry = "./src/server/**/*.ts";

//开发环境
function builddev() {
  return watch(entry, {
      ignoreInitial: false
  }, function () {
    gulp.src(entry)
      .pipe(ts(tscConfig))
      .pipe(gulp.dest('dist'))
  });
}

//上线环境
function buildprod() {
  return gulp.src([entry])
    .pipe(ts(tscConfig))
    .pipe(gulp.dest('dist'));
}

//对代码进行检查的环境
function buildlint() {
  return gulp.src(entry)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

//清洗环境
function buildconfig() {
  return gulp.src('./src/server/config/index.js')
    .pipe(babel(
      {
        babelrc: false,
        "plugins": [
          ["@babel/plugin-proposal-decorators",{
              "legacy": true
          }],
          "transform-es2015-modules-commonjs"
        ]
      }
    ))
    .pipe(rollup({
        output: {
          format: "cjs"
        },
        plugins: [
          replace({
            "process.env.NODE_ENV": JSON.stringify('production')
          })
        ],
        input: "./src/server/config/index.js"
    }))
    .pipe(gulp.dest('./dist/config'));
}

let build = gulp.series(builddev);
if (process.env.NODE_ENV == "production") {
    build = gulp.series(buildprod, buildconfig);
}
if (process.env.NODE_ENV == "lint") {
    build = gulp.series(buildlint);
}
gulp.task("default", build);