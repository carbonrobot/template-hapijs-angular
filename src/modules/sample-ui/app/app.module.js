'use strict';

// placeholder for compiled view templates, needs to be here for unit testing
angular.module('app.templates', []);

// placeholder for themes, needs to be here for unit testing
angular.module('app.themes', []);

// main application module
angular.module('app', [
	'ui.router', 
	'app.templates',
	'app.common',
	'app.themes',
	'app.default',
	'app.signup',
	'app.about'
	]);