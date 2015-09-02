'use strict';

angular.module('app.common').controller('NavigationController', NavigationController);

function NavigationController(NavigationService) {
    var vm = this;
    vm.tree = NavigationService.getLinks();
}
