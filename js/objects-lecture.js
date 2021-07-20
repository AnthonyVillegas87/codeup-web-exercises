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
        time: "3:00",
        temp: 75,
        feels_like:82

    },
    {
        time: "10:00",
        temp: 81.26,
        feels_like: 89.24
    },
    {
        time: "9:00",
        temp: 83.26,
        feels_like: 90.24

    }
]

// for(var i = 0; i < hourlyWeather.length; i++) {
//     console.log("At " + hourlyWeather[i].time + " the temperature will be " + hourlyWeather[i].temp + " and feels like " + hourlyWeather[i].feels_like);
// }

hourlyWeather.forEach(function (hourlyForecast,index) {
    console.log("At " + hourlyForecast.time + " the temperature will be " + hourlyForecast.temp + " and feels like " + hourlyForecast.feels_like)
})


var sanAntonio = {
    latitude: 29.423017,
    longitude: -98.48527,
    timezone: "America/Chicago",
    currentWeather: {
        humidity: 77,
        temp: 90.37,
        feels_like: 99.05,
        clouds: 75
    }
}

console.log("The San Antonio time zone is " + sanAntonio.timezone + " and the current humidity is " + sanAntonio.currentWeather.humidity)



var texasInfo = [
    {
    latitude: 29.423017,
        longitude: -98.48527,
    timezone: "America/Chicago",
    currentWeather: {
        humidity: 77,
        temp: 90.37,
        feels_like: 99.05,
        clouds: 75
     }
    },
    {
        city: "Houston",
        latitude: 29.7915,
        longitude: -95.093,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 68,
            temp: 87.44,
            feels_like: 97.7,
            clouds: 75
        }
    }
]

console.log("The temperature in " + texasInfo[1].city + "is" + texasInfo[1].currentWeather.temp);

var fighter = {
    name: "Ryu",
    hitPoints: 18,
    maxDamage: 8,
    attack: function() {
        console.log(this.name + " attacks!")
    }
}

var monster = {
    name: "Goblin",
    hitPoints: 8,
    maxDamage: 6
}

fighter.attack();