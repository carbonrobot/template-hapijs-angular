var hapi = require('hapi'),
    glue = require('glue'),
	config = require('./config');

// Configure the hapi server using a manifest(config) file
var options = {
    relativeTo: __dirname
};

// glue uses the manifest file to setup and run hapi for us
glue.compose(config.application, options, function(err, server){
    
    if(err) {
        throw err;
    }
    server.start(function () {

        console.log('[node] server running at:', server.info.uri);
    });   
});