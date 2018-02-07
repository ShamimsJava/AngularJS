///<reference path="angular.js"/>

//create a module. here [] is dependency
var myApp = angular.module("myModule", []);

//create the controller. here scope is angular object
var myController1 = function($scope) {
	$scope.message1 = "AngularJS Tutorial 1";
}

//register the controller with the module
myApp.controller("myController1", myController1);

//creating the controller and registering with the module
myApp.controller("myController2", function($scope) {
	$scope.message2 = "AngularJS Tutorial 2";
	
	//creating a complex object
	var employee = {
			firstName: 'Shamim',
			lastName: 'Sarker',
			gender: 'Male'
	};
	
	//attaching a complex object to the scope
	$scope.employee = employee;
});

//module, controller and register in one line
