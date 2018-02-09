//sc12.js
var myApp = angular.module("myModule", []).controller("myController", function($scope) {
	
	var employees = [
		{name: "Shamim", gender: "Male", city: "Rangpur", salary: 55000},
		{name: "Shahin", gender: "Male", city: "Rangpur", salary: 70000},
		{name: "Shihab", gender: "Male", city: "Mirpur", salary: 49000},
		{name: "Sohan", gender: "Male", city: "Barishal", salary: 68000},
		{name: "Urmi", gender: "Female", city: "Noakhali", salary: 55000},
		{name: "Parvez", gender: "Male", city: "Uttora", salary: 50000}
	];
	
	$scope.employees = employees;
	
	$scope.search = function(item) {
		if($scope.searchText == undefined){
			return true;
		}else {
			if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
					item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1){
				return true;
			}
		}
		
		return false;
	}
});