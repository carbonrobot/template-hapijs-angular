"use strict";

var controller = require('../controllers/widget.controller'),
	validations = require('../validations/widget.validations.js');

module.exports = [
    {
        method: 'GET',
        path: '/widgets',
        handler: controller.list,
        config: {
        	description: 'Get a list of widgets',
        	notes: 'Returns an array of all widgets in the database.',
        	tags: ['api']
        }
    }
    /*
    {
    	method: 'POST',
    	path: '/widgets',
    	handler: controller.update,
    	validate: validations.update,
    	config: {
        	description: 'Update a Widget',
        	notes: 'Updates and existing widget, or inserts a new one.',
        	tags: ['api']
        }
    }
    */
];