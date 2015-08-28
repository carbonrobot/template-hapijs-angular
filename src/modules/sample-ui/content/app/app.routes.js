angular.module('app').config(config);

/**
 * Configures the angular application
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('content', {
            url: '/',
            templateUrl: 'default/views/default.view.html'
        });
}

