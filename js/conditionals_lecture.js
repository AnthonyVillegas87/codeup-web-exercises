
"use strict"
 let flavor = prompt("Welcome to Codeup Ice Cream! What flavor do you want?");

// if - else if - else

// if(flavor === "chocolate") {
//     alert("One chocolate coming up!");
// } else if(flavor === "vanilla") {
//     alert("One vanilla coming up!");
// } else if(flavor === "strawberry") {
//     alert("One strawberry coming up!");
// } else {
//     alert("We do not have that flavor. Sorry! ");
// }

// switch

// switch(flavor) {
//     case("chocolate"):
//         alert("One chocolate coming up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming up!");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming up!");
//         break;
//     default:
//         alert("We do not have that flavor, sorry!");
// }

function getIceCreamOrder(flavor) {
    if(flavor === "chocolate" || flavor === "vanilla" || flavor === "strawberry") {
        alert(`One ${flavor} coming right up!`);
    } else {
        alert("We do not have that flavor. Sorry! ");
    }

}
getIceCreamOrder(flavor)
