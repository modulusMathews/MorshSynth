'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');


gulp.task('default', function(){
    browserify('src/root.js')
        .transform(babelify, {presets: ['es2015', 'react']})
        .bundle()
        .pipe(fs.createWriteStream('bundle.js'));
});

gulp.task('production', function(){
    browserify('src/root.js')
        .transform(babelify, { presets: ['es2015', 'react']} )
        .transform({global: true}, 'uglifyify')
        .bundle()
        .pipe(fs.createWriteStream('dist/morsh.js'));
});