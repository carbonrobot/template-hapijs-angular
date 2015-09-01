'use strict';

angular.module('app').controller('DefaultController', DefaultController);

/**
 * Handles the layout for the application
 */
function DefaultController(theme) {
    var vm = this;

    // props
    vm.theme = theme;
}