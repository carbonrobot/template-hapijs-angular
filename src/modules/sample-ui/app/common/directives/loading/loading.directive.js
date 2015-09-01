﻿var template = [
    '<div class="loading-container" data-ng-hide="waitFor">',
    '<div class="loading"></div>',
    '<div class="loading-text">loading</div>',
    '</div>'
].join('');

/**
 * @name loading
 * @desc Loading indicator
 */
function loading() {
    return {
        restrict: 'EA',
        scope: {
            waitFor: '='
        },
        template: template
    };
}
angular.module('app.common').directive('loading', loading);