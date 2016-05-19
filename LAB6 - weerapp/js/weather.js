var Weather = function (lat, lon) {
	this.lat = lat;
	this.lon = lon;
	this.key = "3de8a44fe3a6eb3969672216283e5aeb";
    alert('ja');
};

Weather.loadData = function () {
	var url = "https://api.forecast.io/forecast/" + this.key + "/" + this.lat + "," + this.lon;
	console.log(url);
};