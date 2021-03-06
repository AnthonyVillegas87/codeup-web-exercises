"use strict"
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 function

 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// function sayHello(name) {
//     return `Hello ${name}`
// }
// sayHello("anthony")

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
// let helloMessage = sayHello("Draco")
// console.log(helloMessage)
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
// let myName = "Anthony"
// console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// function isTwo(num) {
//     return num === 2
// }
//
// isTwo(random)
// console.log(isTwo(random))

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
//var random = Math.floor((Math.random() * 200) + 1);
// function calculateTip(tip, bill) {
//     return bill * tip
    //return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
// }
// console.log(calculateTip(.15, 200))

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// let bill = prompt("How much is your bill total?");
// let tip = prompt("How much would you like to tip?");
// function calculateTip(bill, tip) {
//     let gratuityTotal = tip * bill
//     return gratuityTotal.toFixed(2)
//
//
// }
//
//
//     alert("Your tip total is $ " + calculateTip(bill, tip))

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 var price = 100;
 var dicount = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// var price = 100;
// var discount = .2;
// function applyDiscount(price, discount) {
//     return price - price * discount
// }
//
// console.log(applyDiscount(price, discount))


/////////// Function drills

function isOdd(num) {
    return !!(num % 2);
}

console.log(isOdd(1))
console.log(isOdd(2))

function isEven(num) {
    return num % 2 == 0;
}
console.log(isEven(1))
console.log(isEven(2))

function identity(input) {
    return input
}
 console.log(identity(3 <= 3));

function isFive(input) {
    return input === 5
}

console.log(isFive(5))

// function addFive(input) {
//     return input + 5
// }
//
// console.log(addFive())

// function isMultipleOfFive(input) {
//     if(input % 5 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(isMultipleOfFive(2))

// function isThree(input) {
//     return input === 3
// }
//
// console.log(isThree(3))

// function isMultipleOfThree(input) {
//     if(input % 3 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(isMultipleOfThree(4))

// function isMultipleOfThreeAndFive(input) {
//     if(input % 3 === 0 || input % 5 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(isMultipleOfThreeAndFive(19))

// function isMultipleOf(target, n) {
//     if(target % n === 0) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(isMultipleOf(5, 3))

// function isTrue(boolean) {
//     return boolean === true
// }
//
// console.log(isTrue(true))

// function isFalse(boolean) {
//     return boolean === false
// }

//  function isTruthy(input) {
//      return !!input === true
// }
//
// isTruthy()

// function isFalsy(input) {
//     return !input === false
// }
// isFalsy()

// function isVowel(letter) {
//     return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'
// }
//
// isVowel()

// function isConsonant(letter) {
//     if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
//         return (`${letter} is a vowel`)
//     } else {
//         return (`${letter} is a consonant`)
//     }
//
// }
//
// isConsonant()


// function isArray(input) {
//      return Array.isArray()
// }
//
// isArray()
//
// function isString(input) {
//      return typeof input === "string";
// }
// isString()
//
// function isNotString(input) {
//      return typeof input !== "string";
// }
// isNotString()
//
// function isEmptyString(input) {
//      return input === '';
// }
// isEmptyString()
//
// function isNotANumber(input) {
//      return typeof input !== "number";
// }
// isNotANumber()
//
// function isNegative(input) {
//      return input < 0;
// }
//
// isNegative()
//
// function isPositive(input) {
//      return input > 0
// }
// isPositive()
//
// function isZero(input) {
//      return input === 0 || input === "0";
// }
// isZero()
//
// function isUpperCase(input) {
//      if(!isString(input)) return false;
//      return input.toUpperCase();
// }
// isUpperCase()


function hasTwo(num) {
     return num === 2
}

let array = [15, 10, 3, 2, 15, 2, 15].filter(hasTwo)
console.log(array)