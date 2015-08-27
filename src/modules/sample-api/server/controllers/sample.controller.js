'use strict';

var mongoose = require('mongoose');

/**
 * A sample hapi.js controller
 */
function SampleController() {

	return {
        list: list,
        update: update
    };

    /**
     * Returns an array of all widgets
     */
    function list(request, reply) {
        var WidgetModel = mongoose.model('Widget');
        WidgetModel.find({}, function(err, data) {
            return reply(data);
        });
    }

    /**
     * Updates a single widget
     */
    function update(request, reply){
    	return reply();
    }
    
};

module.exports = SampleController();