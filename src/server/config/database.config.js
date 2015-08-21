'use strict';

var glob = require('glob'),
    mongoose = require('mongoose'),
    config = require('./index.js');

// connect to mongodb
var db = mongoose.connect(config.database).connection;
db.once('open', function(cb){
    console.log('[mongodb] connected');
});
db.on('error', console.error.bind(console, '[mongodb] [error] '));
db.on('disconnected', function(){
    console.log('[mongodb] disconnected');
});

// register data models
glob('../models/**/*.model.js', function(err, matches){
    matches.forEach(require);
});