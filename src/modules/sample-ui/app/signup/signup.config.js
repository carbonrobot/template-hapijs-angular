'use strict';

angular.module('app.signup').config(config);

/**
 * Configures the signup routing
 */
function config($stateProvider) {
    $stateProvider
        .state('signup', {
            url: '/signup',
            templateUrl: 'signup/views/signup.view.html'
        })
        .state('signup-complete', {
        	params: {
        		applicant: null
        	},
            templateUrl: 'signup/views/signup-complete.view.html'
        });
}