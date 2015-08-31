'use strict';

var mongoose = require('mongoose'),
    Boom = require('boom');

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
    	var WidgetModel = mongoose.model('Widget');
        var widget = new WidgetModel(request.payload);
        widget.save(function(err){
            if(err){
                return reply(Boom.badImplementation('There was an internal error.', err));
            }

            return reply(widget);
        });
    }
    
};

module.exports = SampleController();