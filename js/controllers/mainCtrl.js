app.controller('MainCtrl', ['$http', '$scope', function($http, $scope) {
    var self = this;
    self.day = [];
    self.forecast =[];
    var weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    	
    var calcStatus = function(data) {
    	var status = ["excellent", "good", "fair", "bad", "horrible"]
    	return status[1];
    }


    // ----------------------------------------------
    // get current day weather
    $http.get('http://api.openweathermap.org/data/2.5/weather?lat=27.9710&lon=-82.4650&units=imperial', {
        apiKey: '410046c4d0a1b7158297e8bc5957082f'
    }).success(function(response) {

    	// format data
    	var time = new Date(response.sys.sunset * 1000)
        var hours = time.getHours() - 12
        var minutes = time.getMinutes()

    	// assign data 
        self.day.city = response.name.toLowerCase();
        self.day.sunset = hours + ":" + minutes + "pm";
        self.day.temp = Math.floor(response.main.temp) + "F";
        self.day.wind = "wind: " + response.wind.speed + " mph";
        self.day.humidity = "humidity: " + response.main.humidity + "%";
        self.day.cloud = "clouds: " + response.weather[0].description;
        self.day.icon = response.weather[0].icon;
        self.day.status = calcStatus();
        
        
    });

    // ----------------------------------------------
	// get 10 day forcast
    $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=27.9710&lon=-82.4650&cnt=10&mode=json&units=imperial', {
    apiKey: '410046c4d0a1b7158297e8bc5957082f'
	    }).success(function(response) {
		    for (i=0; i<7; i++) {

		    	// format data
		    	var day = new Date(response.list[i].dt * 1000)
		    
		    	// assign data
		    	self.forecast[i] = {};
		    	self.forecast[i].day = weekDays[day.getDay()];
		    	self.forecast[i].hi = Math.floor(response.list[i].temp.max) + "F";
		    	self.forecast[i].low = Math.floor(response.list[i].temp.min) + "F";
		    	self.forecast[i].icon = response.list[i].weather[0].icon;	
		    	self.forecast[i].status = calcStatus();	    	
		    };
	});

}]);





