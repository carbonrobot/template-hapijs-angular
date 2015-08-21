'use strict';

module.exports = {
    port: process.env.PORT || 3000,
    mqUrl: 'amqp://nwudxprq:1itQTNDf-lM-UNeeAkT198-XQp7JTNwF@owl.rmq.cloudamqp.com/nwudxprq',
    db: 'mongodb://sideshow-dev:1itQTNDf-lM-UNeeAkT198-XQp7JTNwF@ds031591.mongolab.com:31591/sideshow-dev',
    assets: {
        lib: {
            js: [
                'content/assets/lib/jquery/dist/jquery.js',
                'content/assets/lib/angular/angular.js',
                'content/assets/lib/angular-resource/angular-resource.js',
                'content/assets/lib/angular-animate/angular-animate.js',
                'content/assets/lib/angular-sanitize/angular-sanitize.js',
                'content/assets/lib/angular-ui-router/release/angular-ui-router.js',
                'content/assets/lib/bootstrap/dist/js/bootstrap.js',
                'content/assets/lib/lodash/lodash.js'
            ]
        },
        content: 'content/*.html',
        css: [
            'content/assets/lib/bootstrap/dist/css/bootstrap.css',
            'content/assets/lib/bootstrap/dist/css/bootstrap-theme.css',
            'content/assets/css/*.css'
        ],
        fonts: [
            'content/assets/lib/bootstrap/dist/fonts/*'
        ],
        js: [
            'content/app/app.js',
            'content/app/app.routes.js',
            'content/app/*/*.js'
        ],
        views: 'content/app/views/*.html',
        img: 'content/assets/img/**/*',
        tests: [
            'content/lib/angular-mocks/angular-mocks.js',
            'content/app/tests/*.js'
        ]
    },
    moduleName: 'sideshow'
};
