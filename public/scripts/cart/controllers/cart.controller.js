/**
** cart.controller.js
**
** @description Cart controller, will handle user interaction when buying
**/
(function() {
"use strict";

angular.module("machine.cart")
		.controller('CartController', CartController)
        .config(function($routeProvider) {
            $routeProvider.when('/cart', {
                templateUrl: 'views/cart/index.html',
                controller: 'CartController',
                controllerAs: 'cartVm'
            });
        });
function CartController($scope, $mdToast, $filter) {
	var cartVm= this;

	cartVm.items= [{
		ref: 'kitkat',
		name: 'KitKat',
		price: '0.75',
		choosen: false
	}, {
		ref: 'haribo',
		name: 'Haribo',
		price: '0.45',
		choosen: false
	}, {
		ref: 'toblerone',
		name: 'Toblerone',
		price: '1.00',
		choosen: false
	}];

	cartVm.total=0;
	cartVm.change=0;
	cartVm.received=0;
	cartVm.buyerName='';
	cartVm.buy= _buy;

	/**
	** METHODS
	**/

	/**
	** @description adds an item to the choosen options cart
	**/
	function _buy(received, total) {
		if(total===0) {
			$mdToast.show($mdToast.simple().textContent('Please, choose one product from the list...'))
		} else if(received>=total) {
			cartVm.change=received-total;
			if(cartVm.buyerName!=='') {
				$mdToast.show($mdToast.simple().textContent('Have a nice day, ' + cartVm.buyerName))
				cartVm.buyerName='';
			}

		} else {
			total=$filter('currency')(total, '€');
			$mdToast.show($mdToast.simple().textContent('Not enought received money to buy ' + total));
		}
	}
}	
})();