/*global  $, Skycons*/
//global , $ en skycons zijn includes 
// self invoking anonymous function
// scope 
//JSON structuur voor opbouwen.
(function () {
    //use strict geen variabelen gebruiken als die niet gedeclareerd is.
    'use strict';
    
    var App = {
        //variables
        APIKEY: "3f179d6662d9be62cfeacdbee55282f3",
        lat: "",
        lng: "",
        
        init: function () {
            //kickstart the app
            App.getLocation();
        },
        getLocation: function () {
            //get current users position
            navigator.geolocation.getCurrentPosition(App.foundPosition);
        },
        foundPosition: function (pos) {
            // found the current user position
            
            //just an alert to check that it worked
            //window.alert(pos.coords.latitude);
            
            //stel deze variabele gelijk aan deze fucntie 
            App.lat = pos.coords.latitude;
            App.lng = pos.coords.longitude;
            App.getWeather();
        },
        getWeather: function () {
            // get the current weather for my location
            var url = "https://api.forecast.io/forecast/" + App.APIKEY + "/" + App.lat + "," + App.lng;
            
            //JSONP, via Ajax methode
            window.jQuery.ajax({
                url: url,
                dataType: "jsonp",
                success: function (data) {
                   // console.log(data);
                    $(".weather-summary").text(data.currently.summary);
                }
            });
            
        }
        
    };
    
    App.init();
    
}());