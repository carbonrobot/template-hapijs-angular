'use strict';

var pkg = require('../modules/widget-api/package.json');

// export server config settings
// TODO: place each plugin config in its own file and merge
module.exports = {
    application: {
    	server: {
    		// TODO: cache, cors, etc
    	},
        connections: [
        	{
        		port: process.env.WEB_PORT || 3000,
        		labels: ['web']
        	},
            {
                port: process.env.API_PORT || 3001,
                labels: ['api']
            }
        ],
    	plugins: [
            
            // Registers the logging and process monitor
            {
                'good': [
                    {
                        select: ['web', 'api'],
                        options: {
                            reporters: [
                                {
                                    reporter: require('good-console'),
                                    events: { error: '*', log: '*', response: '*', request: '*' }        
                                }
                            ]
                        }
                    }
                ]
            },

            // Registers the static content handler
            {
                'inert': [
                    {
                        select: ['api']
                    }
                ]
            },


            // Registers the template rendering engine
            {
                'vision': [
                    {
                        select: ['api']
                    }
                ]
            },

            // Registers the database handler
    		{
	        	'./modules/mongoose': [
                    {
                        select: ['api'],
                        options: {
    		              database: 'mongodb://localhost/dev'
                        }
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
            },

            // Registers the REST api
		    {
		        './modules/widget-api': [
                    {
                        select: ['api']
                    }
                ]
		    },

            // Register Swagger to document the REST api
            {
                'hapi-swagger': [
                    {
                        select: ['api'],
                        options: {
                            info: {
                                title: 'Api Documentation',
                                description: 'REST API Documentation'
                            },
                            endpoint: '/swagger',
                            documentationPath: '/docs',
                            apiVersion: pkg.version
                        }
                    }
                ]
            }

    	]
    }
};