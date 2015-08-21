"use strict";

var deviceController = require('../controllers/device.controller');

module.exports = function() {
    return [
        {
            method: 'GET',
            path: '/devices',
            config: {
                handler: deviceController.list
            }
        },
        {
            method: 'POST',
            path: '/devices',
            config: {
                handler: deviceController.update
            }
        },
        {
            // static content
            method: 'GET',
            path: '/{path*}',
            handler : {
                directory: {
                    path: 'public',
                    listing: false,
                    index: true
                }
            }
        }
    ];
}();