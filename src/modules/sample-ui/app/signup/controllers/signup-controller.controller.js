'use strict';

angular.module('app.signup').controller('SignupCompleteController', SignupCompleteController);

function SignupCompleteController($stateParams){
	var vm = this;

	// props
	vm.applicant = $stateParams.applicant;
}