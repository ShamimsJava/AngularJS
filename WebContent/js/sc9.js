//sc9.js
var myApp = angular.module("myModule", []).controller("myController", function($scope) {
	
	var employees = [
		{name: "Shamim", dateOfBirth: new Date("August 10, 1990"), gender: "Male", salary: 55000.788},
		{name: "Shahin", dateOfBirth: new Date("July 10, 1986"), gender: "Male", salary: 70000},
		{name: "Shihab", dateOfBirth: new Date("July 07, 2013"), gender: "Male", salary: 49000},
		{name: "Sohan", dateOfBirth: new Date("August 10, 1989"), gender: "Male", salary: 68000},
		{name: "Urmi", dateOfBirth: new Date("August 17, 1989"), gender: "Female", salary: 55000},
		{name: "Parvez", dateOfBirth: new Date("August 10, 1991"), gender: "Male", salary: 50000.58}
	];
	
	$scope.employees = employees;
	$scope.sortColumn = "name";
});