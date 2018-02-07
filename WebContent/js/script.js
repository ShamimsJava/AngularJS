///<reference path="angular.js"/>

//create a module
var myApp = angular.module("myModule", []);

//create the controller
var myController1 = function($scope) {
	$scope.message1 = "AngularJS Tutorial 1";
}

//register the controller with the module
myApp.controller("myController1", myController1);

//creating the controller and registering with the module
myApp.controller("myController2", function($scope) {
	$scope.message2 = "AngularJS Tutorial 2";
});