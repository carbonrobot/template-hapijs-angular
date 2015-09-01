'use strict';

angular.module('app').config(config);

/**
 * Configures the angular application
 */
function config($urlRouterProvider, $locationProvider) {
	// Disable html 5 mode for theme support
	$locationProvider.html5Mode(false);

	// Start at the default route
    $urlRouterProvider.otherwise('/');
}

