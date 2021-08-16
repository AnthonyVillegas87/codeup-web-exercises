"use strict";
let boxes = document.querySelectorAll('.display');

function changeColor() {
    // let letters = '0123456789';
    let randomColor = 'rgb('
    for(let i = 0; i < 3; i++) {
      randomColor += [Math.floor(Math.random() * 256)] + ',';
    }
    return randomColor.substring(0, randomColor.length -1) + ')'
}


boxes.forEach(function (box) {
    box.addEventListener('mouseover', function() {
        box.style.backgroundColor = changeColor()
    })
})
