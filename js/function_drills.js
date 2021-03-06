(function globalScope() {
"use strict"



   // Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
    function hasLowerCase(string) {
       if(typeof string === "string" && string === string.toLowerCase())
        return true;
    }
    console.log(hasLowerCase('strong'));



    //Make a function named isSpace(letter) that returns if a character is a space character
    // function isSpace(letter) {
    //     return letter.indexOf() === `\s`;
    // }
    //
    //
    // console.log(isSpace(" \s"))


//     Make a function named isZero(number)
    function isZero(number) {
        return number === 0;
    }
    console.log(isZero(0));

//     Make a function named notZero(input) that returns true if the input is not zero
    function notZero(input) {
            return !isZero(input);

    }
    console.log(notZero(1));

//     Write a function named lowerCase(string)
    function lowerCase(string) {
        return string === string.toLowerCase();

    }
    console.log(lowerCase("HELLO"));


//     Write a function named double(n) that returns a number times two
    function double(n) {
        return n * 2;
    }
    console.log(double(10));


    //     Write a function named triple(n) that returns a number times 3
    function triple(n) {
        return n * 3;
    }
    console.log(triple(10));


//     Write a function named quadruple(n) that returns a number times 4
    function quadruple(n) {
        return n * 4;
    }
    console.log(quadruple(10));

//     Write a function named half(n) that returns 1/2 of the provided input
    function half(n) {
        return n / 2;
    }
    console.log(half(40));


//     Write a function named subtract(a, b) that returns a minus b
    function subtract(a, b) {
        return  a - b;
    }
    console.log(subtract(10, 20));


//     Write a function named multiply(a, b) that returns the product of a times b
    function multiply(a, b) {
        return a * b;
    }
    console.log(multiply(9, 9));


//     Write a function named divide(a, b) that returns a divided by b
    function divide(a, b) {
        return a / b;
    }

    console.log(divide(20,10));

//     Write a function named remainder(a, b) that returns the remainder after dividing a by b
    function remainder(a, b) {
        return a % b;
    }
    console.log(remainder(10,3));

//     Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
    function modulo(a, b) {
        return remainder(a, b);
    }
    console.log(modulo(15,5));

//     Write a function named cube(n) that returns n * n * n
    function cube(n) {
         return n * n * n
    }
    console.log(cube(10));

//     Write a function named squareRoot(n) that returns the square root of the input
    function squareRoot(n) {
        return Math.sqrt(n);
    }
    console.log(squareRoot(50));


//     Write a function named cubeRoot(n) that returns the cube root of the input
    function cubeRoot(n) {
        return Math.cbrt(n);
    }
    console.log(cubeRoot(12));


//     Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
    function invertSign(number) {
        if(number > 0 || number < 0) {
            return number * -1
        } else
            return false
    }

    console.log(invertSign(3));


//     Write a function named degreesToRadians(number)
    Math.radians = function degreesToRadians(number) {
        return  number * Math.PI / 180;

    }
    console.log(Math.radians(90));

//     Write a function named radiansToDegrees(number)
    function radiansToDegrees(number) {
        return number * 180 / Math.PI;

    }
    console.log(radiansToDegrees(3.14159));

//     Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
    function isBlank(input) {
        if(input === `\n` || input.indexOf(`\s`) || input.includes(`\t`)) {
            return true
        }
        return false
    }
    console.log(isBlank(`hello \n world`));


//         Make a function named trim(string) that removes empty spaces before and after the input.
    function trim(string) {
        return string.trim();
    }
    console.log(trim("     Hello,World       "));


//         Make a function named areEqual(input1, input2) that returns if both inputs have the same value
    function areEqual(input1, input2) {
        if(input1 === input2) {
            return true;
        }
            return false;

    }
    console.log(areEqual(2,4));

//     Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
    function areIdentical(input1, input2) {
        return input1 === input2 ;

    }

    console.log(areIdentical(1,1))

//         Make a function named not(input) returns the input with a flipped boolean
    function not(input) {
        return !input;
    }

    console.log(not(1));

//     Make a function named notNot(input) that the negation of the negation of the input.
    function notNotInput(input) {
        return !not(input);
    }

    console.log(notNotInput(""));

//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
    function and(predicate1, predicate2) {
        return typeof predicate1 === "number" && typeof predicate2 === "number";
    }

    console.log(and(3 ,4));

//     Make a function named or(predicate1, predicate2) that returns the logical operation of OR
    function of(predicate1, predicate2) {
        return typeof predicate1 === "string" || typeof predicate2 === "number";
    }

    console.log(of( 3,"hello"));

//     Write a function called reverseString(string) that reverses a string
    function reverseString(str) {
        var someLetters = "";
        for(var i = str.length - 1; i >= 0; i--) {
            someLetters = someLetters + str[i];
        }
        return someLetters;
    }

    console.log(reverseString("hello"));

//     Make a function named absoluteValue(number) that returns the absolute value of a number.
    function absoluteValue(number) {
        return Math.abs(number);
    }

    console.log(absoluteValue(-23));

//         Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
        function rollDice(sides) {
            return 1 + Math.floor(Math.random() * sides);
        }

    console.log(rollDice(6));


//         Simple Function Drills
//
//     Make a function called returnTwo() that returns the number 2 when called
    function returnTwo() {
        return 2;
    }
//     Test this function with console.log(returnTwo())
    console.log(returnTwo());
//
//         Make a function called sayHowdy() which console.logs the string ???Howdy!???
    function sayHowdy() {
        return "Howdy!";
    }
//
// Test this function by directly calling sayHowdy()
    console.log(sayHowdy());
//
//     Remember this function does not need a defined return value
//
//     Make a function called returnName() that returns the string of your name
    function returnName() {
        return "Anthony";
    }
//
//     Test this function with console.log(returnName())
    console.log(returnName());
//
//         Make a function called addThree() which takes in a number input and returns the number plus 3.
    function addThree(input) {
        return input + 3;
    }
//     Test this function with console.log(addThree(5))
    console.log(addThree(7));
//
//         Make a function called sayString() which returns the string input passed in.
    function sayString(string) {
        return  string;
    }
//     Test this function with console.log(sayString('codeup'))
    console.log(sayString("hello"));
//
//         Challenge Function Drills
//
//     Write a function called identity(input) that takes in an argument called input and returns that input.
    function identity(input) {
        return input;
    }

    console.log(identity(3));
//
//         Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
    function getRandomNumber(min, max) {
        return min + Math.floor(Math.random() * (max-min + 1));
    }

    console.log(getRandomNumber(1, 20));


//
//     Write a function called first(input) that returns the first character in the provided string.
    function first(input) {
        return input[0]
    }

    console.log(first('Hello'));

//
//         Write a function called last(input) that returns the last character of a string
    function last(input) {
        return input[input.length -1];
    }

    console.log(last('Hello'));

//
//     Write a function called rest(input) that returns everything but the first character of a string.
    function rest(input) {

            return  input.substring(1);

    }

    console.log(rest('Hello, World!'));
//
//         Write a function called reverse(input) that takes a string and returns it reversed.
    function reverse(input) {
        return reverseString(input);
    }

    console.log(reverse("olleH"));
//
//         Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
    function isNumeric(input) {
        return !isNaN(parseFloat(input));
    }

    console.log(isNumeric(5));

//
//         Write a function called count(input) that takes in a string and returns the number of characters.

    function count(input) {
        return input.length;
    }

    console.log(count("Hello, World!"));
//
//         Write a function called add(a, b) that returns the sum of a and b
        function add(a, b) {
            return a + b;
        }

    console.log(add(21, 73));
//
//     Write a function called subtract(a, b) that return the difference between the two inputs.
    function subtract(a, b) {
            return a - b;
    }

    console.log(subtract(21, 73));
//
//         Write multiply(a, b) function that returns the product
    function multiply(a, b) {
            return a * b;
    }multiply();

    console.log(multiply(32, 6));
//
//     Write a divide(numerator, denominator) function that returns a divided by b
     function divide(numerator, denominator)  {
            return numerator / denominator;
    }divide();

   // console.log(divide(25,5))
//
//     Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
    function remainder(number, divisor) {
            return number % divisor;
    }

    console.log(remainder(3, 44));
//
//     Write the function square(a) that takes in a number and returns the number multiplied by itself.
    function square(a) {
            return a * a;
    }

    console.log(square(15));
//
//         Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
    function sumOfSquares(a, b) {

            return add(square(a), square(b));
    }

    console.log(sumOfSquares(10,12));
//

//     Write a function called doMath(operator, a, b) that takes 3 parameters.
//     The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
       function doMath(fn, a, b) {
            return fn(a,b);

       }
       doMath(divide, 6, 3);

    // Define a function named isANumber that takes in a value and returns true if the input is numeric or not.
    // Numeric strings are not considered as numbers and should return false.
    function isANumber(number) {
        return typeof number === "number";
    }
    // Define a function named increment that takes in an input and adds 1 to it if the input is numeric.
    // If the input is not numeric, then return false.
    function increment(input) {
        if(isNaN(input) || typeof input === "boolean" ||typeof input === "object") return false
        return parseFloat(input) + 1

    }
    // Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.
    function decrement(input) {
        if(isNaN(input) || typeof input === "boolean" ||typeof input === "object") return false
        return parseFloat(input) - 1
    }
    // Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.
    function getHighestNumber(x, y, z) {
        if(isNaN(parseFloat(x)) || isNaN(parseFloat(y)) || isNaN(parseFloat(z))) {
            return false
        } return Math.max(x,y,z)
    }

    // function num(input) {
    //     return typeof input !== "boolean" && !isNaN(input) // declared function to pass non boolean and NaN input
    // }


    // function getHighestNumber(...args) { // declared function with multiple arguments
    //     if(args.length < 1) return false    // return false IF there are no arguments
    //     for(let i = 0; i < args.length ; i++){ // loop through listed argument given
    //         if(!num(args[i])) return false // verifying number values when loop is passed
    //     }
    //     return Math.max(...args) // returned Math.max method to find highest value in list of arguments
    //                     /// spread OR rest operator
    // }

    // Define a function named parseNumber that parses (converts) a numeric String and returns it's value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.
    function parseNumber(input) {
        return parseFloat(input)
    }

    // Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs.
    // If one or both inputs is not numeric, add should return false.
    function add(num1, num2) {
        if(isNaN(num1) || isNaN(num2) ) return false
        if(typeof num1 === "boolean" || typeof num2 === "boolean") return false
        return parseNumber(num1) + parseNumber(num2)
    }

    // Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second.
    // If either or both inputs are not numeric, multiply should return false.
    function isNumeric(num1, num2) {
        return (!isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2)))
    }
    function multiply(num1, num2) {
        if(!isNumeric(num1, num2)) return false
        return num1 * num2
    }
    // Define a function named square. If the provided input is numeric, square should return the number multiplied by itself.
    // If the input is not numeric, square, should return false.
    function square(input) {
        if(!isANumber(input)) return false
        return input * input

    }
    // Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together.
    // For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.

    function sumOfSquares(num1, num2) {
        if(!isNumeric(num1, num2)) return false
        return square(num1) + square(num2)
    }

    // Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false.
    // If the input is a string, then return true if the string is the same forwards as it is backwards.
    // Return false if the string is different forwards from backwards. Ignore capitalization.

    function isNumericString(input) {
        return input !== '' && typeof input === 'string' && !isNaN(input);
        // return typeof input === 'string' &&
        //     typeof parseFloat(input) === 'number' &&
        //     !isNaN(parseFloat(input));
    }

    function isPalindrome(str) {
        if(!isNumericString(str)) return false

        if( str === 'string') {
            return str.split('').reverse().join('')
        }
    }

    function twoNumberSum(array, targetSum) {
        for(let i = 0; i < array.length; i++) {
            
        }
    }



})();