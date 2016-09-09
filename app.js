var location = require('./location.js');
var weather = require('./weather.js');
var weatherByLatLon = require('./weatherByLatLon.js');


var argv = require('yargs')
    .option('location', {
        alias: 'l',
        demand: false,
        describe: 'Location to fetch weather for',
        type: 'string'
    })
    .help('help')
    .argv;

if (typeof argv.l === 'string' && argv.l.length > 0){
    console.log("Location was provided.");
    weather(argv.l).then(function(currentWeather){
        console.log(currentWeather);
    });
} else {
    console.log('No location was provided.');
    var acquiredLocation = location(
        function(getLocation){
            if (getLocation.city !== "") {
                weather(acquiredLocation, function(weatherCallback){
                    console.log("Weather based on location name: " + weatherCallback);
                });
            }

            argv.l = getLocation.loc;
            var res = argv.l.split(",");
            weatherByLatLon(res[0], res[1], function(weatherCallback){
                console.log("Weather based on location lat/lon: " + weatherCallback);
            });
        }
    );


}
