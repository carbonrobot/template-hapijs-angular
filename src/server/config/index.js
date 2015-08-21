'use strict';

var glob = require('glob'),
	path = require('path');

// register all configuration files
glob('./*.config.js', { cwd: path.dirname(__filename) }, function(err, matches){
    matches.forEach(require);
});

// export server config settings
module.exports = {
    application: {
        port: process.env.PORT || 3000
    },
    database: 'mongodb://localhost/dev',
};