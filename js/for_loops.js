(function globalScope() {
"use strict"

    // function showMultiplicationTable(num) {
    //     for (let i = 1; i <= 10; i++) {
    //     let result = num * i
    //         if(`${num} * ${i} = ${result}`) {
    //             return result
    //         }
    //     }
    // }



    function oddOrEven() {
        for(let i = 1; i <= 10; i++) {
            let randomNum = Math.floor(Math.random() * 180) + 1;
            if (randomNum % 2 === 0) {
                console.log(randomNum + "is even");
            }
            if (randomNum % 2 === 1) {
                console.log(randomNum + "is odd!");
            }
            console.log(i)
        }


    }
oddOrEven()


})();