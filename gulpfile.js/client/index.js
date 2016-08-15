var gulp        = require('gulp'),
    browserify  = require('browserify'),
    babelify    = require('babelify'),
    gutil       = require('gulp-util'),
    source      = require('vinyl-source-stream'),
    sass       = require('gulp-sass'),
    postcss    = require('gulp-postcss'),
    autoprefix = require('autoprefixer'),
    path        = require('../paths');


gulp.task('html', function() {
    gutil.log('....... copying HTML to dist');
    return gulp.src(path.client.viewFiles)
        .pipe(gulp.dest(path.client.destination));
});

gulp.task('css', function() {
gutil.log('...... processing SASS');
return gulp.src(path.srcStylesheets)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefix({ browsers: ['last 2 versions', 'ie >=11'] }) ]))
    .pipe(gulp.dest(path.destinationStylesheets));
});

gulp.task('clientCompile', function () {
    gutil.log('......... Bundling the client scripts together')
    return browserify({entries: path.client.scripts + 'main.es6', extensions: ['.es6'], debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(path.client.destination));
});
