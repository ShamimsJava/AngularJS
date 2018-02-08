//working with ng-repeat directive

var myApp = angular.module("myModule", []).controller("myController", function($scope) {
	var employees = [
		{firstName: "Shamim", lastName: "Sarker", gender: "Male", salary: 55000},
		{firstName: "Sanjida", lastName: "Nasrin", gender: "Female", salary: 50000},
		{firstName: "Ruhul", lastName: "Amin", gender: "Male", salary: 55000},
		{firstName: "Atik", lastName: "Hossain", gender: "Male", salary: 60000},
		{firstName: "Shabib", lastName: "Hasa", gender: "Male", salary: 50000},
		{firstName: "Shahin", lastName: "Rahman", gender: "Male", salary: 70000},
	];
	$scope.employees = employees;
	
//working with nested ng-repeat directive
	var countries = [
		{
			name: "Bangladesh",
			cities: [
				{name: "Dhaka"},
				{name: "Rangpur"},
				{name: "Chittagong"},
			]
		},
		
		{
			name: "India",
			cities: [
				{name: "Delhi"},
				{name: "Mumbai"},
				{name: "Calcatta"},
			]
		},
		
		{
			name: "US",
			cities: [
				{name: "Washington"},
				{name: "Newyork"},
				{name: "Silicon Velley"},
			]
		}
	];
	$scope.countries = countries;
});