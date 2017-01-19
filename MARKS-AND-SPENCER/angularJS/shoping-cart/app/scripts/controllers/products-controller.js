/*
---
name: ProductsController
...
*/
(function(global, doc, undefined){

	'use strict';

	var ProductsController = function(ProductsFactory) {

		/*
		 * Request Handlers
		 */
		var _onRequestSuccess = angular.bind(this, function() {
			this.products = ProductsFactory.products;
			this.categories = ProductsFactory.getCategories();
		});

		var _onRequestError = angular.bind(this, function(status) {
			this.errorMessage = 'Datas fetch error (code error: ' + status + ')';
		});

		/*
		 * Initialization
		 */
		var _init = function() {
			ProductsFactory.get().then(_onRequestSuccess, _onRequestError);
		};

		// models
		this.products = [];
		this.categories = [];
		this.errorMessage = false;

		_init();

	};

	angular.module('myApp').controller('ProductsController', ['ProductsFactory', ProductsController]);


})(window, document);

