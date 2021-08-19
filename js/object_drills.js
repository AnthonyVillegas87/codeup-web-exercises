"use strict"
// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}
function makeCar(make, model){
    return {
        make: make,
        model: model
    }
}
let car = makeCar("Ford","Bronco")
console.log(car)
//////////////////////////////////////////////////////
let books = [
    {
        price: 10.99,
        title: "title"
    },
    {
        price: 9.99,
        title: "title"
    },
    {
        price: 15.99,
        title: "title"
    }
];

/// .FILTER() FUNCTION METHOD  //// RETURN A VALUE

let expensiveBooks = books.filter(book => isExpensive(book.price));
function isExpensive(price) {
    return price > 10;
}
//console.log(expensiveBooks);

/// .REDUCE() FUNCTION METHOD

let totalPrice = books.reduce((total, book) => {
    return total + book.price;
}, 0);
//console.log(totalPrice);

/// .MAP()  FUNCTION METHOD   //// RETURN A VALUE
let booksWithAuthors = books.map(book => {
    return {...book, author: "Matt B"}
    // return {
    //     price: book.price,
    //     title: book.title,
    //     author: "Matt B"
    // }
});
//console.log(booksWithAuthors);
//////////////////////////////////////////////////////

//================================= WARM UP

// In a new HTML file in codeup-web-exercises, add a script to solve the following problem...
//
// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//
//     Assume the following shape of the user object for the function input:
function UserObj(firstName, lastName, email, userName, passWord) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.passWord = passWord;
}

var user = new UserObj("anthony","villegas","villegasanthony87@yahoo.com", "AAV", 2112)
console.log(user)


    // {
    //     firstName: '...',
    //     lastName: '...',
    //     email: '...',
    //     username: '...',
    //     password: '...'
    // }

// The shape of the output should be the following:

// {
//     firstName: '...',
//         lastName: '...',
// }

// Regardless of the case of the first name and last name input, the output should be in all lower case.

// var fred = {
//     firstName: 'Fred',
//     lastName: 'Smith',
//     email: 'fred@email.com',
//     username: 'fred123',
//     password: 'pass123'
// }

// getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}












///////////////////////////////////////////////////////
// Exercise 2. Use the following data to create an object named salesReport.
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units

let salesReport = {
    title: "Monthly Sales Report",
    date: 3 - 17 - 2015,
    office: "Codeup",
    // getEmployeeCount() should return the total number of employees
    getEmployeeCount() {
        return  salesReport.employees.length;
    },
    //getTotalNumberOfSales() should return the total number of units sold
    getTotalNumberOfSales() {
        var sum = 0;
        for(var i = 0; i <= this.employees.length - 1; i++){
            sum += this.employees[i].salesUnits;

        }
        return sum;
    },
    // getAverageSalesPerEmployee() should return the average units sold per employee
     getAverageSalesPerEmployee() {
            return this.getTotalNumberOfSales() / this.getEmployeeCount() ;
    },

    employees: [

        {
            employeeNumber: 1,
            firstName: "Jane",
            lastName: "Janeway",
            salesUnits: 3
        },
        {
            employeeNumber: 3,
            firstName: "Tricia",
            lastName: "Triaciason",
            salesUnits: 5
        },
        {
            employeeNumber: 4,
            firstName: "Jeanette",
            lastName: "Jeanson",
            salesUnits: 4
        },
        {
            employeeNumber: 5,
            firstName: "Charles Emerson III",
            lastName: "Wincester",
            salesUnits: 2
        },
        {
            employeeNumber: 6,
            firstName: "Chet",
            lastName: "Chedderson",
            salesUnits: 8
        },
        {
            employeeNumber: 7,
            firstName: "Chaium",
            lastName: "Chaiamson",
            salesUnits: 12
        },
        {
            employeeNumber: 8,
            firstName: "Dale",
            lastName: "Dalesinger",
            salesUnits: 1
        },
        {
            employeeNumber: 9,
            firstName: "Zig",
            lastName: "Ziglar",
            salesUnits: 50
        },
        {
            employeeNumber: 10,
            firstName: "Henry",
            lastName: "Kissinger",
            salesUnits: 1
        },
        {
            employeeNumber: 11,
            firstName: "Arthur Herbert",
            lastName: "Fonzarelli",
            salesUnits: 23
        },
        {
            employeeNumber: 12,
            firstName: "Betty",
            lastName: "Boop",
            salesUnits: 67
        },

    ],


}

console.log(salesReport.getEmployeeCount());
console.log(salesReport.getTotalNumberOfSales());
console.log(salesReport.getAverageSalesPerEmployee());






// Exercise 4. Go to https://gist.githubusercontent.com/ryanorsinger/f77e5ec94dbe14e21771/raw/d4a1f916723ca69ac99fdcab48746c6682bf4530/profiles.json
// then copy the JSON and assign it to a variable named profiles.

