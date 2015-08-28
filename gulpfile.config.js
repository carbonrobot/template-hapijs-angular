'use strict';

module.exports = {
    assets: {
        lib: {
            js: [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-resource/angular-resource.js',
                'bower_components/angular-animate/angular-animate.js',
                'bower_components/angular-sanitize/angular-sanitize.js',
                'bower_components/angular-ui-router/release/angular-ui-router.js',
                'bower_components/bootstrap/dist/js/bootstrap.js',
                'bower_components/lodash/lodash.js'
            ]
        },
        content: 'src/modules/sample-ui/content/*.html',
        css: [
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/bootstrap/dist/css/bootstrap-theme.css',
            'src/modules/sample-ui/content/**/*.less'
        ],
        fonts: [
            'bower_components/bootstrap/dist/fonts/*'
        ],
        js: [
            'src/modules/sample-ui/content/app/app.module.js',
            'src/modules/sample-ui/content/app/app.startup.js',
            'src/modules/sample-ui/content/app/app.routes.js',
            'src/modules/sample-ui/content/app/**/*.js'
        ],
        views: 'src/modules/sample-ui/content/app/**/*.view.html',
        img: 'src/modules/sample-ui/content/assets/img/**/*',
        tests: [
            'bower_components/angular-mocks/angular-mocks.js',
            'src/**/*.spec.js'
        ]
    },
    build: {
        output: {
            js: 'public/js',
            img: 'public/img',
            fonts: 'public/fonts',
            css: 'public/css',
            content: 'public'
        }
    },
    templateModuleName: 'app.templates'
};
