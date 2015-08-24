function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('content', {
            url: '/',
            templateUrl: 'content.view.html'
        });;
};
angular.module('template-hapijs-angular').config(config);
