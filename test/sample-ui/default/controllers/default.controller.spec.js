'use strict';

describe('default controller', function() {

	var scope, controller;

	beforeEach(module('app'));
	beforeEach(inject(function($controller, $rootScope) {
	     scope = $rootScope.$new();
	     controller = $controller('DefaultController', {
	          $scope: scope,
			  theme: {}
	     });
	}));

	it('should have a theme', function(){
		expect(controller.theme).not.toBe(null);
	});

});