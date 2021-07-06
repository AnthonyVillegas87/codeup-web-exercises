"use strict";
const myName = "Anthony";

//alert
//alert("Hi, my name is " + myName + ".")

//confirm
// var userDecision = confirm("Are you a new user?");
// console.log(userDecision);
//
// if (userDecision === true ) {
//     alert("Nice to meet you!")
// } else {
//     alert("Oh no, your loss!");
//}

//prompt

var currentSpeedMph = 65;
var plannedSpeedMph = prompt("How fast are we going?")
var distanceLeftInMiles = prompt("How many miles are you from your destination?");
var timeToDestinationAtCurrentSpeed = (distanceLeftInMiles/currentSpeedMph) * 60;
var timeToDestinationAtPlannedSpeed = (distanceLeftInMiles/plannedSpeedMph) * 60;
var timeGain = timeToDestinationAtCurrentSpeed - timeToDestinationAtPlannedSpeed;
var minutesGained = Math.floor(timeGain);
var seconds = Math.round((timeGain - minutesGained) * 60);
console.log(`If you drive at ${plannedSpeedMph} mph, you will arrive ${minutesGained} minutes and ${seconds} seconds earlier`);