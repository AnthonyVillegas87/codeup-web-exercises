"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(str) {
//     if(str === "blue") {
//         return `${str} is the color of the sky!`;
//     } else if(str === "red") {
//         return `Strawberries are ${str}!`;
//     } else {
//         return `I dont know anything about ${str}`;
//     }
// }
// console.log(analyzeColor("navy blue"))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// function analyzeColor(colors) {
//     if(colors === "blue") {
//         return `${colors} is the color of the sky!`;
//     } else if(colors === "red") {
//         return `Strawberries are ${colors}!`;
//     } else if(colors === "orange") {
//         return `Aren't oranges ${colors}?`;
//     } else if(colors === "yellow") {
//         return `Bananas are ${colors}`;
//     } else if(colors === "green") {
//         return `Granny Smith apples are ${colors}`;
//     } else if(colors === "indigo") {
//         return `Blueberries are ${colors}!`;
//     } else if(colors === "violet") {
//         return `That's the color of a flower!`
//     } else {
//         return `I dont know anything about ${colors}`;
//     }
// }
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let userColor = prompt("Give me the color you like!")
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// function analyzeColor(colors) {
//     switch (colors) {
//         case("blue"):
//             alert("Blue is the color of the sky!");
//             break;
//         case("red"):
//             alert("Strawberries are red!");
//             break;
//         case("orange"):
//             alert("Oranges are orange!");
//             break;
//         case("green"):
//             alert("Granny Smith apples are green!");
//             break;
//         case("yellow"):
//             alert("Bananas are yellow!");
//             break;
//         case("indigo"):
//             alert("Blueberries are indigo!");
//             break;
//         case("violet"):
//             alert("That's the color of a flower!");
//             break;
//         default:
//             alert("I dont know anything about that color");
//     }
// }
// analyzeColor(userColor)

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNum, totalAmt) {
//     if(luckyNum === 0) {
//         return totalAmt
//     } else if(luckyNum === 1) {
//         return luckyNum * .10
//     } else if(luckyNum === 2) {
//         return totalAmt * .25
//     } else if(luckyNum === 3) {
//         return totalAmt * .35
//     } else if(luckyNum === 4) {
//         return totalAmt * .50
//     } else if(luckyNum === 5) {
//         return 0
//     }
// }
//console.log(calculateTotal(5, 200));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//  var luckyNumber = Math.floor(Math.random() * 6);
//
//  let myTotal = prompt("What is your total?");
//  alert("Your lucky number is " + luckyNumber + "!");
//  alert("Before the discount your total was " + myTotal + ".");
//  alert("Your price with the discount is " + calculateTotal(luckyNumber, myTotal));
// function calculateTotal(luckyNumber, myTotal) {
//     if(luckyNumber === 0) {
//        return myTotal
//     } else if(luckyNumber === 1) {
//         return myTotal * .10
//     } else if(luckyNumber === 2) {
//         return myTotal * .25
//     } else if(luckyNumber === 3) {
//         return myTotal * .35
//     } else if(luckyNumber === 4) {
//         return myTotal * .50
//     } else if(luckyNumber === 5) {
//         return 0
//     }
// }

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */



 // const displayMessage = (message = confirm("Would you like to enter a number?")) => {
 //     let answer = parseFloat(prompt("Please enter a number"))
 //   if(!answer) {
 //       alert("Not a number")
 //       displayMessage()
 //   }
 //    if(answer % 2 === 0) {
 //        alert("Your number is even")
 //    } else if (answer % 2 === 1) {
 //            alert("Your number is odd")
 //    }
 //    function myNumber(answer) {
 //        return alert(`Your number plus 100 is  ${answer + 100}` )
 //    }
 //    myNumber(answer)
 //
 //    function negativeOrPositive(answer) {
 //        if(answer < 0) {
 //            return alert(`The number ${answer} you entered is negative`)
 //        } else if(answer > 0) {
 //            return alert(`The number ${answer} you entered is positive`)
 //        }
 //    }
 //    negativeOrPositive(answer)
 // }
 // displayMessage()


// ================================= CONDITIONALS BONUSES

// Bonus 1
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// - Catch any invalid inputs.
// - Write the logic using if/else ifs and then refactor using a switch case

// function favoriteDay(day = prompt("What is you favorite day of the week?!")) {
//     //let weekDay = day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday" || day === "Sunday"
//     if(day === "Monday") {
//         alert(`${day} is the beginning of the week, let's go!!`)
//     } else if(day === "Tuesday") {
//         alert(`${day}, we've got the ball rolling!`)
//     } else if(day === "Wednesday") {
//         alert(`${day} means we're halfway there!!`)
//     } else if(day === "Thursday") {
//         alert(`${day}, take a sigh of relief.`)
//     } else if(day === "Friday") {
//         alert(`TGI${day}!`)
//     } else if(day === "Saturday") {
//         alert(`Put your feet up, its ${day}!`)
//     } else if(day === "Sunday") {
//         alert(`${day}! Let's get ready for the week.`)
//     }
// }
//
// favoriteDay()

//
//     Bonus 2
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator
//


//function userInput(input = parseFloat(prompt("Please enter an input!"))) {

      /// if else statement
    // if(input) {
    //     alert("This is a number!")
    // } else {
    //     alert("This is not a number!")
    // }

    /// Ternary operator
    //input ? alert("This is a number!") : alert("This is not a number");
//}
//userInput()



// Bonus 3
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months
//
//
const seasons = (message = "Select a Season!") => {
   let season = prompt(message)

    // if(!season) {
    //     alert("Invalid!")
    //     //seasons()
    // }
    function winterMonths(season) {
       if(season === "Winter") {
           alert("December, January, & February are in Winter!")
           var month = prompt( "PLease select a month")
       }
       //var month = prompt( "PLease select a month")
        if(month === "December") {
            alert("Christmas is in December")
        } else if(month === "January") {
            alert("MLK day is in January!")
        } else if(month === "February") {
            alert("Groundhog Day is in February!")
        }
    }
    winterMonths(season)

    function springMonths(season) {
       if(season === "Spring") {
           alert("March, April, & May are in Spring!")
          var month = prompt( "PLease select a month")
       }
        //var month = prompt( "PLease select a month")
        if(month === "March") {
            alert("Texas Independence Day is in March")
        } else if(month === "April") {
            alert("Good Friday is April!")
        } else if(month === "May") {
            alert("Memorial Day is in May!")
        }
    }
    springMonths(season)

    function summerMonths(season) {
       if(season === "Summer") {
           alert("June, July, & August are in Summer!")
           var month = prompt("PLease select a month")
       }
       if(month === "June") {
           alert("Juneteenth is in June!")
       } else if(month === "July") {
           alert("Independence Day is in July")
       } else if(month === "August") {
           alert("National Chocolate Chip Cookie Day is in August!")
       }
    }
    summerMonths(season)

    function fallMonths(season) {
       if(season === "Fall") {
           alert("September, October, & November are in Fall")
           var month = prompt("PLease select a month")
       }
       if(month === "September") {
           alert("Labor Day is in September!")
       } else if(month === "October") {
           alert("Halloween is in October!")
       } else if(month === "November") {
           alert("Thanksgiving is in November")
       }
    }
    fallMonths(season)


}
seasons()




// GOLD STAR BONUS
//
// Create a distance unit conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//
//     Prompt the user for a second unit of measurement to convert to.
//
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
//
// Use these conversion functions to make the correct unit conversion
//
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//
//     DOUBLE GOLD STAR BONUS
//
//     Allow unit conversion to metric system units
//






