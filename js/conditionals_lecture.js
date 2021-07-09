
"use strict"
 //let flavor = prompt("Welcome to Codeup Ice Cream! What flavor do you want?");

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

// function getIceCreamOrder() {
//     return prompt("Welcome to Codeup Ice Cream! What flavor do you want?");
// }
//
// function replyToCustomer(flavor) {
//     if(flavor === "chocolate" || flavor === "vanilla" || flavor === "strawberry") {
//         alert(`One ${flavor} coming right up!`);
//     } else {
//         alert("We do not have that flavor. Sorry! ");
//     }
//
// }
// replyToCustomer(getIceCreamOrder())

let decision = confirm("Are you sure you want to close this page?!")
//alert(decision)

// if(decision) {
//     alert("Okay, closing the page...");
// } else {
//     alert("Yay! Leaving page open...");
//}

alert((decision === true)? "Okay, closing the page..." : "Yay! Leaving page open..." );