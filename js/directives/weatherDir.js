app.directive('currentWidget', [function() {
	return {
		templateUrl: 'partials/current.html',
		restrict: 'AE',
	};
}])
.directive('forcastWidget', [function() {
	return {
		templateUrl: 'partials/forcast.html',
		restrict: 'AE',
	};
}]);