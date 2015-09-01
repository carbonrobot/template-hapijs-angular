'use strict';

angular.module('app').config(config);

/**
 * Configures the angular application
 */
function config($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

