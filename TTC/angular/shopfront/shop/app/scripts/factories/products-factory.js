/*
---
Author: Alexander Adu-Sarkodie
name: ProductsFactory
...
*/

  'use strict';

	var ProductsFactory = function($q, $http) {

		var ProductsFactory = {};

		/*
		 * Private Functions
		 */
		function _request() {

			var _deferred = $q.defer();
			_promise = _deferred.promise;

			$http({
				method: 'GET',
				url: 'datas/product-datas.js',
			}).success(function(datas) {
				ProductsFactory.products = datas;
				_deferred.resolve(ProductsFactory.products);
			}).error(function(data, status) {
				_deferred.reject(status);
			});

			return _deferred.promise;

		};

		/*
		 * Getters
		 */
		ProductsFactory.get = function() {
			// return a promise with datas: if datas were fetched previously we return the array immediately,
			// if datas are currently fetched but not yet loaded, we return the promise (this avoid multiple requests),
			// otherwise, we wait for the request result
			return $q.when( ProductsFactory.products || _promise || _request() ); 
		};

		ProductsFactory.getItem = function(id) {
			for(var i = 0, l = ProductsFactory.products.length; i<l; i++){
				if(ProductsFactory.products[i].uid === id){
					return ProductsFactory.products[i];
				}
			}
			return null;
		};

		ProductsFactory.getCategories = function() {
			var _filtered = [];
			angular.forEach(ProductsFactory.products, function(product) {
				if(_filtered.indexOf(product.category) === -1){
					_filtered.push(product.category);
				}
			});
			return _filtered;
		};

		/*
		 * Private vars
		 */
		var _promise = null;

		/*
		 * Public vars
		 */
		ProductsFactory.products = null;

		return ProductsFactory;

	};

	angular.module('myApp').factory('ProductsFactory', ['$q', '$http', ProductsFactory]);

