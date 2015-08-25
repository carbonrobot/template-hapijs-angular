'use strict';

//var pkg = require('../modules/widget-api/package.json');

// export server config settings
// TODO: place each plugin config in its own file and merge
module.exports = {
    application: {
    	server: {
    		// TODO: cache, cors, etc
    	},
    	connections: [
    		{
    			port: process.env.PORT || 3001,
    			labels: ['web']
    		}
            /*
            {
                port: 3030,
                labels: ['docs']
            }
            */
    	],
    	plugins: [
            
            // Registers the logging and process monitor
            {
                'good': [
                    {
                        options: {
                            reporters: [
                                {
                                    reporter: require('good-console'),
                                    events: { log: '*', response: '*' }        
                                }
                            ]
                        }
                    }
                ]
            },

            // Registers the static content handler
            {
                'inert': null
            },

            // Registers the database handler
    		{
	        	'./plugins/mongoose': [
                    {
                        select: ['web'],
                        options: {
    		              database: 'mongodb://localhost/dev'
                        }
                    }
                ]
		    },

            // Registers the REST api
		    {
		        './modules/widget-api': [
                    {
                        select: ['web']
                    }
                ]
		    },

            // Registers the UI content server
		    {
		        './modules/widget-ui': [
                    {
                        select: ['web']
                    }
                ]
		    }

            // Enable Swagger to document the REST api
            {
                'vision': null
            },
            {
                'hapi-swagger': [
                    {
                        select: ['web'],
                        options: {
                            apiVersion: pkg.version
                        }
                    }
                ]
            }
    	]
    }
};