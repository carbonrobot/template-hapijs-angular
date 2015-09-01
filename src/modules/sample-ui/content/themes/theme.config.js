var _ = require('lodash'),
    glob = require('glob'),
    fs = require('fs'),
    path = require('path');

function register(server){
	
	var themes = [];

	// construct theme information
    glob('./**/config.json', { cwd: __dirname }, function(err, files){
        files.forEach(function(file){
            fs.readFile(path.join(__dirname, file), function(err, data){
                if(err) throw err;

                var themeConfig = JSON.parse(data);
                themes.push(themeConfig);
            });
        });
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
};

module.exports.register = register;