var _ = require('lodash'),
    glob = require('glob'),
    fs = require('fs'),
    path = require('path');

exports.register = function(server, options, next){

    // construct theme information
    var themes = [];
    glob('./content/themes/**/config.json', { cwd: __dirname }, function(err, files){
        files.forEach(function(file){
            fs.readFile(path.join(__dirname, file), function(err, data){
                if(err) throw err;

                var themeConfig = JSON.parse(data);
                themes.push(themeConfig);
            });
        });
    });
	
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

    // register route to serve index file and verify theme name
    server.route({
        method: 'GET',
        path: '/{theme*}',
        handler: function(request, reply){

            // Lookup the theme and send back the content page
            var themeKey = request.params.theme;
            if(themeKey){
                var theme = _.find(themes, 'key', themeKey);    
                if(theme){

                    return reply.view('index.html', {
                        theme: theme,
                        themeJson: JSON.stringify(theme)
                    });

                }
            }

            // If not found, redirect to the default theme
            theme = _.find(themes, 'isDefault', true);
            return reply.redirect('/' + theme.key);
        }
    });

    return next();
};
exports.register.attributes = {
    pkg: require('./package.json')
};