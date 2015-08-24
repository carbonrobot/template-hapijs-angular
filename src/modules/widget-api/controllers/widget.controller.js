'use strict';

var mongoose = require('mongoose');

// stations api
function WidgetController() {

    function list(request, reply) {
        var WidgetModel = mongoose.model('Widget');
        WidgetModel.find({}, function(err, data) {
            return reply(data);
        });
    }

    return {
        list: list
    };
};

module.exports = WidgetController();