'use strict';

var src         = 'src/',
    dist        = 'dist/',
    test        = 'test/',
    client      = 'client/',
    server      = 'server/',
    styles      = 'styles/',
    serverName  = 'app',
    es6Files    = '**/*.es6',
    styleFiles    = '**/*.scss';

var path = {
    src: src,
    destination: dist,
    srcScripts: src + es6Files,
    testScripts: test + es6Files,
    srcStylesheets: src + client + styles + styleFiles,
    destinationStylesheets: dist + client + styles
};

path.server = {
    source: src + server,
    files: src + server + es6Files,
    destination: dist + server,
    root: dist + server + serverName + '.js',
    test: test + server + es6Files
}
path.client = {
    viewFiles: src + client + 'views/*.html',
    scripts: src + client + 'scripts/',
    destination: dist + client,
    test: test + client + es6Files
}
module.exports = path;