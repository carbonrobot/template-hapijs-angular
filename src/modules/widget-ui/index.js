'use strict';

exports.register = function(server, options, next){
	
    // register route to serve static content
    server.route({
        method: 'GET',
        path: '/{path*}',
        handler : {
            directory: {
                path: 'public',
                listing: false,
                index: true
            }
        }
    });

    return next();
};
exports.register.attributes = {
    pkg: require('./package.json')
};