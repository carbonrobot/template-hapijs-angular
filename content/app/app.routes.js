function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('content', {
            url: '/',
            templateUrl: 'content.view.html'
        });;
};
angular.module('sideshow').config(config);
