// Locatie
var lat;
var lon;
var googleGeo = new google.maps.Geocoder();
var stad;

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(getPosition, error);
} else {
	alert('Geolocatie werkt niet in je browser');
}


function error() {
	alert('De locatie van de batcave is geheim, we kunnen je niet vinden.');
}
function getPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    codeLatLng(lat, lon);
    w   = new Weather(lat, lon);
}
function codeLatLng(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    googleGeo.geocode({'latLng' : latlng}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                //formatted address
                stad = results[3].formatted_address;
                document.querySelector("body").style.backgroundImage = "url('https://fourtonfish.com/tutorials/weather-web-app/images/default.jpg')";
                document.querySelector("#image-source").setAttribute("href", "https://www.flickr.com/photos/superfamous/310185523/sizes/o/");
            } else {
                alert("Niets gevonden");
            }
        } else {
            alert("GoogleGeo faalde wegens: " + status);
        }
    });
}

// EINDE LOCATIE

// DAGEN
var days = $("a");
days.each(function (day) {
    $(this).on("click", function () {
        weatherData(day - 1);
    });
});


// WEER
var theWeather,
    weatherToday,
    skycons = new Skycons({"color" : "white"}),
    Weather = function (lat, lon) {
        this.lat = lat;
        this.lon = lon;
        check();
    };
function check() {
    if (!localStorage.getItem("weatherdata")) {
        loadData();
    } else {
        if (Date().getTime - localStorage.getItem('time') < 300000) {
            console.log("Data up-to-date");
        } else {
            loadData();
        }
    }
}
function loadData() {
    var url = "https://api.forecast.io/forecast/3f179d6662d9be62cfeacdbee55282f3/" + this.lat + "," + this.lon;
    console.log(url);
    $.ajax({
        url:      url,
        type:     "GET",
        dataType: "jsonp",
    })
        .done(function (data) {
            console.log("Gelukt");
            theWeather = data;
            localStorage.setItem("weatherdata", JSON.stringify(this.theWeather));
            localStorage.setItem("time", new Date().getTime());
            weatherData(0);
        });
    
    weatherData = function (day) {
        weatherToday = this.theWeather.daily.data[day];
        show(weatherToday);
    };
    
    function show(weather) {
        var day      = new Date(weather.time * 1000),
            weekdays = new Array(),
            months = new Array();
        weekdays[0]  = "Zondag";
        weekdays[1]  = "Maandag";
        weekdays[2]  = "Dinsdag";
        weekdays[3]  = "Woensdag";
        weekdays[4]  = "Donderdag";
        weekdays[5]  = "Vrijdag";
        weekdays[6]  = "Zaterdag";
        months[0]    = "Januari";
        months[1]    = "Februari";
        months[2]    = "Maart";
        months[3]    = "April";
        months[4]    = "Mei";
        months[5]    = "Juni";
        months[6]    = "Juli";
        months[7]    = "Augustus";
        months[8]    = "September";
        months[9]    = "October";
        months[10]   = "November";
        months[11]   = "December";
 
        var datenow    = new Date(),
            timenow    = datenow.getHours(),
            nowweather = this.theWeather.hourly.data[timenow],
            weathernow = Math.round((nowweather.temperature - 32) * 5 / 9),
            mintemp    = Math.round((weatherToday.temperatureMin - 32) * 5 / 9),
            maxtemp    = Math.round((weatherToday.temperatureMax - 32) * 5 / 9),
            iconcode = weatherToday.icon;
        console.log(weathernow);
        getIcon(iconcode);

        $("#date")   .text(weekdays[day.getDay()] + " " + day.getDate() + " " + months[day.getMonth()] + " " + day.getFullYear());
        $("#stad")   .text("U bevind zich in de buurt van: " + stad);
        $("#tempnow").text("Het is momenteel: " + weathernow + "°C");
        $("#weather").text(weatherToday.summary);
        $("#mintemp").text(mintemp + "°C");
        $("#maxtemp").text(maxtemp + "°C");
    }
    
    function loadBackground(lat, lon, weatherTag) {
        var script_element = document.createElement('script');

        script_element.src = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0677de6a559772c8cb27dd22219dfa0c&lat=" + lat + "&lon=" + lon + "&accuracy=1&tags=" + weatherTag + "&sort=relevance&extras=url_l&format=json";
        document.getElementsByTagName('head')[0].appendChild(script_element);
    }

    function jsonFlickrApi(data) {
        console.log(data);
        if (data.photos.pages > 0) {
            var photo = data.photos.photo[0];
            document.querySelector("body").style.backgroundImage = "url('" + photo.url_l + "')";
            document.querySelector("#image-source").setAttribute("href", "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id);
        } else {
            document.querySelector("body").style.backgroundImage = "url('https://fourtonfish.com/tutorials/weather-web-app/images/default.jpg')";
            document.querySelector("#image-source").setAttribute("href", "https://www.flickr.com/photos/superfamous/310185523/sizes/o/");
        }
    }
    
    function getIcon(weathr) {
        this.skycons.remove("weatherimage");
        switch (weathr) {
        case "clear-day":
            this.skycons.add(document.getElementById("weatherimage"), Skycons.CLEAR_DAY);
            break;
        case "clear-night":
            this.skycons.add(document.getElementById("weatherimage"), Skycons.CLEAR_NIGHT);
            break;
        case "rain":
            skycons.add(document.getElementById("weatherimage"), Skycons.RAIN);
            break;
        case "snow":
            skycons.add(document.getElementById("weatherimage"), Skycons.SNOW);
            break;
        case "sleet":
            skycons.add(document.getElementById("weatherimage"), Skycons.SLEET);
            break;
        case "wind":
            skycons.add(document.getElementById("weatherimage"), Skycons.WIND);
            break;
        case "fog":
            skycons.add(document.getElementById("weatherimage"), Skycons.FOG);
            break;
        case "cloudy":
            skycons.add(document.getElementById("weatherimage"), Skycons.CLOUDY);
            break;
        case "partly-cloudy-day":
            skycons.add(document.getElementById("weatherimage"), Skycons.PARTLY_CLOUDY_DAY);
            break;
        case "partly-cloudy-night":
            skycons.add(document.getElementById("weatherimage"), Skycons.PARTLY_CLOUDY_NIGHT);
            break;
        default:
            skycons.add(document.getElementById("weatherimage"), Skycons.CLEAR_DAY);
            break;
        }
        this.skycons.play();
    }
}