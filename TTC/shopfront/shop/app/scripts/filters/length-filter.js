/*
---
Author: Alexander Adu-Sarkodie
name: lengthFilter
...
*/
	'use strict';

	var lengthFilter = function() {
		return function(collection) {
			return collection ? collection.length : null;
		};
	};

	angular.module('myApp').filter('lengthFilter', lengthFilter);
