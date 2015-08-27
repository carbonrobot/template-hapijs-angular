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
    config = require('./gulpfile.config'),
    KarmaServer = require('karma').Server;

// tasks
gulp.task('default', ['build', 'watch', 'test-monitor'], startDevMode);
gulp.task('build', ['clean', 'bower'], build);
gulp.task('watch', watch);
gulp.task('clean', cleanBuildFiles);
gulp.task('bower', downloadPackages);
gulp.task('test', test);

// components
gulp.task('vendor', vendor);
gulp.task('templates', templates);
gulp.task('scripts', scripts);
gulp.task('images', images);
gulp.task('content', content);
gulp.task('styles', ['fonts'], styles);
gulp.task('fonts', fonts);

function build(done){
    return gulp.start('vendor', 'styles', 'templates', 'scripts', 'images', 'content');
}

function content() {
    return gulp.src(config.assets.content)
        .pipe(gulp.dest(config.build.output.content));
}

function cleanBuildFiles(done){
    return del(['public/*'], done);
}

function downloadPackages(done){
    bower.commands.install([], {save: true}, {})
    .on('end', function(installed){
      done();
    });
}

function images() {
    return gulp.src(config.assets.img)
    .pipe(gulp.dest(config.build.output.img));
}

function fonts() {
    return gulp.src(config.assets.fonts)
		.pipe(gulp.dest(config.build.output.fonts));
}

function scripts() {
    return gulp.src(config.assets.js)
        .pipe(ngannotate())
        .pipe(wrap('(function(angular){\n"use strict";\n<%= contents %>\n})(window.angular);'))
        .pipe(sourcemaps.init())
        .pipe(concat('application.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.build.output.js));
}

function startDevMode(){
    nodemon({ 
        script: 'index.js',
        ext: 'js',
        ignore: ['modules/widget-ui/*', 'public/*'],
        env: {NODE_ENV: 'development', DEBUG: true}
    });
}

function styles() {
    return gulp.src(config.assets.css)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(config.build.output.css));
}

function templates() {
    return gulp.src(config.assets.views)
        .pipe(templateCache({ module: config.moduleName }))
        .pipe(gulp.dest(config.build.output.js));
}

function test(done){
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        autoWatch: false,
        reporters: ['progress']
    }, function(exitcode){
        done();
        process.exit(exitcode);
    }).start();
}

function vendor() {
    return gulp.src(config.assets.lib.js)
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.build.output.js));
}

function watch(){
    // TODO: these paths should be stored in the config file
    gulp.watch('content/assets/css/*.css', ['styles']);
    gulp.watch('content/**/*.js', ['scripts']);
    gulp.watch('content/**/*.html', ['templates', 'content']);
}