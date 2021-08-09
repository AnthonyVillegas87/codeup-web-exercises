"use strict"

//GETTING ELEMENTS BY ID

// var header = document.getElementById('main-title');
// console.log(header);

//GETTING ELEMENTS BY CLASS NAME
// var cards = document.getElementsByClassName("card");
// console.log(cards);
// var firstCard = cards[0];
// console.log(firstCard);

//GETTING ELEMENTS BY TAG NAME
// var headerOne = document.getElementsByTagName("h1");
// console.log(headerOne);

//GETTING ELEMENTS WITH QUERYSELECTOR
// var headingElement = document.querySelector('header h1');
// console.log(headingElement)

//DIRECT ACCESS TO FORM ELEMENTS
// var feedBackFormValue = document.forms[0].feedback.value;
// console.log(feedBackFormValue);

//var title = document.getElementById("main-title");
//console.log(title)
// console.log(title.innerHTML);
// console.log(title.innerText);

//title.innerHTML = "<em>HELLO, World!!</em>";

//SETTING THE VALUE OF AN ATTRIBUTE
var cowboyElement = document.querySelector("#cowboy");
cowboyElement.setAttribute("data-1", "hello");
cowboyElement.setAttribute("data-test", "draco");

//REMOVING AN ATTRIBUTE
cowboyElement.removeAttribute("data-test");

//CHANGING STYLES
var jumbotron = document.querySelector(".jumbotron");
//jumbotron.style.backgroundColor = 'red';
//jumbotron.style.display = 'none';
jumbotron.style['font-family'] = "times";

//STYLING A LIST OF NODES
var tableRows = document.getElementsByTagName('tr');
for(var i = 0; i < tableRows.length; i++) {
    tableRows[i].style.backgroundColor = "red";
}