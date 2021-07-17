(function() {
    "use strict"



    var num = 50;

    do {
         num = prompt("Pick a number between 1 & 50!");
        if(num % 2 === 0) continue;
        document.write(`<p> Here is an odd number! `  + num +   `</p>`);
        if(num % 2 === 1) break;
         num++

    }
        while (num <= 50 ) {



    }








})()
