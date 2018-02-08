//create a module. here [] is dependency
var myApp = angular.module("myModule", []);

//creating the controller and registering with the module
myApp.controller("myController", function($scope) {
	
	//creating a complex object
	var employee = {
			firstName: 'Shamim',
			lastName: 'Sarker',
			gender: 'Male'
	};
	
	//attaching a complex object to the scope
	$scope.employee = employee;
});