var myApp = angular.module("myModule", []).controller("myController", function($scope) {
	var employee = {
		firstName: "Shamim",
		lastName: "Sarker",
		gender: "Male"
	};
	$scope.employee = employee;
});

// with this example I have learned two way data binding