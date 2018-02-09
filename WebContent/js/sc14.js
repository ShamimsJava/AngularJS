//sc14.js
var myApp = angular.module("myModule", []).controller("myController", function($scope) {
	
	var employees = [
		{name: "Shamim", gender: "Male", city: "Rangpur", salary: 55000},
		{name: "Shahin", gender: "Male", city: "Rangpur", salary: 70000},
		{name: "Shihab", gender: "Male", city: "Mirpur", salary: 49000},
		{name: "Sohan", gender: "Male", city: "Barishal", salary: 68000},
		{name: "Urmi", gender: "Female", city: "Noakhali", salary: 55000},
		{name: "Parvez", gender: "Male", city: "Uttora", salary: 50000}
	];
	
	var persons = [
		{name: "Shamim", number: 01723795366, gender: "Male", city: "Rangpur", country: "Bangladesh", salary: 55000},
		{name: "Shahin", number: 01723795367, gender: "Male", city: "Dhaka", country: "Bangladesh", salary: 56000},
		{name: "Shihab", number: 01723795368, gender: "Male", city: "Dhaka", country: "Bangladesh", salary: 57000},
		{name: "Sohan", number: 01723795369, gender: "Male", city: "Barishal", country: "Bangladesh", salary: 58000},
		{name: "Urmi", number: 01723795310, gender: "Female", city: "Noakhali", country: "Bangladesh", salary: 59000},
	];
	
	$scope.employees = employees;
	$scope.persons = persons;
	
});