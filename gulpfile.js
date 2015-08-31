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
    less = require('gulp-less'),
    jshint = require('gulp-jshint'),
    config = require('./gulpfile.config'),
    jasmine = require('gulp-jasmine'),
    KarmaServer = require('karma').Server;

// tasks
gulp.task('default', ['build']);
gulp.task('serve', ['build', 'watch'], startDevMode);
gulp.task('build', ['clean', 'bower'], build);
gulp.task('watch', watch);
gulp.task('clean', cleanBuildFiles);
gulp.task('bower', downloadPackages);
gulp.task('test:api', testApi);
gulp.task('test:ui', function(done){
    testUi(true, done);
});
gulp.task('test:ui:single', function(done){
    testUi(false, done);
});

// components
gulp.task('vendor', vendor);
gulp.task('templates', templates);
gulp.task('scripts', scripts);
gulp.task('images', images);
gulp.task('content', content);
gulp.task('styles', ['fonts'], styles);
gulp.task('fonts', fonts);

function build(){
    gulp.start('vendor', 'styles', 'templates', 'scripts', 'images', 'content');
}

function content() {
    return gulp.src(config.assets.content)
        .pipe(gulp.dest(config.build.output.content));
}

function cleanBuildFiles(done){
    del(['public/*'], done);
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
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(ngannotate())
        .pipe(wrap('(function(angular){\n\'use strict\';\n<%= contents %>\n})(window.angular);'))
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
        ignore: ['src/modules/sample-ui/*', 'public/*'],
        env: {NODE_ENV: 'development', DEBUG: true}
    });
}

function styles() {
    return gulp.src(config.assets.css)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.build.output.css));
}

function templates() {
    return gulp.src(config.assets.views)
        .pipe(templateCache({ module: config.templateModuleName }))
        .pipe(gulp.dest(config.build.output.js));
}

function testUi(watch, done){
    new KarmaServer({
        configFile: __dirname + '/test/sample-ui/karma.conf.js',
        autoWatch: watch,
        singleRun: !watch
    }, function(exitcode){
        done();
        process.exit(exitcode);
    }).start();
}

function testApi(done){
    return gulp.src([
            'test/sample-api/**/*.spec.js'
        ])
        .pipe(jasmine());
}

function vendor() {
    return gulp.src(config.assets.lib.js)
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.build.output.js));
}

function watch(){
    // TODO: these paths should be stored in the config file
    gulp.watch('src/**/*.less', ['styles']);
    gulp.watch('src/**/*.js', ['scripts']);
    gulp.watch('src/**/*.html', ['templates', 'content']);
}