//// (fetch) returns a response body which is a promise
const profilePromise = fetch("https://gist.githubusercontent.com/ryanorsinger/f77e5ec94dbe14e21771/raw/d4a1f916723ca69ac99fdcab48746c6682bf4530/profiles.json")
    /// wait for that promise to fulfill .then
    profilePromise.then(result => {
        // result is turned into json which in turn the act of turning it into a promise use .then
        result.json().then(data => {
           // console.log(data)
            solutions(data);
        })
    });

// const geocode = (search, token)  => fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//        geocode.then((res) => {
//             res.json().then((data) => {
//             return data.features[0].center;
//         });





// Exercise 5. Create an object named profileReport and add the following methods that use the "profiles" JSON data.

function solutions(data) {
    console.log(getBalanceForActiveAndNonActive(data));
}
//  getProfileCount() should return the total number of profiles
function getProfileCount(data) {
    return data.length;
}

//  getActiveCount() should return the number of active profiles
function getActiveCount(data) {
    var totalIsActive = 0;
  for(var i = 0; i < data.length; i++) {
      if(data[i]['isActive'] === true){
          totalIsActive++;
      }

  }
  return totalIsActive
}


//  getInactiveCount() should return the number of inactive profiles
function getInactiveCount(data) {
    let totalInactive = 0;
    for(let i = 0; i < data.length; i++) {
        if(data[i]['isActive'] === false){

        totalInactive++;
        }
    }
    return totalInactive
}

//  sumOfAllBalances() should return sum of the balance of all profiles
function sumOfAllBalances(data) {
    let totalSum = 0;
    for(let i = 0; i < data.length; i++) {
        let sum = parseFloat(data[i]['balance'].replaceAll(',', '').replaceAll('$', ''))
        totalSum += sum
    }
    return totalSum
}

//  getAverageBalance() should return the average balance per users
function getAverageBalance(data) {
    return sumOfAllBalances(data) / getProfileCount(data);
}

//  getLowestBalance() should return the customer name with the lowest balance
function getLowestBalance(data) {
    let smallAmt = data[0];
    for(let i = 0; i < data.length; i++) {
        if(data[i]['balance'] < smallAmt) {
            smallAmt = data[i]['balance'] + data[i]['name'];
        }
    }
    return smallAmt
}

//  getHighestBalance() should return the customer name with the highest balance
function getHighestBalance(data) {
    let highAmt = [];
    for(let i = 0; i < data.length; i++) {
        if(data[i]['balance'] > highAmt) {
            highAmt = data[i]['balance'] + data[i]['name'] ;
        }
    }
    return highAmt
}

//  getMostFavoriteFruit() should return the most common fruit
function getMostFavoriteFruit(data) {
    let favFruit = [];
    for(let i = 0; i < data.length; i++) {
        if(data[i]['favoriteFruit'] > favFruit) {
            favFruit = data[i]['favoriteFruit'];
        }
    }
    return favFruit
}

//  getLeastFavoriteFruit() should return the least favorite fruit
function getLeastFavoriteFruit(data) {
    let leastFavFruit = data[0]['favoriteFruit'];
    for(let i = 0; i < data.length; i++) {
        if(data[i]['favoriteFruit'] <= leastFavFruit) {
            leastFavFruit = data[i]['favoriteFruit'];
        }
    }
    return leastFavFruit
}

//  getTotalNumberOfUnreadMessages() should return the number of unread messages for all users

 function getTotalNumberOfUnreadMessages(data) {
     let greetValues = 0
        for(let i = 0; i < data.length; i++) {
            let sum = data[i]['greeting'].slice(30, 35).split('')
            greetValues = sum + data[i]['greeting'].slice(30, 35).split('').length
        }
     return greetValues.replace(/[^0-9]/g,"")
     }

//  getAverageNumberOfUnreadMessages() should return the average number of unread messages per user.

function getAverageNumberOfUnreadMessages(data) {
    return Math.trunc(getTotalNumberOfUnreadMessages(data) / getProfileCount(data))
}

//  getAverageAge() should return the average age of all users
function getAverageAge(data) {
    let age = 0;
    for(let i = 0; i < data.length; i++) {
        let total = data[i]['age']
        age += total
    }
    return Math.trunc(age / getProfileCount(data))
}

//  getGenderCounts() should return gender count of users as an object: example {"m": 23, "f", 32}

function getGenderCounts(data) {

    return data.reduce((acc, curVal) => {

        if(curVal['gender'] === 'male') {
            acc.male += 1;
        }
        else {
            acc.female += 1;
        }
        return acc;
    }, {male: 0, female: 0})

}

//  getAllCompanyNames() should return an array of all companies represented by the users

function getAllCompanyNames(data) {
    let newArr = [];
        for(let i = 0; i < data.length; i++) {
            newArr.push(data[i]['company']);
        }
        return newArr
}

