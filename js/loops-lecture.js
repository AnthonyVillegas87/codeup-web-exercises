"use strict"


// WHILE LOOP is JavaScripts most basic loop

//  var pizzaSlices = 4;
//
// while(pizzaSlices > 0) {
//     console.log("I'll have a slice!");
//     pizzaSlices = pizzaSlices -1;
//     console.log("Now there's " + pizzaSlices + " slices left");
// }
//
// console.log("There's no more pizza left!");

// Count Up
// var counter = 0;
// while(counter <= 100) {
//     console.log(counter);
//     counter++;
// }

// Count Down
// var counter = 100
// while(counter >= 0) {
//     console.log(counter);
//     counter--;
// }

// var counter = 1;
// var number = 5;
// while (counter <= 5) {
//     number = number * 2;
//     console.log(number);
//     counter++;
// }

// let count = 0;  //variable starts at 0
// while(count < 10) {   // once the expression has executed 10 times the expression becomes false
//     console.log(count);
//     count++;
// }

///ACCUMULATOR VARIABLE TO KEEP & HOLD A RUNNING TOTAL
var total = 0;
var priceOfItem;


while(true) {
    var userInput = prompt("Enter the price of your item: " + "\n " + "Enter STOP end program");
    /// SENTINEL VALUE INTRO
    if(userInput === "STOP") {
        alert("The price of your item was " + priceOfItem);
        break;
    } else {
        priceOfItem = parseFloat(userInput)
        total = total + priceOfItem
        alert("Your total cost is now " + total.toFixed(2));
    }
}



/// NOTE THAT YOU CAN CREATE AN INFINITE LOOP WITH THE SYNTAX :: while(true) ///


///INTRO TO DO/WHILE LOOP


// Get a number between 1 & 6

var number = Math.ceil(Math.random() * 6);
var guess;

do {
    guess = parseInt(prompt("Enter a number between 1 and 6"));
} while (guess !== number);
alert("Your guess of " + guess + " matches the number " + number + "!");

