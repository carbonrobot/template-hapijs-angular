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
        content: 'src/content/*.html',
        css: [
            'bower_assets/bootstrap/dist/css/bootstrap.css',
            'bower_assets/bootstrap/dist/css/bootstrap-theme.css',
            'src/content/assets/css/*.css'
        ],
        fonts: [
            'bower_assets/bootstrap/dist/fonts/*'
        ],
        js: [
            'src/content/app/app.js',
            'src/content/app/app.routes.js',
            'src/content/app/*/*.js'
        ],
        views: 'src/content/app/views/*.html',
        img: 'src/content/assets/img/**/*',
        tests: [
            'bower_assets/angular-mocks/angular-mocks.js',
            'src/content/app/tests/*.js'
        ]
    },
    moduleName: 'template-hapijs-angular'
};
