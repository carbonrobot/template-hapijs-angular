'use strict';

// placeholder for compiled view templates
angular.module('app.templates', []);

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