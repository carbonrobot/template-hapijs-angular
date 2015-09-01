'use strict';

angular.module('app.about', [])
   .config(config);

/**
 * Configures the about module routing
 */
function config($stateProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'about/views/about.view.html'
        });
}