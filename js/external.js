"use strict";
const myName = "Anthony Villegas";

//alert
alert("Hi, my name is " + myName + ".")

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

// var currentSpeedMph = 65;
// var plannedSpeedMph = prompt("How fast are we going?")
// var distanceLeftInMiles = prompt("How many miles are you from your destination?");
// var timeToDestinationAtCurrentSpeed = (distanceLeftInMiles/currentSpeedMph) * 60;
// var timeToDestinationAtPlannedSpeed = (distanceLeftInMiles/plannedSpeedMph) * 60;
// var timeGain = timeToDestinationAtCurrentSpeed - timeToDestinationAtPlannedSpeed;
// var minutesGained = Math.floor(timeGain);
// var seconds = Math.round((timeGain - minutesGained) * 60);
// console.log(`If you drive at ${plannedSpeedMph} mph, you will arrive ${minutesGained} minutes and ${seconds} seconds earlier`);

//alert
//alert("Welcome to my Website!");

/// Favorite color

 // var userColor = prompt("What is your favorite color?");
 //    alert(`${userColor} is my favorite color too!`);
 //

//// Movie Rentals

// let littleMermaid = prompt("Little Mermaid: How many days would you like to rent this title?");
// let brotherBear = prompt("Brother Bear: How many days would you like to rent title?");
// let hercules = prompt("Hercules: How many days would you like to rent this title?");
//
// let pricePerDay = 3;
//
// var totalRentCost = (parseInt(littleMermaid) + parseInt(brotherBear) + parseInt(hercules)) * parseInt(pricePerDay);
//
// alert(`Your total cost for your rentals is $${totalRentCost}. Thank you!`)



//// Jobs Worked Weekly Total

// let googleHours = prompt("How many hours did you work at Google?");
// let amazonHours = prompt("How many hours did you work at Amazon?");
// let facebookHours = prompt("How many hours did you work at Facebook?");
//
// let googleHourlyRate = 400;
// let amazonHourlyRate = 380;
// let facebookHourlyRate = 350;
//
// let googlePayment = googleHours * googleHourlyRate;
// let amazonPayment = amazonHours * amazonHourlyRate;
// let faceBookPayment = facebookHours * facebookHourlyRate;
//
// alert(`Your total payment for Google is: $${googlePayment}!`);
// alert(`Your total payment for Amazon is: $${amazonPayment}!`);
// alert(`Your total payment for FaceBook is: $${faceBookPayment}!`);
//
// let weeklyTotal = alert(`Your weekly total is $${googlePayment + amazonPayment + faceBookPayment}! Great Work!`)


/// Class Enrollment

// let classFull = confirm("Is class full?");
// let scheduleConflict = confirm("Does this class conflict with your schedule?");
//
// if (classFull === true || scheduleConflict === true) {
//     alert("Sorry, you  may not enroll!")
// } else {
//     alert("Congratulations! You have enrolled!")
// }

/// Product Offer
let numberOfItems = parseFloat(prompt("How many items are you purchasing?")); //number
let offerExpired = confirm("Has discount expired for this product?"); // boolean
let premiumMember = confirm("Are you a premium member?"); // boolean

let numberForDiscount = 2

const displayMessage = (premiumMember, numberOfItems, offerExpired) => {
    let offer = premiumMember === true || (numberOfItems >= numberForDiscount && offerExpired === false)
    if(offer) {
      return alert("Congratulations, you qualify for a discount!")
    }
    //displayMessage()
 }

displayMessage(premiumMember, numberOfItems, offerExpired);












