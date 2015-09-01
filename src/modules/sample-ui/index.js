'use strict';

exports.register = function(server, options, next){
	
    // register route to serve static content
    server.route({
        method: 'GET',
        path: '/public/{path*}',
        handler : {
            directory: {
                path: 'public',
                listing: false,
                index: false
            }
        }
    });

    // register route to serve index file
    server.route({
        method: 'GET',
        path: '/{path*}',
        handler : {
            file: 'public/index.html'
        }
    });

    return next();
};
exports.register.attributes = {
    pkg: require('./package.json')
};