/** machine.module.js
**
** @description Application main module configuration
**/
(function() {
"use strict";
angular
    .module('machine',[
    	'ngRoute',
        'ngMaterial',
        'ngAnimate',
    	'machine.cart'
	])
	.config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/cart/index.html',
            controller: 'CartController',
            controllerAs: 'cartVm'
        });
    });
})();