(function globalScope() {
"use strict"

function showMultiplicationTable(num) {

    for(let i = 1; i <= 10; i++) {
        let result = num * i
        console.log(`${num} * ${i} = ${result}`);

    }

}
showMultiplicationTable(7)




})();