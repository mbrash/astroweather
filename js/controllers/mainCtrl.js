app.controller('MainCtrl', ['$http', function($http) {
    var self = this;
    self.data = [];
    self.forecast = [];

    //tes update


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



// app.controller('MainCtrl', [function(){
// 	var self = this;


	// // testing data
	// self.status = "excellent";
	// self.data = {
	// 	"city": "houston",
	// 	"sunset": "6:32",
	// 	"temp": "74F",
	// 	"wind": "wind: 23mph",
	// 	"humidity": "humidity: 10%",
	// 	"percipitation": "percipitation: 4%",
	// 	"visibility": "visibility: 7miles",
	// 	"cloud": "cloud cover: 26%",
	// }

	// self.forcast = [
	// 	{
	// 		"day": "mon",
	// 		"icon": "statusIcon.png",
	// 		"low": "50F",
	// 		"hi": "80F"
	// 	},
	// 	{
	// 		"day": "tue",
	// 		"icon": "statusIcon.png",
	// 		"low": "50F",
	// 		"hi": "80F"
	// 	},
	// 	{
	// 		"day": "wed",
	// 		"icon": "statusIcon.png",
	// 		"low": "50F",
	// 		"hi": "80F"
	// 	},
	// 	{
	// 		"day": "thu",
	// 		"icon": "statusIcon.png",
	// 		"low": "50F",
	// 		"hi": "80F"
	// 	},
	// 	{
	// 		"day": "fri",
	// 		"icon": "statusIcon.png",
	// 		"low": "50F",
	// 		"hi": "80F"
	// 	},
	// 	{
	// 		"day": "sat",
	// 		"icon": "statusIcon.png",
	// 		"low": "50F",
	// 		"hi": "80F"
	// 	},
	// 	{
	// 		"day": "sun",
	// 		"icon": "statusIcon.png",
	// 		"low": "50F",
	// 		"hi": "80F"
	// 	},
	// ]


}])

