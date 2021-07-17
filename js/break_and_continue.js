(function() {
    "use strict"



    //var num = 50;

    // do {
    //   var num = prompt("Pick a number between 1 & 50!");
    //     num++
    //     if(num % 2 === 0) continue;
    //
    //     //document.write(`<p> Here is an odd number! `  + num +   `</p>`);
    //     if(num % 2 === 1) break;
    //
    //
    // }
    //     while (num <= 50 ) {
    //     console.log("Here is an odd number: " + num );
    //
    //
    // }

    for(var i = 0; i <= 50; i++) {
         i = prompt("Pick a number between 1 & 50!");
        if(i % 2 === 0) {
            continue;
        }
        console.log("Here is an odd number: " + i);
    }








})()
