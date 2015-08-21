'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    del = require('del'),
    nodemon = require('gulp-nodemon'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    templateCache = require('gulp-angular-templatecache'),
    bower = require('bower'),
    wrap = require('gulp-wrap'),
    ngannotate = require('gulp-ng-annotate'),
    config = require('./gulpfile.config');

// vendor scripts
gulp.task('vendor', function() {
    return gulp.src(config.assets.lib.js)
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
		.pipe(gulp.dest('public/js'));
});

// index page
gulp.task('content', function () {
    return gulp.src(config.assets.content)
        .pipe(gulp.dest('public'));
});

// styles
gulp.task('styles', ['fonts'], function () {
    return gulp.src(config.assets.css)
        .pipe(concat('styles.css'))
		.pipe(gulp.dest('public/css'));
});

// fonts
gulp.task('fonts', function () {
    return gulp.src(config.assets.fonts)
		.pipe(gulp.dest('public/fonts'));
});

// client scripts
gulp.task('scripts', function() {
    return gulp.src(config.assets.js)
        .pipe(ngannotate())
        .pipe(wrap('(function(angular){\n"use strict";\n<%= contents %>\n})(window.angular);'))
        .pipe(sourcemaps.init())
        .pipe(concat('application.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'));
});

// partials
gulp.task('templates', function() {
    return gulp.src(config.assets.views)
        .pipe(templateCache({ module: config.moduleName }))
        .pipe(gulp.dest('public/js'));
});

// images
gulp.task('images', function() {
    return gulp.src(config.assets.img)
    .pipe(gulp.dest('public/img'));
});

// build
gulp.task('build', ['clean', 'bower'], function(){
	return gulp.start('vendor', 'styles', 'templates', 'scripts', 'images', 'content');
});

// watch
gulp.task('watch', function() {
    gulp.watch('content/assets/css/*.css', ['styles']);
    gulp.watch('content/**/*.js', ['scripts']);
    gulp.watch('content/**/*.html', ['templates', 'content']);
});

// clean assets
gulp.task('clean', function(cb) {
    return del(['public/css', 'public/js'], cb);
});

// bower
gulp.task('bower', function(cb){
  bower.commands.install([], {save: true}, {})
    .on('end', function(installed){
      cb();
    });
});

// default development
gulp.task('default', ['build', 'watch'], function(){
	nodemon({ 
	    script: 'index.js',
        watch: 'server/*',
		env: {NODE_ENV: 'development', DEBUG: true}
	});
});
