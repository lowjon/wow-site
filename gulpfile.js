var gulp = require('gulp')
,   concat = require('gulp-concat')
,   sass = require('gulp-sass')
,   sourcemaps = require('gulp-sourcemaps')
,   print = require('gulp-print')
,   babel = require('gulp-babel')


var Cachebuster = require('gulp-cachebust')
var cachebust = new Cachebuster()

gulp.task('hello', function () {
  console.log("Hello everyone!");
})

gulp.task('build-css', function () {
  // gulp puts the reset files first then the rest of the files
    return gulp.src(['./src/styles/reset.css','./src/**/*.scss'])
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(cachebust.resources())
      .pipe(concat('styles.css'))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./dist'))
})

gulp.task('build-js', [], function() {
   return gulp.src(['./wowApp.js', './src/**/*.js'])
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      //uncomment this ^ to export for production... not very useful for development/ debugging
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
})

gulp.task('build', ['build-css', 'build-js'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html','./src/**/*.html', './src/**/*.scss', './src/**/*.js'], ['build']);
});
