'use strict';

module.exports = {
    assets: {
        lib: {
            js: [
                'bower_assets/jquery/dist/jquery.js',
                'bower_assets/angular/angular.js',
                'bower_assets/angular-resource/angular-resource.js',
                'bower_assets/angular-animate/angular-animate.js',
                'bower_assets/angular-sanitize/angular-sanitize.js',
                'bower_assets/angular-ui-router/release/angular-ui-router.js',
                'bower_assets/bootstrap/dist/js/bootstrap.js',
                'bower_assets/lodash/lodash.js'
            ]
        },
        content: 'src/modules/sample-ui/content/*.html',
        css: [
            'bower_assets/bootstrap/dist/css/bootstrap.css',
            'bower_assets/bootstrap/dist/css/bootstrap-theme.css',
            'src/modules/sample-ui/content/assets/css/*.css'
        ],
        fonts: [
            'bower_assets/bootstrap/dist/fonts/*'
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
            'bower_assets/angular-mocks/angular-mocks.js',
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
