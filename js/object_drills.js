// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}

// Exercise 2. Use the following data to create an object named salesReport.
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units
//
// Monthly Sales Report
// Date: 03-17-2015
// Office: Codeup
// ===================================================
// Employee Number, First Name, Last Name, Sales Units
// ***************************************************
// 1, Jane, Janeway, 3
// 3, Tricia, Triciason, 5
// 4, Jeannette, Jeanson, 4
// 5, Charles Emmerson III, Winchester, 2
// 6, Chet, Chedderson, 8
// 7, Chaiam, Chaiamson, 12
// 8, Dale, Dalesinger, 1
// 9, Zig, Ziglar, 50
// 10, Henry, Kissinger, 1
// 11, Arthur Herbert, Fonzarelli, 23
// 12, Betty, Boop, 67

// Exercise 3. On the salesReport object you made, add the following methods.
// getEmployeeCount() should return the total number of employees
// getTotalNumberOfSales() should return the total number of units sold
// getAverageSalesPerEmployee() should return the average units sold per employee


// Exercise 4. Go to https://gist.githubusercontent.com/ryanorsinger/f77e5ec94dbe14e21771/raw/d4a1f916723ca69ac99fdcab48746c6682bf4530/profiles.json
// then copy the JSON and assign it to a variable named profiles.

// Exercise 5. Create an object named profileReport and add the following methods that use the "profiles" JSON data.
//  getProfileCount() should return the total number of profiles
//  getActiveCount() should return the number of active profiles
//  getInactiveCount() should return the number of inactive profiles
//  sumOfAllBalances() should return sum of the balance of all profiles
//  getAverageBalance() should return the average balance per users
//  getLowestBalance() should return the customer name with the lowest balance
//  getHighestBalance() should return the customer name with the highest balance
//  getMostFavoriteFruit() should return the most common fruit
//  getLeastFavoriteFruit() should return the least favorite fruit
//  getTotalNumberOfUnreadMessages() should return the number of unread messages for all users
//  getAverageNumberOfUnreadMessages() should return the average number of unread mesages per user.
//  getAverageAge() should return the average age of all users
//  getGenderCounts() should return gender count of users as an object: example {"m": 23, "f", 32}
//  getAllCompanyNames() should return an array of all companies represented by the users
//  getMostCommonEyeColor() should return the most commonly occuring eye-color.
//  getBalancesForActiveAndNonActive() should return the balance of all non-active accounts vs. the balance of all active accounts?
//     this last method should return an object that looks like {"active-balances": 23000, "inactive-balances": 4000} w/ different numbers.


// Exercise 6. Practice with assignment by reference
// create a variable named person1 with a name property. Assign it a name property.
// Now create a variable named person2 and assign person1 to it.
// Then reassign the name property on person2 with person2.name = "Bob";
// console.log the name property on person 1.
// Why do you think changing person2 altered person1?
// The term for this behavior is assignment by reference.


// Exercise 7. More practice with assignment by reference
// Add the following HTML to your index.html page in this project.
// <input type="text" id="input" name="input">
// now, create a variable named input and assign it document.getElementById("input").
// now run input.value = "Hello" from the JS console. Did you see any HTML change?
// Create a second variable named inputElement.
// var inputElement = document.getElementById("input");
// now, run inputElement.value = "I am altering an object by altering its properties" in your JS console.
// See how both the "input" and "textInput" varialbes are referencing the same underlying HTML element?
// This behavior is another example of "assignment by reference"

