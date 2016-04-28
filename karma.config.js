module.exports = function(config) {
	config.set({
		basePath: '',

		frameworks: ['jasmine'],

		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/angular-aria/angular-aria.js',
			'bower_components/angular-messages/angular-messages.js',
			'bower_components/angular-material/angular-material.js',
			'public/scripts/cart/machine.cart.module.js',
			'public/scripts/**/*.js',
			'spec/unit/**/*.js'
		],

		exclude: [
			'public/lib/**/*.js',
			'spec/e2e/**/*.js'
		],

		reporters: ['progress'],

		port: 9876,

		colors: true,

		logLevel: config.LOG_INFO,

		autoWatch: true,

		browsers: ['Chrome'],

		singleRun: false,

		concurrency: Infinity
	});
}