var Path = require('path');

var internals = {
    debug: true,
    dbconnection: 'mongodb://localhost/dev',
    staticContentPath: '../../public'
};

// export server config settings
module.exports = {
    application: {
    	server: {
    		// TODO: cache, cors, etc
    	},
        connections: [
        	{
        		port: process.env.WEB_PORT || 3000,
        		labels: ['web'],
                routes: {
                    files: {
                        // serves static content files from this directory
                        relativeTo: Path.join(__dirname, internals.staticContentPath)
                    }
                }
        	},
            {
                port: process.env.API_PORT || 3001,
                labels: ['api'],
                routes: {
                    validate: {
                        options: {
                            // ignores unknown json props and doesnt validate them
                            allowUnknown: true
                        }
                    }
                }
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
                        select: ['api', 'web']
                    }
                ]
            },
            {
                'visionary': [
                    {
                        select: ['web'],
                        options: {
                            engines: {
                                html: 'handlebars'
                            },
                            path: Path.join(__dirname, internals.staticContentPath),
                            isCached: !internals.debug
                        }
                    }
                ]
            },

            // Registers the database handler
    		{
	        	'./modules/mongoose-config': [
                    {
                        select: ['api'],
                        options: {
    		              database: internals.dbconnection
                        }
                    }
                ]
		    },

            // Registers the UI content server
            {
                './modules/sample-ui': [
                    {
                        select: ['web']
                    }
                ]
            },

            // Registers the REST api
		    {
		        './modules/sample-api': [
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
                            apiVersion: require('../modules/sample-api/package.json').version
                        }
                    }
                ]
            }

    	]
    }
};