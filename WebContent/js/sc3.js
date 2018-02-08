//module, controller and register in one line using method chaining
var myApp = angular.module("myModule", []).controller("myController",
		function($scope) {
			var student = {
				firstName : "Shihab",
				lastName : "Sharar",
				gender : "Male"
			};
			$scope.student = student;
		});