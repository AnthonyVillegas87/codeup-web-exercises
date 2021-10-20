"use strict";

function newStyle() {
    let newColor = '';
    let newFont = '';
    let x = Math.floor(Math.random()*7);
    switch (x){
        case 0:
            newColor = 'red';
            newFont = 'Times New Roman';
            break;
        case 1:
            newColor = 'blue';
            newFont = 'Florence, cursive';
            break;
        case 2:
            newColor = 'yellow';
            newFont = 'Verdana';
            break;
        case 3:
            newColor= 'purple';
            newFont = 'Courier New';
            break
        case 4:
            newColor = 'cyan';
            newFont = 'Georgia';
            break;
        case 5:
            newColor = 'maroon';
            newFont = 'Palatino';
            break;
        case 6:
            newColor = 'lime';
            newFont = 'Impact';
            break;
    }
    var elem = document.getElementById('SoC');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont;
}
document.querySelector('h1').innerHTML = 'The .querySelector() method allows us to specify a CSS selector and then returns the first element that matches that selector. The following code would return the first paragraph in the document.'
document.getElementById('four').innerHTML = '.getElementById() method to access the element with an id of "four".'

document.querySelector('body').style.backgroundColor = '#201F2E';

let newDestination = document.createElement('li');
newDestination.id = 'six';
newDestination.innerHTML = 'The .createElement(tagName) method creates a new element based on the specified tag name passed into it as an argument. However, it does not append it to the document. It creates an empty element with no inner HTML.In order to create an element and add it to the web page, you must assign it to be the child of an element that already exists on the DOM. We call this process appending. The .appendChild() method will add a child element as the last child node.'
document.body.appendChild(newDestination);