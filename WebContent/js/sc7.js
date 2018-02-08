var myApp = angular.module("myModule", []).controller("myController", function($scope) {
	
	var technologies = [
		{name: "Java", likes: 0, dislikes: 0},
		{name: "AngularJS", likes: 0, dislikes: 0},
		{name: "Spring", likes: 0, dislikes: 0},
		{name: "Struts", likes: 0, dislikes: 0}
	];
	
	$scope.technologies = technologies;
	
	$scope.incrementLikes = function(technology) {
		technology.likes++;
	};
	
	$scope.incrementDislikes = function(technology) {
		technology.dislikes++;
	};
});