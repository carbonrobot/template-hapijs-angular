'use strict';

angular.module('app.common').factory('NavigationService', NavigationService);

function NavigationService($state) {

    var links = [];

    function getLinks() {
        if (links) {
            return links;
        }

        var states = $state.get();
        states.sort(function(a,b){
            return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
        });

        states.forEach(function(state) {
            if (state.url && !state.abstract) {

                var link = createLink(state),
                    parent = false;

                var expression = state.name.split('-');
                if (expression.length > 1) {
                    parent = findLink(expression[0]);
                }
                pushLink(link, parent);
            }
        });
    }

    function createLink(state) {
        return {
            key: state.name,
            link: state.url,
            name: state.text || state.name
        };
    }

    function findLink(key) {
        var link = false;
        links.forEach(function(s) {
            if (s.key === key){
                link = s;
            }
        });
        return link;
    }

    function pushLink(link, parent) {
        if (parent) {
            parent.subtree = parent.subtree || [];
            parent.subtree.push(link);
        } else {
            links.push(link);
        }
    }

    return {
        getLinks: getLinks
    };
}
