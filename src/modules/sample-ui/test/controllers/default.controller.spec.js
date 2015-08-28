'use strict';

describe('app', function() {

	var scope, controller;

	beforeEach(module('app'));

	beforeEach(inject(function($controller, $rootScope) {
	     scope = $rootScope.$new();
	     controller = $controller('DefaultController', {
	          $scope: scope
	     });
	}));

	describe('default controller', function(){

		it('should be ...', function(){
			expect(controller).not.toBe(null);
		});

	});
});