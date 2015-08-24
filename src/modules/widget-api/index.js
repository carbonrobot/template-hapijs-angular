'use strict';

var glob = require('glob'),
    path = require('path');

exports.register = function(server, options, next){
	// register routes
    // TODO: is there a better place for this?
    // TODO: don't use require, load json directly
    glob('./routes/*.routes.js', { cwd: path.dirname(__filename) }, function(err, matches){
        matches.forEach(function(filepath){
            var routes = require(filepath);
            server.route(routes);
        });
    });

    // register data models
    // TODO: is there a better place for this?
    glob('./models/**/*.model.js', function(err, matches){
        matches.forEach(require);
    });

    return next();
};
exports.register.attributes = {
    pkg: require('./package.json')
};