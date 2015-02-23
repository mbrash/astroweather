// -------------------------------------------------------
// main.js
// -------------------------------------------------------
"use strict";

// fwd decls
var lat,
	lon,
	rememberLocation = false;

// -------------------------------------------------------
// load app 
// -------------------------------------------------------
var initApp = function() {

	if (rememberLocation) {
		// store lat and lon as cookie
		document.cookie="lat="+lat;
		document.cookie="lon="+lon;
		console.log("store")
	}

	console.log("Lat: "+lat+", Lon: "+lon);

	// show app
	$('#welcome').remove();
	$('#overlay').remove();
}


// -------------------------------------------------------
// Get Data from cookie - latitude & Longitude
// -------------------------------------------------------
var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        var tmp = c
        // console.log(tmp)
        c = c.substring(0,3)
        if (c == "lat") {
        	lat = tmp.substring(4, tmp.length )
        } else if (c == "lon") {
        	lon = tmp.substring(4, tmp.length)	
        }
    }

// If previous stored data, launch app
if (lat && lon) {
	if (lat.length > 0 && lon.length > 0){
		initApp()
	}
}


// -------------------------------------------------------
// Listen for remember location
// -------------------------------------------------------
$('#welcome input[type="checkbox"]').on('click', function(){
	rememberLocation = $(this).is(':checked')
})


// -------------------------------------------------------
// Listen for submit location (submit or enter)
// -------------------------------------------------------
$('#welcome').submit(function(event){
	event.preventDefault();
	console.log("submit")

	// check for valid city
})


// for user enter address
// // autocomplete places google api
// // geocode places into city or lat and longitude
// // init app








// -------------------------------------------------------
// Check for geolocation enabled
// -------------------------------------------------------
if (!"geolocation" in navigator) {
	// disabled --> remove find get button
	$("#welcome button").remove();

} else {
	// Listen for get location button
	$('#welcome button').on('click', function(event){
		// stop multiple locations
		$('#welcome button').unbind();
		// show spinner / loader
		// ########################### //

		// get user latitude and longitude
		navigator.geolocation.getCurrentPosition(function(pos){
	  		// remove spinner / loader
	  		// ####################### //

	  		// launch app
	  		lat = pos.coords.latitude
	  		lon = pos.coords.longitude
	  		initApp()
		});
	})		
};





