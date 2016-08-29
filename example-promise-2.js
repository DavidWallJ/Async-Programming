// function doWork(data){
//     return new Promise(function(resolve, reject){
//         setTimeout(function () {
//             if (typeof data === 'boolean' && data === false) {
//                 reject('error message');
//             } else {
//                 resolve('success');
//             }
//         }, 2000);
//     });
// }
//
// doWork(true).then(function () {
//     setTimeout(function(){
//         console.log('The function ran!');
//     }, 2000);
// // the function runs and what happens if it runs successfully is stated
// }).catch(function (error) {
//     console.log(error);
// });
// next what happens if the function fails is stated
// note: i could repeat the function like below
//
// doWork(true).then(function(){
//     console.log("The function ran!");
//     return doWork();
// }).then(function () {
//         console.log('The function ran again!');
//         return doWork();
// }).then(function () {
//         console.log('The function ran again!');
//         return doWork();
// }).catch(function (error) {
//     console.log(error);
// });

function getLocation(location) {
    return new Promise(function(resolve, reject){
        if(typeof location !== 'string' || location === false ){
            reject('error message');
        } else {
            resolve(location);
        }
    });
}

function getWeather(location) {
    return new Promise(function(resolve, reject) {
        resolve("It's 78 in " + location + " .");
    });
}

getLocation('Philly').then(function(location){
    console.log("The location is" + location);
});
