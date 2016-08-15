'use strict';

var gulp    = require("gulp"),
    gutil   = require('gulp-util'),
    runseq  = require('run-sequence'),
    clean   = require('gulp-clean'),
    eslint  = require('gulp-eslint'),
    path    = require('./paths');

gulp.task('clean', function() {
    gutil.log('........ cleaning ' + path.destination + ' folder');
    return gulp.src( path.destination, {read: false})  // read:false prevents gulp from reading the contents and makes this task faster
        .pipe(clean());
});


gulp.task('lint', () => {
    gutil.log('... linting ');
    return gulp.src([path.testScripts, path.srcScripts])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint', 'clean'],  function() {
    gulp.run('startServer', 'clientCompile', 'serverTest', 'clientTest', 'css', 'html');
    gulp.watch(path.server.files, function() {
        gutil.log('*** Recompiling and restarting the server');
        runseq('stopServer', 'lint', 'serverTest', 'startServer');
    });

    gulp.watch(path.client.scripts, function() {
        gutil.log('*** Rebundling the client scripts');
        gulp.run('lint', 'clientCompile', 'clientTest');
    });

    gulp.watch(path.client.viewFiles, function() {
        gutil.log('*** Copying the new HTML...');
        gulp.run('html');
    });

    gulp.watch(path.srcStylesheets, function() {
        gutil.log('*** Compiling the new styles...');
        gulp.run('css');
    });

});

require('./server');
require('./client');
require('./test');
