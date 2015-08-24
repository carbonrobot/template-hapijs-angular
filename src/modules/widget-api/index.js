'use strict';

var glob = require('glob'),
    path = require('path');

exports.register = function(server, options, next){

    // require the mongoose plugin to be setup first
    server.dependency('mongoose-plugin', function(server, next){}

    	// register routes
        glob('./routes/*.routes.js', { cwd: path.dirname(__filename) }, function(err, matches){
            matches.forEach(function(filepath){
                server.route(require(filepath));
            });
        });

        // register data models
        glob('./models/**/*.model.js', function(err, matches){
            matches.forEach(require);
        });

        return next();
    });

    return next();
};
exports.register.attributes = {
    pkg: require('./package.json')
};