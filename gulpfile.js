var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

// append js files to your liking. they will all end up concatenated
var jsPaths = [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/what-input/what-input.js',
    'bower_components/foundation-sites/dist/foundation.js'
];

var kirbyJSDir = 'kirby/assets/js';

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('kirby/assets/css'));
});

gulp.task('js-fef', function(){
    return gulp.src(jsPaths)
        .pipe($.concat('vendor.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(kirbyJSDir));
});

gulp.task('copyjs', function () {
  return gulp
      .src('js/**/*.js')
      .pipe(gulp.dest(kirbyJSDir));
});

gulp.task('default', ['js-fef', 'copyjs',  'sass'], function() {
    gulp.watch(['scss/**/*.scss'], ['sass']);
    gulp.watch(['js/**/*.js'], ['copyjs']);
});
