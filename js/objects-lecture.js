"use strict"
var currentWeather = {
    humidity: 70,
    temp: 83.42,
    feels_like: 88.79,
    clouds: 74
}

//// IDENTIFY OBJECT W/ KEY:VALUE PAIR

// console.log(currentWeather["temp"]);
// var whatImInterestedIn = "humidity";
// console.log(currentWeather[whatImInterestedIn]);

console.log("The weather outside is " + currentWeather.temp);
function multiplyByNineFifths(number) {
    return number * (9 / 5);
}
function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
}
console.log("The weather outside is " + currentWeather.temp + "F, " + getFahrenheit(currentWeather.temp).toFixed(2) + "C");




//////  FOR IN LOOP /////
for(var prop in currentWeather) {
    console.log(prop + ": " + currentWeather[prop]);
}

/////  ADD PROPERTIES TO EXISTING OBJECTS
currentWeather.uvIndex = 9.79;

//// DELETE PROPERTIES FROM OBJECTS
delete currentWeather.uvIndex;

var hourlyWeather = [
    {
        time: 3,
        temp: 75,
        feels_like:82

    }
]