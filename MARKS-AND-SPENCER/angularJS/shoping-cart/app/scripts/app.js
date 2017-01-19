angular.module('myApp', ['ngRoute']);

/*
---
name: RouteConfig
...
*/
(function(global, doc, undefined){

	'use strict';

	var RouteConfig = function($routeProvider) {

		$routeProvider
		.when('/home', {
			templateUrl: 'views/products-view.html',
			controller: 'ProductsController',
			controllerAs: 'ProductsCtrl'
		})
		.when('/product/:itemId', {
			templateUrl: 'views/item-view.html',
			controller: 'ItemController',
			controllerAs: 'ItemCtrl'
		})
		.when('/shopping-bag', {
			templateUrl: 'views/shopping-list-view.html',
			controller: 'ShoppingListController',
			controllerAs: 'ShoppingList'
		})
		.when('/checkout', {
			templateUrl: 'views/checkout-view.html'
		})
		.otherwise({
			redirectTo: '/home'
		});

	};

	angular.module('myApp').config(['$routeProvider', RouteConfig]);

})(window, document);
