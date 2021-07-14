(function globalScope() {
    "use strict";

// let count = 0
//     while(count < 6000) {
//         console.log(count);
//         count++;
//     }


    var allCones = Math.floor(Math.random() * 10) + 10;
    confirm(`You have ${allCones} ice cream cones to sell today!`);

    function sellCones() {
        let conesSold = Math.floor(Math.random() * 5) + 1;
        while(conesSold - allCones) {
            confirm(`You sold ${conesSold} so far!`);
            do {
                if (conesSold < allCones) {
                    confirm(`You have ${allCones - conesSold} left to sell`);

                } else {
                    alert("Yay i sold them all!");
                    break;
                }
            } while(--allCones);
                confirm(`You have ${allCones - conesSold} left to sell`); {

            }


        }
    }
 sellCones()
















})();