//OpenWeatherMap URL + APPID
//api.openweathermap.org/data/2.5/weather?id=1668399&units=metric&APPID=e3415ebd8f9d067c5f2af6196d4e5a11
var request = require('request');

module.exports = function(lat, lon, callback){
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon +'&units=metric&APPID=e3415ebd8f9d067c5f2af6196d4e5a11';


    if(!lat || !lon) {
        return callback('No location provided!');
    }

    request({
        url: url,
        json: true
    }, function(error, response, body){
        if(error){
            callback("You f'd up something");
        } else {
            callback('It\'s ' + body.main.temp + ' in ' + body.name + '. Bitches!');
        }
    });
};
