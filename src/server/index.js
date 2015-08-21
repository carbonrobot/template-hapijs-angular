var hapi = require('hapi'),
    glob = require('glob'),
    path = require('path'),
	config = require('./config');

// make it so, hapi
var server = new hapi.Server();
server.connection({
    port: config.application.port
});

// chart a course, register routes and controllers
glob('./routes/*.routes.js', { cwd: path.dirname(__filename) }, function(err, matches){
    matches.forEach(function(filepath){
        //var filepath = path.resolve(path.normalize(file));
        var routes = require(filepath);
        
        routes.forEach(function(route){
            server.route(route);
        });
    });
});

// engage
server.start(function () {
    console.log('[node] server running at:', server.info.uri);
});