/*
---
Author: Alexander Adu-Sarkodie
name: CapitalizeFilter
...
*/
	'use strict';

	var CapitalizeFilter = function() {
		return function(string) {
			if(string){
				return string.charAt(0).toUpperCase() + string.slice(1);
			}
		}
	};

	angular.module('myApp').filter('CapitalizeFilter', CapitalizeFilter);
