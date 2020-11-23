"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore")
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var concat = require("gulp-concat");
var babel = require('gulp-babel');

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("fonts-style", function () {
  return gulp.src("source/sass/settings/fonts-style.css")
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csso())
    .pipe(gulp.dest("build/css"))
});

gulp.task("library", function(){
  return gulp.src([
    'node_modules/swiper/swiper-bundle.min.js',
  ])
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('build/js'));
});

gulp.task("map", function(){
  return gulp.src([
    'node_modules/swiper/swiper-bundle.min.js.map',
  ])
  .pipe(gulp.dest('build/js'));
});

gulp.task('js', () =>
	gulp.src([
    'source/js/types.js',
    'source/js/utils.js',
    'source/js/slider.js',
    'source/js/step-three.js',
    'source/js/step-two.js',
    'source/js/step-one.js'
  ])
		.pipe(sourcemap.init())
		.pipe(babel({
			presets: ['@babel/preset-env']
    }))
		.pipe(concat('script.js'))
		.pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/js'))
    .pipe(server.stream())
);

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/js/*.js", gulp.series("js"));
  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/img/icons/*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("images", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))

    .pipe(gulp.dest("source/img"));

});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});

gulp.task("sprite", function () {
  return gulp.src("source/img/icons/*.svg")
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename("sprite_auto.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source//*.ico"
    ], {
      base: "source"
    })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("build", gulp.series("clean", "copy", "library", "map", "js","fonts-style", "css", "sprite", "html"));
gulp.task("start", gulp.series("build", "server"));
