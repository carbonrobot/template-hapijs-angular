'use strict';

angular.module('app.common')
    .directive('navTree', navTree)
    .directive('navLeaf', navLeaf);

/**
 * The leaf of a nav tree, must be nested within a tree
 * @param $compile The angular compile service
 */
function navLeaf($compile) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            leaf: '='
        },
        templateUrl: 'common/directives/navigation/navigation-leaf.directive.html',
        link: function (scope, element, attrs) {
             if (angular.isArray(scope.leaf.subtree)) {
                 element.append('<nav-tree tree=\"leaf.subtree\"></nav-tree>');
                 $compile(element.contents())(scope);
             }
        }
    };
}

/**
 * The navigation tree applies to the root and any child trees
 */
function navTree() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            tree: '='
        },
        templateUrl: 'common/directives/navigation/navigation-tree.directive.html',
        link: function(scope, element, attrs){
            if(element.parent().is('li')){
                element.removeClass('nav navbar-nav').addClass('dropdown-menu');
            }
        }
    };
}