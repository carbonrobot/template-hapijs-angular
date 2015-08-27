'use strict';

var glob = require('glob'),
    path = require('path');

exports.register = function(server, options, next){

	// register routes
    glob('./server/routes/*.routes.js', { cwd: path.dirname(__filename) }, function(err, matches){
        matches.forEach(function(filepath){
            server.route(require(filepath));
        });
    });

    // register data models
    glob('./server/models/**/*.model.js', { cwd: path.dirname(__filename) }, function(err, matches){
        matches.forEach(require);
    });

    return next();
};
exports.register.attributes = {
    pkg: require('./package.json')
};