(function() {
	'use strict';

	angular.module('app').service('wsSvc', ['$http', function($http) {
		return{
			dummySvc : function() {
				return $http({
					method : 'GET',
					url    : 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3eb5746733b334285eb72372126b9a08&format=json'
				}).then(function(response) {
					console.log("dummySvc called.");
					return response;
				});
			}
		};
	}]);
})();