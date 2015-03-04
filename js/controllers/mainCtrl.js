app.controller('MainCtrl', [function(){
	var self = this;


	// testing data
	self.status = "excellent";
	self.data = {
		"city": "houston",
		"sunset": "6:32",
		"temp": "74F",
		"wind": "wind: 23mph",
		"humidity": "humidity: 10%",
		"percipitation": "percipitation: 4%",
		"visibility": "visibility: 7miles",
		"cloud": "cloud cover: 26%",
	}

	self.forcast = [
		{
			"day": "mon",
			"icon": "statusIcon.png",
			"low": "50F",
			"hi": "80F"
		},
		{
			"day": "tue",
			"icon": "statusIcon.png",
			"low": "50F",
			"hi": "86F"
		},
		{
			"day": "wed",
			"icon": "statusIcon.png",
			"low": "50F",
			"hi": "80F"
		},
		{
			"day": "thu",
			"icon": "statusIcon.png",
			"low": "50F",
			"hi": "80F"
		},
		{
			"day": "fri",
			"icon": "statusIcon.png",
			"low": "50F",
			"hi": "80F"
		},
		{
			"day": "sat",
			"icon": "statusIcon.png",
			"low": "50F",
			"hi": "80F"
		},
		{
			"day": "sun",
			"icon": "statusIcon.png",
			"low": "50F",
			"hi": "80F"
		},
	]


}])