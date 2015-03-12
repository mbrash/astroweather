var app = angular.module("astroWeather", ["ngRoute"])
	.config(['$routeProvider', function($routeProvider){

		$routeProvider.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'login'
		})
		.when('/home', {
			templateUrl: 'views/weather.html',
			controller: 'MainCtrl',
			controllerAs: 'main'
		})
		.otherwise({redirectTo: '/login'});
	}]);


app.loc = ""
app.name = ""