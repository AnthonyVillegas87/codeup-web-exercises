(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const student = {
        firstName: "Anthony",
        lastName: "Villegas",
        sayHello() {
            return  `Hello from Anthony Villegas!`;
        }

    };
    console.log(student.firstName);
    console.log(student.lastName);
    console.log(student.sayHello())
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // student.sayHello = function() {
    //     return 'Hello from ' + student.firstName + '' + student.lastName;
    // };
    // console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    ///PSEUDO///
        //if purchasing more than 200, will get 12% off

        // Cameron is purchasing 180$ of stuff. He will get 0$ off the purchase and pay 180$
        //Ryan is purchasing 250$ of stuff. He will get 30$ off the purchase and pay 220$.
        //George is purchasing 320$ of stuff. He will get 38.40 off the purchase and pay 281.60$

    // function to strictly calculate the amount with or without discount

            // function calcDiscount(amount, threshold, discountPercentage) {
            //     // if the amount is greater than the threshold, apply the discountPercentage
            // if(amount <= threshold) {
            //     return 0
            // } else {
            //     return (amount * discountPercentage);
            // }
    //}
    //
    // calcDiscount(180,200,.12);//0
    // calcDiscount(250,200,.12);//30
    // calcDiscount(320,200,.12);//38.4
    //
    /// With  for loop
    // for(var i = 0; i <= shoppers.length; i += 1) {
    //
    //     // Cameron is purchasing 180$ of stuff. He will get 0$ off the purchase and pay 180$
    //     var cameronsDiscountAmount = calcDiscount(shoppers[i].amount, threshold, discountPercentage);
    //     var output1 = shoppers[i].name + ' is purchasing ' + shoppers[i].amount +
    //         ' of stuff. He will get ' + cameronsDiscountAmount +
    //         ' off the purchase and pay ' + (shoppers[i].amount - cameronsDiscountAmount);
    // }
    //


    //NEW FOR EACH EXAMPLE
        // Cameron is purchasing 180$ of stuff. He will get 0$ off the purchase and pay 180$
        // shoppers.forEach(function(shopper ) {
        //     var discountAmount = calcDiscount(shoppers.amount, threshold, discountPercentage);
        //     var output = shopper.name + ' is purchasing ' + shopper.amount +
        //         ' of stuff. He will get ' + discountAmount +
        //         ' off the purchase and pay ' + (shopper.amount - discountAmount);
        //
        // })




    // var ryanDiscountAmount = calcDiscount(shoppers[1].amount, threshold, discountPercentage);
    // var output2 = shoppers[1].name + ' is purchasing ' + shoppers[1].amount +
    //     ' of stuff. He will get ' + ryanDiscountAmount +
    //     ' off the purchase and pay ' + ( shoppers[1].amount - ryanDiscountAmount);
    // var georgeDiscountAmount = calcDiscount(shoppers[2].amount, threshold, discountPercentage);
    // var output3 = shoppers[2].name + ' is purchasing ' + shoppers[2].amount +
    //     ' of stuff. He will get ' + georgeDiscountAmount +
    //     ' off the purchase and pay ' + ( shoppers[2].amount - georgeDiscountedAmount);




    var shoppers = [
        {name: 'Cameron',
            amount: 180
        },
        {name: 'Ryan',
            amount: 250
        },
        {name: 'George',
            amount: 320
        }
    ];

////    With  For Each

    shoppers.forEach(function (shopper){
        if(shopper.amount < 200) {
            console.log(shopper.name + " spent " + shopper.amount + " and does not receive a discount!");
        } else if(shopper.amount > 200) {
            console.log(shopper.name + " spent " + shopper.amount + " and qualifies for a discount! The total is now " + (shopper.amount - shopper.amount * 0.12) + " !");
        }
    })




    var books = [
        {
            title: "IT",
            author: {
                first_name: "Stephen",
                last_name: " King"
            }
        },
        {
            title: "Battlefield Earth",
            author: {
                first_name: "L. Ron",
                last_name: " Hubbard"
            }
        },
        {
            title: "The Art Of War",
            author: {
                first_name: "Sun",
                last_name: " Tzu"
            }
        },
        {
            title: "Last Of The Mohicans",
            author: {
                first_name: "James Fenimore",
                last_name: " Cooper"
            }
        },
        {
            title: "The Relic",
            author: {
                first_name: "Lincoln",
                last_name: " Child"
            }
        }
        ]


    console.log(books[4].title)
    console.log(books[4].author.first_name)
    console.log(books[4].author.last_name)


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    books.forEach(function(book){
            console.log("Title: " + book.title + "\n Author: " + book.author.first_name + book.author.last_name + ".")
    })


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


function CreateBook(title, author) {
    this.title = title;
    this.author = author;
    }

var newBook = new CreateBook("The Stand", "Stephen King");
console.log(newBook)



// function showBookInfo() {
//     return books.title + "\n" + books.author
// }
//
//     console.log(showBookInfo(books))


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
