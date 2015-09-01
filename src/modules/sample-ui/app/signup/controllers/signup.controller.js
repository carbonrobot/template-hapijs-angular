'use strict';

angular.module('app.signup').controller('SignupController', SignupController);

/**
 * Handles the layout for the application
 */
function SignupController($state, ApplicantModel) {
    var vm = this;

    // props
    vm.applicant = new ApplicantModel();

    // methods
    vm.complete = complete;

    /**
     * Completes the signup by transitioning the state to complete
     */
    function complete(){
        vm.applicant.update();
		$state.go('signup-complete', { applicant: vm.applicant });
    }
}