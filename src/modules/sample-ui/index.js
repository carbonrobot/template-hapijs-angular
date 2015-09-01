var themes = require('./content/themes/theme.config.js');

exports.register = function(server, options, next){
	
    // register route to serve static content
    server.route({
        method: 'GET',
        path: '/public/{path*}',
        handler : {
            directory: {
                path: './',
                index: false
            }
        }
    });

    // register themes
    themes.register(server);

    return next();
};
exports.register.attributes = {
    pkg: require('./package.json')
};