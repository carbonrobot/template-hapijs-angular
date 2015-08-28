'use strict';

var glob = require('glob'),
    path = require('path');

exports.register = function(server, options, next){

    // register data models
    glob('./server/models/**/*.model.js', { cwd: path.dirname(__filename) }, function(err, matches){
        matches.forEach(require);

        // register routes
        glob('./server/routes/*.routes.js', { cwd: path.dirname(__filename) }, function(err, matches){
            matches.forEach(function(filepath){
                server.route(require(filepath));
            });

            return next();
        });
    });
    
};
exports.register.attributes = {
    pkg: require('./package.json')
};