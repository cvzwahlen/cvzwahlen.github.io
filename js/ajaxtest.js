//var mydata = JSON.parse(data);
//alert(mydata[0].name);
//alert(mydata[0].age);
//alert(mydata[1].name);
//alert(mydata[1].age);



function ajaxFromLocalJson (locationToGrab) {

    getJSON("../weather/weather.json").then(function (data){
        console.log(data);
        var location = data["locationToGrab"]["City"];
        var state = data["locationToGrab"]["State"];
        var state = data["locationToGrab"]['High'];

        console.log('Current temperature in' + location + "is: " temp_f);
    });


}
