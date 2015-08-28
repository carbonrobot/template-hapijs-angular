describe('api', function(){

	var server;

	beforeAll(function(done){
		server = require('../config.js').createServer(done);
	});

	describe('sample.controller', function(){

		it('Should list all widgets and respond with 200 OK', function(done){
			var options = {
				method: 'GET',
				url: '/widgets'
			};
			
			server.inject(options, function(response){
				expect(response.statusCode).toBe(200);
				done();
			});
		});

	});

});
