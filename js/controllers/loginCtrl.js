app.controller('LoginCtrl', ['LoginService', '$location', '$scope', function(LoginService, $location, $scope) {
	var self = this;
	self.location = '';

	self.submit = function() {
		console.log('User clicked submit with',
			self.location);
	};

	self.getLocation = function() {
	 	LoginService.getLocation(self.login);
	};

	self.login = function(loc) {
		self.location = loc
		$location.path("/home") // scope issue possibly digest issue
		$scope.$apply()
		
	};




}])
