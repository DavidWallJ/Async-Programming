//OpenWeatherMap URL + APPID
//api.openweathermap.org/data/2.5/weather?id=1668399&units=metric&APPID=e3415ebd8f9d067c5f2af6196d4e5a11
var request = require('request');


module.exports = function(location){
    return new Promise(function(resolve,reject){
        var encodedLocation = encodeURIComponent(location);
        var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation  +'&units=metric&APPID=e3415ebd8f9d067c5f2af6196d4e5a11';

        if(!location) {
            reject('No location provided!');
        }

        request({
            url: url,
            json: true
        }, function(error, response, body){
            if(error){
                reject("You f'd up something");
            } else {
                resolve('It\'s ' + body.main.temp + ' in ' + body.name + '. Bitches!');
            }
        });
    });
};
