var myApp = angular.module("myModule", []).controller("myController",
		function($scope) {
			var country = {
				name : "Bangladesh",
				capital : "Dhaka",
				flag : "images/bd.png"
			};
			$scope.country = country;
		});