//create a module. here [] is dependency
var myApp = angular.module("myModule", []);

//create the controller. here scope is an angular object
var myController1 = function($scope) { //anonymous function
	$scope.message1 = "AngularJS Tutorial 1";
}

//register the controller with the module
myApp.controller("myController1", myController1);

//creating the controller and registering with the module
myApp.controller("myController2", function($scope) {
	$scope.message2 = "AngularJS Tutorial 2";
});