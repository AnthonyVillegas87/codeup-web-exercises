"use strict";

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