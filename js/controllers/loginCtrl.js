app.controller('LoginCtrl', ['LoginService', '$location', function(LoginService, $location) {
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
		console.log("Launch App")
	}

}])