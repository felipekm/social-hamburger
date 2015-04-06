'use strict';

var gulp = require( 'gulp' );
var connect = require( 'gulp-connect' );
var files = [ 'index.html', 'css/style.css', 'js/index.js' ];

gulp.task( 'files', function() {
  gulp.src( files ).pipe( connect.reload() );
});

gulp.task( 'watch', function() {
  gulp.watch( files, [ 'files' ]);
});

gulp.task( 'connect', function() {
  connect.server({ livereload: true, port: 8000 });
});

gulp.task( 'default', [ 'connect', 'watch' ]);
