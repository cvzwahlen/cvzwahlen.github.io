// Current Location Scripts
(function () {

    var status = document.getElementById('status');

    (function getGeoLocation() {
//        status.innerHTML = 'Getting Location...';
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    }());

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Get the data from the wunderground API
    function getData(lat, long) {
        var url = "http://api.wunderground.com/api/0e7a768163a0e592/geolookup/conditions/q/" +lat+ "," + long +".json"; //change this to the correct URL for wunderground
        getJSON(url).then(function (data) {
            console.log(data);
            document.getElementById("currentLocation").innerHTML=data.location.city + ", " + data.location.state;
//            document.getElementById("summary").innerHTML=data.current_observation.weather;
            document.getElementById("temperature").innerHTML=data.current_observation.temp_f+ "&#8457";
            document.getElementById("feelsLike").innerHTML="Feels Like: " + data.current_observation.feelslike_f+ "&#8457";
            document.getElementById("precipitation").innerHTML="Precipitation: " +data.current_observation.precip_1hr_in;
            document.getElementById("wind").innerHTML="Wind: " + data.current_observation.wind_string;
            document.getElementById("high").innerHTML="Wind Chill: " + data.current_observation.windchill_f;

            //add the code necessary here to update the page with all of the correct data points.

            //this line will cause the Loading message to fade away.
//            document.getElementById("cover").classList.add('fadeout');

        });


    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}());
