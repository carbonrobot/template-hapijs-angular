"use strict";

var widgetController = require('../controllers/widget.controller');

module.exports = function() {
    return [
        {
            method: 'GET',
            path: '/widgets',
            config: {
                handler: widgetController.list
            }
        }
    ];
}();