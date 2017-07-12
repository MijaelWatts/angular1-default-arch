(function() {
	'use strict';

	angular.module('app').controller('indexCtrl', ['$scope', 'indexFcty', 'wsSvc', function($scope, indexFcty, wsSvc) {
		$scope.init = function() {
			$scope.jelouWorld = "Hello world using angular js";
			indexFcty.dummyFcty();
			wsSvc.dummySvc().then(function(response) {
					console.log("Promise call after WS call.")
				}
			);
		};

		$scope.init();
	}]);
})();