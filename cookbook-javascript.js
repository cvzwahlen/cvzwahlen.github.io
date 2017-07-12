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
    function getData(cookbook) {
        var url = "cookbook.json";
        getJSON(url).then(function (data) {
            console.log(data);
            document.getElementById("titleHead").innerHTML= "It works";





//            document.getElementById("titleHead").innerHTML=data.Breads.name;
//            document.getElementById("summary").innerHTML=data.current_observation.weather;
//            document.getElementById("currentTemp").innerHTML=data.current_observation.temp_f+ "&#8457";
//            document.getElementById("summary").innerHTML=data.current_observation.weather;
//            document.getElementById("add1").innerHTML="Feels like: " + data.current_observation.feelslike_f + "&#8457";
//            document.getElementById("add2").innerHTML="Wind: " + data.current_observation.wind_string;
//            document.getElementById("add3").innerHTML=data.current_observation.local_time_rfc822;

            //add the code necessary here to update the page with all of the correct data points.

            //this line will cause the Loading message to fade away.
//            document.getElementById("cover").classList.add('fadeout');

        });


    };






    // A function for changing a string to TitleCase
//    function toTitleCase(str) {
//        return str.replace(/\w+/g, function (txt) {
//            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//        });
//    }


getJSON();
getData();

