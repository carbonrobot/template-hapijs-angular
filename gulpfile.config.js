'use strict';

module.exports = {
    
    // source file paths
    src: {
        
        // application less files
        less: 'src/modules/sample-ui/content/**/index.less',

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
            
            // vendor files that are downloaded individually by the browser
            // we keep these separate to reduce the size of the main js file
            single: [
              'bower_components/highcharts/highcharts.js'  
            ],

            // application files are separate, because they get linted
            app: [
                'src/modules/sample-ui/app/**/*.module.js',
                'src/modules/sample-ui/app/**/*.js'
            ]
        },

        // angular templates
        templates: [
            'src/modules/sample-ui/app/**/*.view.html',
            'src/modules/sample-ui/app/**/*.directive.html'   
        ],
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
