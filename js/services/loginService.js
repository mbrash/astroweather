app.factory('LoginService', [function(){
	var self = this;
	self.pos = {}

	self.getLocation = function(callback) {
		// get user latitude and longitude
		navigator.geolocation.getCurrentPosition(function(pos){
			self.pos = {
				lat: pos.coords.latitude,
				lon: pos.coords.longitude	
			}

			if (!$.isEmptyObject(self.pos)) {
				callback(self.pos)
			} else {
				console.log("Error getting location")
			}
		})		
	}

	return self;
}])