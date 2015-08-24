'use strict';

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
    	],
    	plugins: [
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
		    {
		        './modules/widget-api': [
                    {
                        select: ['web']
                    }
                ]
		    },
		    {
		        './modules/widget-ui': [
                    {
                        select: ['web']
                    }
                ]
		    }
    	]
    }
};