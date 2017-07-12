(function() {
	'use strict';
	
	angular.module('app').factory('indexFcty', [function() {
		let dummyFcty = function() {
			console.log("dummyFcty called");
		};

		return{
			dummyFcty : dummyFcty
		}
	}]);
})();