'use strict';

describe('navigation service', function () {

    var service, routes;

    beforeEach(function () {
        module('app.common');
        module(function ($provide) {
            $provide.factory('$state', function () {
                return {
                    get: function () {
                        return routes;
                    }
                };
            });
        });

        inject(function (_$state_, _NavigationService_) {
            console.log(_$state_);
            service = _NavigationService_;
        });
    });

    it('should return zero links', function () {
        routes = [];
        var links = service.getLinks();
        expect(links.length).toBe(0);
    });

    it('should return exactly one link', function () {
        routes = [
            { name: "ahs", url: "fef" }
        ];
        var links = service.getLinks();
        expect(links.length).toBe(1);
    });

    it('should return exactly three links', function () {
        routes = [
            { name: "ahs", url: "fef" },
            { name: "jhb", url: "fef" },
            { name: "uhg", url: "fef" }
        ];
        var links = service.getLinks();
        expect(links.length).toBe(3);
    });

    it('should ignore abstract links', function () {
        routes = [
            { name: "ahs", url: "fef" },
            { name: "jhb", url: "fef", abstract: true },
            { name: "uhg", url: "fef" }
        ];
        var links = service.getLinks();
        expect(links.length).toBe(2);
    });

    it('should ignore links without a url', function () {
        routes = [
            { name: "ahs", url: "fef" },
            { name: "jhb" },
            { name: "uhg", url: "fef" }
        ];
        var links = service.getLinks();
        expect(links.length).toBe(2);
    });

    it('should return 1 link that has 2 children', function () {
        routes = [
            { name: "ahs", url: "fef" },
            { name: "ahs-bhg", url: "fef" },
            { name: "ahs-iuy", url: "fef" }
        ];
        var links = service.getLinks();
        expect(links.length).toBe(1);
        expect(links[0].subtree.length).toBe(2);
    });

    it('should handle child links defined out of order', function () {
        routes = [
            { name: "ahs-iuy-jut", url: "fef" },
            { name: "ahs-iuy", url: "fef" },
            { name: "ahs", url: "fef" },
        ];
        var links = service.getLinks();
        expect(links.length).toBe(1);
        expect(links[0].subtree.length).toBe(1);
    });

    it('should return 2 links that each have 2 children', function () {
        routes = [
            { name: "ahs", url: "fef" },
            { name: "ahs-bhg", url: "fef" },
            { name: "ahs-iuy", url: "fef" },
            { name: "try", url: "fef" },
            { name: "try-gfd", url: "fef" },
            { name: "try-fgd", url: "fef" }
        ];
        var links = service.getLinks();
        expect(links.length).toBe(2);
        expect(links[0].subtree.length).toBe(2);
        expect(links[1].subtree.length).toBe(2);
    });

    it('should return a link that has a child with children', function () {
        routes = [
            { name: "ahs", url: "fef" },
            { name: "ahs-bhg", url: "fef" },
            { name: "ahs-bhg-ctg", url: "fef" },
            { name: "ahs-try", url: "fef" }
        ];
        var links = service.getLinks();
        expect(links.length).toBe(1);
        expect(links[0].subtree.length).toBe(2);
        expect(links[0].subtree[0].subtree.length).toBe(1);
    });

    it('should handle very complex deep routing', function () {
        // note: for the sake of this test, alpha order on the last segment is important
        routes = [
            { name: "aaa", url: "fef" },
            { name: "ahs", url: "fef" },
            { name: "ahs-bhg", url: "fef" },
            { name: "ahs-bhg-ctg", url: "fef" },
            { name: "ahs-bhg-bre", url: "fef" },
            { name: "ahs-bhg-erf", url: "fef" },
            { name: "ahs-fht", url: "fef" },
            { name: "ahs-fht-ctg", url: "fef" },
            { name: "ahs-fht-bre", url: "fef" },
            { name: "ahs-fht-erf", url: "fef" },
            { name: "ahs-fht-erf-aeg", url: "fef" },
            { name: "ahs-fht-erf-bwg", url: "fef" },
            { name: "ahs-fht-erf-cgr", url: "fef" },
            { name: "ahs-fht-erf-cgr-aue", url: "fef" },
            { name: "ahs-fht-erf-cgr-bdy", url: "fef" }

        ];
        var links = service.getLinks();
        expect(links.length).toBe(2);
        expect(links[1].subtree.length).toBe(2);
        expect(links[1].subtree[0].subtree.length).toBe(3);
        expect(links[1].subtree[1].subtree.length).toBe(3);
        expect(links[1].subtree[1].subtree[2].subtree.length).toBe(3);
    });

    function createState(routes) {
        return {
            get: function () {
                return routes;
            }
        }
    }

    function getLinks(routes) {
        //var state = createState(routes);
        //var $injector = angular.injector(['ng', 'app.common']);
        //var service = $injector.get('NavigationService');
        //return service(state).getLinks();
        return [];
    }

});