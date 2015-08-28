'use strict';

var Hapi = require('hapi');

server = new Hapi.Server();
server.connection({port: 8753});



module.exports = server;