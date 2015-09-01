'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    del = require('del'),
    nodemon = require('gulp-nodemon'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    templateCache = require('gulp-angular-templatecache'),
    bower = require('gulp-bower'),
    wrap = require('gulp-wrap'),
    ngannotate = require('gulp-ng-annotate'),
    less = require('gulp-less'),
    jshint = require('gulp-jshint'),
    jasmine = require('gulp-jasmine'),
    runSequence = require('run-sequence'),
    KarmaServer = require('karma').Server,
    rename = require('gulp-rename'),
    path = require('path'),
    config = require('./gulpfile.config');

// tasks
gulp.task('default', ['serve']);
gulp.task('serve', function(done){
    runSequence(
        'bower',
        'clean',
        ['vendor', 'styles', 'templates', 'scripts', 'images', 'content'], 
        'watch',
        'run',
        done);
});

gulp.task('build', function(done){
    runSequence(
        'bower',
        'clean',
        ['vendor', 'styles', 'templates', 'scripts', 'images', 'content'], 
        done);
});

gulp.task('test:api', function(){
    return gulp.src([
        'test/sample-api/**/*.spec.js'
    ])
    .pipe(jasmine());
});

gulp.task('test:ui', function(done){
    new KarmaServer({
        configFile: __dirname + '/test/sample-ui/karma.conf.js',
        autoWatch: watch,
        singleRun: !watch
    }, function(exitcode){
        done();
        process.exit(exitcode);
    }).start();
});

// components
gulp.task('bower', bower);
gulp.task('clean', clean);
gulp.task('content', content);
gulp.task('fonts', fonts);
gulp.task('images', images);
gulp.task('run', run);
gulp.task('scripts', scripts);
gulp.task('styles', ['fonts'], styles);
gulp.task('templates', templates);
gulp.task('vendor', vendor);
gulp.task('watch', watch);

function bower(done){
    return bower();
}

function clean(done){
    del(['public/*'], done);
}

function content() {
    return gulp.src(config.src.content)
        .pipe(gulp.dest(config.build.output.content));
}

function fonts() {
    return gulp.src(config.src.fonts)
        .pipe(gulp.dest(config.build.output.fonts));
}

function images() {
    return gulp.src(config.src.img, { base: './src/modules/sample-ui/content' })
    .pipe(gulp.dest(config.build.output.content));
}

function run(){
    nodemon({ 
        script: 'index.js',
        ext: 'js',
        ignore: ['public/*'],
        env: {NODE_ENV: 'development', DEBUG: true}
    });
}

function scripts() {
    return gulp.src(config.src.js.app)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(ngannotate())
        .pipe(wrap('(function(angular){\n<%= contents %>\n})(window.angular);'))
        .pipe(sourcemaps.init())
        .pipe(concat('application.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.build.output.js));
}

function styles() {
    return gulp.src(config.src.less)
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: [
                // Allows us to @import anything in the bower folder in less files using relative paths
                path.join(__dirname, 'bower_components')
            ]
        }))
        .pipe(rename(function(file){
            // flatten folders and rename to styles.css
            file.dirname = file.dirname.replace(path.sep + 'styles', '');
            file.basename = 'styles';
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.build.output.content));
}

function templates() {
    return gulp.src(config.src.templates)
        .pipe(templateCache({ module: config.src.templateModuleName }))
        .pipe(gulp.dest(config.build.output.js));
}

function vendor() {
    return gulp.src(config.src.js.vendor)
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.build.output.js));
}

function watch(){
    gulp.watch('src/**/*.less', ['styles']);
    gulp.watch('src/**/*.js', ['scripts']);
    gulp.watch('src/**/*.html', ['templates', 'content']);
}