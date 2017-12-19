(function() {
	'use strict';

	angular.module('app').controller('indexCtrl', ['$scope', 'indexFcty', 'wsSvc', 'constants', function($scope, indexFcty, wsSvc, constants) {
		$scope.init = function() {
			$scope.jelouWorld = "Hello world using angular js";
			indexFcty.dummyFcty();
			wsSvc.dummySvc().then(function(response) {
					console.log("Promise call after WS call.")
				}
			);

			console.log("A constant being log: " + constants.ARCH);
		};

		$scope.init();
	}]);
})();