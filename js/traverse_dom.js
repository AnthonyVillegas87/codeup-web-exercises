"use strict"
let article = document.getElementById('articles');
let mainDiv = document.getElementById('main');


article.style['font-size'] = '50px';
article.children[0].lastElementChild.style.color = 'blue';
article.previousElementSibling.style.backgroundColor = 'black';

mainDiv.children[1].style.textDecoration = "underline";
mainDiv.lastElementChild.style['font-size'] = '50px';
mainDiv.children[0].style.color = 'orange';
mainDiv.lastElementChild.parentElement.style['font-size'] = '40px';