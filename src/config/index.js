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

            // Register good for error logging, reporting
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

            // Register mongoose for data access
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

            // Register the REST api
		    {
		        './modules/widget-api': [
                    {
                        select: ['web']
                    }
                ]
		    },

            // Register the UI / Content
		    {
		        './modules/widget-ui': [
                    {
                        select: ['web']
                    }
                ]
		    }

            // Enable Swagger to document the REST api
            /*
            {
                'inert': null
            },
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
            */
    	]
    }
};