'use strict';

module.exports = {
    
    // source file paths
    src: {
        
        // vendor and application css/less
        css: [
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/bootstrap/dist/css/bootstrap-theme.css',
            'src/modules/sample-ui/content/**/*.less'
        ],

        // html content
        content: 'src/modules/sample-ui/content/*.html',
        
        // fonts
        fonts: [
            'bower_components/bootstrap/dist/fonts/*'
        ],

        // images
        img: 'src/modules/sample-ui/content/**/*.*(png|jpg|gif)',

        // javascript files
        js: {

            vendor: [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-resource/angular-resource.js',
                'bower_components/angular-animate/angular-animate.js',
                'bower_components/angular-sanitize/angular-sanitize.js',
                'bower_components/angular-ui-router/release/angular-ui-router.js',
                'bower_components/bootstrap/dist/js/bootstrap.js',
                'bower_components/lodash/lodash.js'
            ],

            // application files are separate, because they get linted
            app: [
                'src/modules/sample-ui/app/**/*.module.js',
                'src/modules/sample-ui/app/**/*.js'
            ]
        },

        // angular templates
        templates: 'src/modules/sample-ui/app/**/*.view.html',
        templateModuleName: 'app.templates'
    },

    // build paths
    build: {

        output: {
            content: 'public',
            fonts: 'public/fonts',
            js: 'public/js',
            css: 'public/css'
        }
        
    },
    
};
