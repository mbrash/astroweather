app.controller('MainCtrl', ['$http', '$scope', function($http, $scope) {
    var self = this;
    self.day = [];
    self.forecast = [];
    var weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat", "sun"];

    var calcStatus = function(data) {
        var status = ["excellent", "good", "fair", "poor", "bad"]
        var i = 0
        var conditions = []

        // get id from 2 different api's
        if (data.id) {
            id = data.id
            conditions.wind = data.wind.speed
            conditions.humidity = data.main.humidity
        } else if (data.weather[0].id) {
            id = data.weather[0].id
                // conditions.wind = 
            conditions.humidity = data.humidity
        }

        console.log(conditions.humidity)

        // calculate seeing 
        if (id == 800) {
            i = 0; // clear skies
        } else if (id > 800 && id < 900) {
            i = 1 // clouds in sky
        } else if (id > 700 && id < 800) {
            i = 4; // atompshperic conditions
        } else if (id == 500 || id == 600) {
            i = 2; // light snow / rain
        } else if (id == 300 || id == 311) {
            i = 3; // drizzle
        } else if ((id > 300 && id < 600) || (id > 600 && id < 700)) {
            i = 4; // heavy rain snow
        }

        // take in to account other conditions like wind
        if (conditions.humidity > 80) {
            i = i + 2
        } else if (conditions.humidity > 60) {
            i++
        }

        i = Math.min(Math.max(parseInt(i), 0), 4);
        return status[i];
    }


    // ----------------------------------------------
    // get current day weather
   function getCurrentDay(lat, lon){ 

    $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial', {
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
        self.day.status = calcStatus(response);


    });
}

//     // ----------------------------------------------
//     // get 10 day forcast
    function getCurrentForecast(lat, lon){
    $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&cnt=10&mode=json&units=imperial', {
        apiKey: '410046c4d0a1b7158297e8bc5957082f'
    }).success(function(response) {

        for (i = 0; i < 7; i++) {

            // format data
            var day = new Date(response.list[i].dt * 1000)

            // assign data
            self.forecast[i] = {};
            self.forecast[i].day = weekDays[day.getDay()];
            self.forecast[i].hi = Math.floor(response.list[i].temp.max) + "F";
            self.forecast[i].low = Math.floor(response.list[i].temp.min) + "F";
            self.forecast[i].icon = response.list[i].weather[0].icon;
            self.forecast[i].status = calcStatus(response.list[i]);

        };
    });
}
//-------------------------------------------
// GEOCODE CITY/ZIP 


    $http.jsonp('http://dev.virtualearth.net/REST/v1/Locations/tampa?o=json&key=As_cECyOyMmvW0aSQAMF2uUNrhrJnOM__YiS2GoOPQlbAghiqX_fuksTEJI8v_b3&jsonp=JSON_CALLBACK').success(function(response) {
        
        
        var lat = response.resourceSets[0].resources[0].point.coordinates[0];
        var lon = response.resourceSets[0].resources[0].point.coordinates[1];
        getCurrentDay(lat, lon);
        getCurrentForecast(lat,lon);
        }).error(function(data, status , header, config){
         
        })



}]);

//--------------------------------------------------
//  City Autocomplete from Google 




function initialize() {
    var input = /** @type {HTMLInputElement} */ (
        document.getElementById('place'));

    var autocomplete = new google.maps.places.Autocomplete(input, {});
};

google.maps.event.addDomListener(window, 'load', initialize);





// End of Autocomplete
//-------------------------------------------
