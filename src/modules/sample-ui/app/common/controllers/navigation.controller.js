'use strict';

angular.module('app').controller('NavigationController', NavigationController);

function NavigationController(NavigationService){
	var vm = this;

	// props
	vm.tree = NavigationService.getLinks();
}