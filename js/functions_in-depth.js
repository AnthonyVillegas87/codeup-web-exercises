"use strict";
// TODO: Given the following array, complete the todos...

const dogs = [
    {
        dogName: 'Bubbles',
        age: 10,
        isTrained: false
    },
    {
        dogName: 'Lexie',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Doggy',
        age: 5,
        isTrained: false
    },
    {
        dogName: 'Flopper',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Lexie',
        age: 1,
        isTrained: true
    },
    {
        dogName: 'Skip',
        age: 7,
        isTrained: true
    },
    {
        dogName: 'Blue',
        age: 4,
        isTrained: false
    }
];

// MAP

// TODO 1: using map, create a new array of dog names from the dogs array
let dogNames = dogs.map(dog => dog.dogName)
console.log('Exercise 1:');

// TODO 2: using map, create a new array of dog ages from the dogs array
let ages = dogs.map(dog => dog.age)
console.log('Exercise 2:');

// TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
console.log('Exercise 3:');
let newDogArray = dogs.map(ele => ({dogName: ele.dogName, age: ele.age }));

// FILTER

// TODO 4: using filter, create a new array containing only dogs younger than 10 years old
let youngDogs = dogs.filter(dog => dog.age < 10)
console.log('Exercise 4:');

// TODO 5: using filter, create a new array containing only dogs named 'Lexie'
let lex = dogs.filter(dog => dog.dogName === 'Lexie')
console.log('Exercise 5:');

// TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
let trainedYoung = dogs.filter(dog => dog.isTrained === true && dog.age < 10)
console.log('Exercise 6:');


// REDUCE

// TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
let allNames = dogNames.reduce((prev, curr) => prev.concat(curr), ' ');
console.log('Exercise 7:');

// TODO 8: using reduce, return the total of adding all dog ages together (18)
let addAges = ages.reduce((prev, curr) => prev + curr);
console.log('Exercise 8:');

// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
let trained = dogs.reduce((prev, curr)  => {
    if(curr.isTrained === true) {
        prev.push(curr)
    }
    return prev
}, [])
console.log('Exercise 9:');


// EXTRA CHALLENGES

// TODO 10: what is the average age of each dog?
let averageAge = ages.reduce((prev, curr) => prev + curr) / ages.length
console.log('Exercise 10:');

// TODO 11: what is the average age of dogs that are trained?
let averageTrained = trained.reduce((prev, curr) => prev + curr.age, 0) / trained.length
console.log('Exercise 11:');

// TODO 12: what is the average length of names of untrained dogs?
let unTrained = dogs.reduce((prev, curr) => {
    if(curr.isTrained === false) {
        prev.push(curr)
    }
    return prev
}, [])

let untrainedNames = unTrained.map(dog => dog.dogName)
let averageLengthOfNames = untrainedNames.reduce((prev, curr, i, arr) => prev + curr.length / arr.length, 0)
console.log(`Exercise 12:`);

// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
let agesInDogYears = ages.reduce((prev, curr) => prev + curr * 7 ,0)
console.log('Exercise 13:');

// TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
console.log('Exercise 14:');


let movies = [
    {
        title: "Shrek",
        rating: 4
    },
    {
        title: "The Incredibles",
        rating: 4
    },
    {
        title: "The Lion King",
        rating: 5
    },
    {
        title: "It",
        rating: 5
    },
    {
        title: "Toy Story",
        rating: 4
    },
    {
        title: "The Jungle Book",
        rating: 4
    },
    {
        title: "Up",
        rating: 5
    },
    {
        title: "Tombstone",
        rating: 5
    },
    {
        title: "The Gentlemen",
        rating: 5
    },
    {
        title: "Gangster Squad",
        rating: 5
    }
];

// To =>
//
// 0: {title: "Gangster Squad", rating: 5}
// 1: {title: "The Gentlemen", rating: 5}
// 2: {title: "The Incredibles", rating: 4}
// 3: {title: "It", rating: 5}
// 4: {title: "The Jungle Book", rating: 4}
// 5: {title: "The Lion King", rating: 5}
// 6: {title: "Shrek", rating: 4}
// 7: {title: "Tombstone", rating: 5}
// 8: {title: "Toy Story", rating: 4}
// 9: {title: "Up", rating: 5}

let assortedMovies = movies.sort((firstEl, secondEl) => {
   let val1 =  firstEl.title.toUpperCase();
    let val2 = secondEl.title.toUpperCase();
    if(val1 < val2) {
        return -1
    }
    if(val1 > val2) {
        return 1
    }
    return 0
});






/// Default parameters
/*
const bookings = []

const createBooking = function(
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {


    //ES5
// numPassengers = numPassengers || 1
//     price = price || 199

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking('LH123')
createBooking('LH234', 2, 800)
createBooking("LH456", 2)
createBooking("LH789", 5)
*/
/// Passing arguments: Value vs Reference
const flight = 'LH564';
const anthony = {
    name: 'anthony alexander',
    passport: 12345678910
}

const checkIn = function(flightNum, passenger) {

}

checkIn(flight, anthony)