```

## OBJECTS BONUSES

// 1. Create a dog object
//
//     The dog object should have properties for:
//
//     - `breed` (string),
//     - `weightInPounds` (number),
//     - `age` (number),
//     - `color` (string),
//     - `sterilized` (boolean),
//     - `shotRecords` (array of objects with properties for date and `typeOfShot`)
//
//     The dog object should have methods to:
//
//     - `bark()` - will console.log "Woof!"
//     - `getOlder()` - will increase age by 1
//     - `fix()` - will set sterile to true if dog sterilized property is false
//     - `vaccinate()` - takes in an argument for the name of the shot and adds a
//       new shot with the current date to the shotRecords array
//
// 1. Expanding on the books object exercise:
//
//     - Add a property `keywords` that contains an array of possible genres the
//       book may be categorized by
//     - Add a boolean property `available` and set it to true
//     - Add a `dateAvailable` property that has a string of the date/time when the
//       book will be available
//     - Add a method `lend()` that...
//         - changes the `available` property to false if it is not already false
//         - sets the `dateAvailable` to a date exactly two weeks from when the
//           `lend()` method is called (to do this, research the JS Date object and
//           use methods from it in your code)
//     Add a method `receive()` that...
//         - changes the `available` property to true
//         - changes the `dateAvailable` property to the string `"now"`
//
// 1. Expanding on the books object exercise:
//
//     - Create an application to take in user input to build the books array of objects.
//     - Allow the user to continue adding books or to finish adding books.
//     - Once the books have been added, output the books array in the console.
//     - Allow a user to delete a book or a group of books by title or author last name
//     - Allow a user to edit a book by index number in the books array
//
//
//
// 1. Define an object called `//jackBox`
//
//     Include properties for...
//
//     - `//triggered` - whether or not the box has been sprung (should be false by
//       default)
//     - `intervalId` - set to null
//     - `//play()` - once called, if triggered is false, console.log one new element
//       in the lyrics array every second after the lyrics, stop the interval, set
//       the triggered property to true, and alert POP!
//     - `windUp()` - once called will stop the play() method and set triggered to
//       false lyrics - an array with the following elements:
//
//             "All a-...",
//             "-round the ...",
//             "mulberry...",
//             "bush, The...",
//             "monkey...",
//             "chased the...",
//             "wea-...",
//             "-sel...",
//             "The monkey...",
//             "stopped to...",
//             "pull up his...",
//             "sock,...",
//             "Pop!...",
//             "goes the...",
//             "wea-...",
//             "-sel."
//
//     When running, current lyrics should also be displayed on the page.
//
// 1. Build a Stop Watch
//
//     Define an object called `stopWatch`.
//
//     Include the following properties...
//
//     - `intervalId`
//     - `count`
//
//     Include the following methods...
//
//     `start()` - starts console logging an increasing count every second
//     `pause()` - pauses counter
//     `reset()` - stops counter and resets count to zero
//
// ---
//
// Coding Challenge Amateur
//
// 1. Write a function that takes in a sentence and returns the length of the
//    longest word.
//
//         "I like going out to parties with friends or watching TV." => 8
//
// 2. Write a function that takes three parameters: a, b, c. Return the boolean
//    true if a^2 + b^2 = c^2, false if not.
//
//         3, 4, 5 => true
//         4, 5, 6 => false
//
// 3. Write a function that takes a string and returns a "title case" string
//
//         "The QUICK brown fox JuMpS ovER the LAZy dog"
//         The Quick Brown Fox Jumps Over The Lazy Dog"
//
// 4. Write a function that returns and object with keys set to the argument passed
//    in and values equal to the types of the corresponding keys. Arguments will be
//    type "number", "string", or "boolean".
//
//         // input
//         ["hey", 1, "Jeffrey wants to goto the store", false]
//         // output
//         {
//           hey: "string",
//           1: "number",
//           "Jeffrey wants to goto the store": "string",
//           false: boolean
//         }
//
// 5. Write a function that takes two strings as input and returns true or false
//    depending on whether they are anagrams(contain exactly the same letters).
//    Only lowercase letters will be passed.
//
//         "overcast", "overacts" => true
//         "Jimbo", "Jason" => false


// 1. Write a function, `filterNumbers()` that takes in an array of mixed data
// types and returns an array of only the numbers type in ascencding order.
//
//     Example input: `["fred", true, 5, 3]`
// Example output: `[3, 5]`
//
// 1. Write a function, `getOlder()` that takes in array of dog objects and
// increases the value of each object's `age` property by 1.
//
// Example input:
//
//     [
//         {
//             name: "Chompers",
//             breed: "Pug",
//             age: 7
//         },
//         {
//             name: "Freddy",
//             breed: "Lab",
//             age: 4
//         },
//         {
//             name: "Mr. Pig",
//             breed: "Mastif",
//             age: 10
//         }
//     ]
//
// Example output
//
//     [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//         {
//             name: "Freddy",
//             breed: "Lab",
//             age: 5
//         },
//         {
//             name: "Mr. Pig",
//             breed: "Mastif",
//             age: 11
//         }
//     ]
//
// 1. Write a function, `washCars()` that takes in a array of car objects and sets
// the boolean properties of `isDirty` to false.
//
//     Example input:
//
//     [
//         {
//             make: 'Volvo',
//             color: 'red',
//             year: 1996,
//             isDirty: true
//         },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: true
//         }
//     ]
//
// Example output
//
//     [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: false // changed to false
//     },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false // stays the same
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: false // changed to false
//         }
//     ]
//
// 1. Write a function, `adminList()` that takes in an array of user objects and
// returns a count of all admins based on the `isAdmin` property. Refactor to
// return an array of admin-only user emails. Refactor again to return an array
// of user objects that are admins.
//
//     Example Input:
//
//     [
//         {
//             isAdmin: true,
//             email: 'user1@email.com'
//         },
//         {
//             isAdmin: true,
//             email: 'user2@email.com'
//         }
//         {
//             isAdmin: false,
//             email: 'user3@email.com'
//         }
//     ]
//
// Example Output (before refactor): `2`
//
// Example Output (after 1st refactor):
//
// [
//     'user1@email.com',
//     'user2@email.com'
// ]
//
// Example Output (after 2nd refactor):
//
// [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]
//
// 1. Create a function, `makeSandwhichObjects()` that takes in two array of
// strings, breads and fillings and returns an array of `sandwhichObjects` that
// contain properties for bread and filling and values correspond to the same
// order of the two passed in arrays. Assume the two array inputs are the same
// length.
//
//     Example Input:
//
//     ```js
//     var breads  = [
//       "white",
//       "wheat",
//       "rhy",
//       "white"
//     ];
//
//     var fillings = [
//       "pb&j",
//       "ham",
//       "cheese steak",
//       "tuna"
//     ];
//
//     makeSandwhichObjects(breads, fillings)
//     ```
//
// Example Output:
//
//     [
//         {
//             bread: "white,
//             filling: "pb&j"
//         },
//         {
//             bread: "wheat",
//             filling: "ham"
//         },
//         {
//             bread: "rhy",
//             filling: "cheese steak"
//         },
//         {
//             bread: "white",
//             filling: "tuna"
//         }
//     ]