//  getMostCommonEyeColor() should return the most commonly occurring eye-color.
function getMostCommonEyeColor(data) {
    let color = []
     for(let i = 0; i < data.length; i++) {
         if(data[i]['eyeColor'] > color) {
             color = data[i]['eyeColor'];
         }
     }
     return color
}

//  getBalancesForActiveAndNonActive() should return the balance of all non-active accounts vs. the balance of all active accounts?
//     this last method should return an object that looks like {"active-balances": 23000, "inactive-balances": 4000} w/ different numbers.

function getBalanceForActiveAndNonActive(data) {
    let activeCount = getActiveCount(data) ;
    let inactiveCount = getInactiveCount(data);
        let totalCount = activeCount + inactiveCount;
        let totalActiveBal = 0;
        let totalInactiveBal = 0;
        for(let i = 0; i < data.length; i++) {
             totalActiveBal += parseFloat(data[i]['balance'].replace(/[^0-9]/g,"")) ;
             totalInactiveBal += parseFloat(data[i]['balance'].replace(/[^0-9]/g,"")) ;

        }
        totalActiveBal = Math.floor(activeCount / totalCount * totalActiveBal)
        totalInactiveBal = Math.floor(inactiveCount / totalCount * totalInactiveBal)

        return {activeCount, inactiveCount, totalActiveBal, totalInactiveBal}

}

// Exercise 6. Practice with assignment by reference
// create a variable named person1 with a name property. Assign it a name property.
let personOne = {name:'Anthony'};
// Now create a variable named person2 and assign person1 to it.
let  personTwo = personOne;
// Then reassign the name property on person2 with person2.name = "Bob";
personTwo.name = "Joshua";
// console.log the name property on person 1.
console.log(personOne.name)
// Why do you think changing person2 altered person1?
/// ASSIGNMENT BY REFERENCE MEANS BOTH VARIABLES END UP POINTING AT THE SAME DATA & NOTHING IS COPIED ANYWHERE. THE NEW OPERATOR RETURNS A REFERENCE AUTOMATICALLY.
// The term for this behavior is assignment by reference.





// Exercise 7. More practice with assignment by reference
// Add the following HTML to your index.html page in this project.
var input = document.getElementById("input")
// now, create a variable named input and assign it document.getElementById("input").
// now run input.value = "Hello" from the JS console. Did you see any HTML change?
console.log(input.value = "Hello,World")
// Create a second variable named inputElement.
var inputElement = document.getElementById("input");
// now, run inputElement.value = "I am altering an object by altering its properties" in your JS console.
console.log(inputElement.value = "I have altered an object by altering its properties")
// See how both the "input" and "textInput" variables are referencing the same underlying HTML element?
// This behavior is another example of "assignment by reference"


//## OBJECTS BONUSES

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

class Dog {
    constructor(breed, color, age, weightInPounds, sterilized, shotRecords) {
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.weightInPounds = weightInPounds;
        this.sterilized = sterilized;
        this.shotRecords = shotRecords; //ARRAY
    }
    bark() {
       return "Woof!"
    }
    getOlder() {
        return this.age + 1
    }
    fix() {
        return  this.sterilized === true
    }
    vaccinate(shot) {
        return this.shotRecords.push(shot)
    }

}




// 1. Expanding on the books object exercise:
//
// var books = [
//     {
//         title: "IT",
//         author: {
//             first_name: "Stephen",
//             last_name: " King",
//             key_words: ['horror,' ,'literary fiction' ,'fiction'],
//             available: true,
//             dateAvailable: '13-Aug/08:05'
//         }
//     },
//     {
//         title: "Battlefield Earth",
//         author: {
//             first_name: "L. Ron",
//             last_name: " Hubbard",
//             key_words: ['sci-fi','fiction'],
//             available: true,
//             dateAvailable: '13-Sep/09:30'
//         }
//     },
//     {
//         title: "The Art Of War",
//         author: {
//             first_name: "Sun",
//             last_name: " Tzu",
//             key_words: ['treatise', 'fiction'],
//             available: true,
//             dateAvailable: '10-Oct/10:00'
//         }
//     },
//     {
//         title: "Last Of The Mohicans",
//         author: {
//             first_name: "James Fenimore",
//             last_name: " Cooper",
//             key_words: ['historical fiction', 'western'],
//             available: true,
//             dateAvailable: '21-Oct/10:00'
//         }
//     },
//     {
//         title: "The Relic",
//         author: {
//             first_name: "Lincoln",
//             last_name: " Child",
//             key_words: ['horror', 'fiction'],
//             available: true,
//             dateAvailable: '05-Nov/9:00'
//         },
//         lend() {
//             if(this.available === true) {
//                 return false
//             }
//         }
//     }
//
// ]

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
//

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