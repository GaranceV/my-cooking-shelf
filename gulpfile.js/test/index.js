'use strict';

var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    path    = require('../paths'),
    mocha   = require('gulp-mocha');

gulp.task('serverTest', function() {
    gutil.log('........ Launching server tests');
    return gulp.src([path.server.test])
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('clientTest', function() {
    gutil.log('........ Launching client tests');
    return gulp.src([path.client.test])
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('test', ['clientTest', 'serverTest'], function() {
    gutil.log('........ Launching all tests');
});