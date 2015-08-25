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
        content: 'src/modules/widget-ui/content/*.html',
        css: [
            'bower_assets/bootstrap/dist/css/bootstrap.css',
            'bower_assets/bootstrap/dist/css/bootstrap-theme.css',
            'src/modules/widget-ui/content/assets/css/*.css'
        ],
        fonts: [
            'bower_assets/bootstrap/dist/fonts/*'
        ],
        js: [
            'src/modules/widget-ui/content/app/app.js',
            'src/modules/widget-ui/content/app/app.routes.js',
            'src/modules/widget-ui/content/app/*/*.js'
        ],
        views: 'src/modules/widget-ui/content/app/views/*.html',
        img: 'src/modules/widget-ui/content/assets/img/**/*',
        tests: [
            'bower_assets/angular-mocks/angular-mocks.js',
            'src/content/app/tests/*.js'
        ],
        docs: 'src/modules/widget-api-docs/content/*.html'
    },
    build: {
        output: {
            js: 'public/js',
            img: 'public/img',
            fonts: 'public/fonts',
            css: 'public/css',
            content: 'public',
            docs: 'public/docs'
        }
    },
    moduleName: 'template-hapijs-angular'
};
