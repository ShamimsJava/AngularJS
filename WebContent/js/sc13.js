//sc13.js
var myApp = angular.module("myModule", []).controller("myController", function($scope) {
	
	var employees = [
		{name: "Shamim", gender: 1, city: "Rangpur", salary: 55000},
		{name: "Shahin", gender: 1, city: "Rangpur", salary: 70000},
		{name: "Shihab", gender: 1, city: "Mirpur", salary: 49000},
		{name: "Sohan", gender: 1, city: "Barishal", salary: 68000},
		{name: "Urmi", gender: 2, city: "Noakhali", salary: 55000},
		{name: "Parvez", gender: 3, city: "Uttora", salary: 50000}
	];
	
	$scope.employees = employees;
	
});