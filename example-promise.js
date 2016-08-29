var request = require('request');

// function doPromise(data){
//     return new Promise(function(resolve, reject){
//         resolve("Everything is okay!");
//         reject({
//             error: 'something fd up'
//         });
//     });
// }
//
// doPromise(false).then(function(data){
//         console.log(data);
//     }, function(error){
//         console.log(error);
// });


function getWeather(location){
    return new Promise(function(resolve, reject){
        var encodedLocation = encodeURIComponent(location);
        var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation  +'&units=metric&APPID=e3415ebd8f9d067c5f2af6196d4e5a11';



        if(!location) {
            return reject('No location provided!');
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
}

getWeather('new york').then(function(currentWeather){
    console.log(currentWeather);
}, function(error){
    console.log(error);
});
