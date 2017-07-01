function getJSON(url) {
    return fetch(url)
        .then(function (response){
        return response.json();
    })
        .catch(function(error){
        console.log(error);
    });
}

function fetchShips(){

}



function fetchShips() {
    var url = "//swapi.co/api/starships/";
    getJSON(url).then(function (data){


        var results = data.results;
        var shipListElement = document.getElementById('shiplist');

        shipListElement.innerHTML = "";

        results.forEach(function (ship){

            var listItem = document.createElement('li');
            var listItem = document.createElement('a');

            link.setAttribute('href', ship.url);
            link.addEventListener('click', function(event){
                event.preventDefault();
                getShipDetails(ship.url);
            })

           link.innerHTML = ship.name;

            listItem.appendChild(link);

            shipListElement.appendChild(listItem);

    });


})













function getShipDetails(url) {
    //call getJSON functions for the provided url
    getJSON(url).then(function (data) {
            console.log(data);
                    });

}







fetchShips();


//Lynnette, Breena, Casey

//data.results[0].name or
//data.results[0].url
