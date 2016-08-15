'use strict';
require('babel-core/register');

var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    watch   = require('gulp-watch'),
    babel   = require("gulp-babel"),
    Cache   = require('gulp-file-cache'),
    exec    = require('child_process').exec,
    path    = require('../paths'),
    cache   = new Cache(),
    child;

gulp.task('serverCompile', function () {
    gutil.log('.....Compiling Server side files');
    return gulp
        .src(path.server.files) // your ES2015 code
        .pipe(babel()) // compile new ones
        .pipe(gulp.dest(path.server.destination)); // write them
});

gulp.task('startServer', ['serverCompile'],  function () {
    gutil.log('.....Launching Server');

    child = exec('node ' + path.server.root);
    child.stdout.on('data', function(data) {
        gutil.log(data);
    });
    child.stderr.on('data', function(data) {
        gutil.log(data);
    });
    child.on('close', function(code) {
        gutil.log('Killing the server: ' + code);
    });
});

gulp.task('stopServer', function() {
    gutil.log('.....Stopping Server');
    return exec('kill ' + child.pid);
});
