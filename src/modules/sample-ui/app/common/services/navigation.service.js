'use strict';

angular.module('app').factory('NavigationService', NavigationService);

function NavigationService($state) {
    var links;
    
    function getLinks() {
        if (links) {
            return links;
        }
        links = [];

        var states = $state.get();
        states.sort(function(a,b){
            return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
        });

        states.forEach(function(state) {
            if (state.url && !state.abstract && !state.excludeFromNav) {

                var link = createLink(state);
                var expression = state.name.split('-');
                expression.pop();

                var parent = findLink(expression.join('-'));
                pushLink(link, parent);
            }
        });

        return links;
    }

    function createLink(state) {
        return {
            key: state.name,
            link: state.url,
            name: state.text || state.name
        };
    }

    function findLink(key, parent) {
        var tree = links;
        if(parent){
            tree = parent.subtree;
        }
        if(!tree){
            return false;
        }

        var link = false;
        tree.forEach(function(s) {
            if (s.key === key){
                link = s;
            }
            else{
                link = findLink(key, s);
            }
            if(link){
                return;
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
