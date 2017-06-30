var data;

var results = data.results;
var shipListElement = document.getElementById('shiplist'); //shiplist in HTML is an empty list
shipListElement.innerHTML = "";

//forEach is made to loop th    rough arrays

results.forEach(function (ship){
var listItem = document.createElement('a');
link.setAttribute('href', ship.url);
link.innerHTML = ship.name;
listItem.appendChild(link);
shipListElement.appendChild(listItem);


//create elements for list...li and a

//set href attribute to the URL of the ship

//set the contents of the link element to the name of the ship

//add the link to the list item

//and the list item to the list

});


function fetchShips() {
    var url = "//swapi.co/api/starships/";
    //call getJSON function to get the list of ships from the api
    getJSON(url).then(function (data) {
        //stuff that should happen after the request is done.
        console.log(data);

    });
}


function getShipDetails(url) {
    //call getJSON functions for the provided url
    getJSON(url).then(function (data) {
            console.log(data);
                    });

}







fetchShips();

//data.results[0].name or
//data.results[0].url
