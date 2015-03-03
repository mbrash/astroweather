app.controller('MainCtrl', ['$http', function($http) {
    var self = this;
    self.data = [];
    self.forecast = [];


    $http.get('http://api.openweathermap.org/data/2.5/weather?lat=27.9710&lon=-82.4650&units=imperial', {
        apiKey: '410046c4d0a1b7158297e8bc5957082f'
    }).success(function(request) {


        var data = request;
        self.data.city = data.name;
        self.data.sunset = data.sys.sunset;
        self.data.temp = data.main.temp;
        self.data.wind = data.wind.speed;
        self.data.humidity = data.main.humidity;
        self.data.cloud = data.clouds;

        console.log(data);
    });

    $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=27.9710&lon=-82.4650&cnt=10&mode=json&units=imperial', {
        apiKey: '410046c4d0a1b7158297e8bc5957082f'
    }).success(function(response) {

     console.log(response);

        for (i=0; i<7; i++) {
        	self.forecast[i] = {};
        	self.forecast[i].hi = response.list[i].temp.max;
        	self.forecast[i].low = response.list[i].temp.min;
        	self.forecast[i].icon = response.list[i].weather[0].icon;
        	self.forecast[i].description = response.list[i].weather[0].description;
        	self.forecast[i].date = response.list[i].dt;
    		
    		
        }
      

    });
    
// var now = new Date();
// alert(Math.round(new Date().getTime()/1000.0));

var myDate = new Date(1425414194 * 1000);
console.log(myDate.getDay());

}]);


