var Hapi = require('hapi'),
    Path = require('path'),
    glob = require('glob'),
    mongoose = require('mongoose'),
    config = require('./config'),
    routes = require('./server/routes');

// make it so, hapi
var server = new Hapi.Server();
server.connection({
    port: config.port
});

// chart a course
for (var route in routes) {
    server.route(routes[route]);
}

// connect to mongodb
var db = mongoose.connect(config.db).connection;
db.once('open', function(cb){
    console.log('[mongodb] connected');
});
db.on('error', console.error.bind(console, '[mongodb] [error] '));
db.on('disconnected', function(){
    console.log('[mongodb] disconnected');
})

// register data models
glob('./server/models/**/*.js', function(err, matches){
    if(err || matches.length == 0)
        console.warn('Unable to register schema models');

    matches.forEach(require);
});

// engage
server.start(function () {
    console.log('[node] server running at:', server.info.uri);
});