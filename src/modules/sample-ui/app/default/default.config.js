'use strict';

angular.module('app.default').config(config);

/**
 * Configures the default module routing
 */
function config($stateProvider) {
    $stateProvider
        .state('default', {
        	url: '/',
            templateUrl: 'default/views/default.view.html'
        });
}