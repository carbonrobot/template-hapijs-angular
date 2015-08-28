describe('api', function(){

	var Hapi = require('hapi'),
		server;

	beforeAll(function(){
		server = new Hapi.Server();
		server.connection({port: 8753});

		// server register any plugins needed
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
