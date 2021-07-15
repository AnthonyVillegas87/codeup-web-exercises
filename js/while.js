(function globalScope() {
    "use strict";

// let count = 0
//     while(count < 6000) {
//         console.log(count);
//         count++;
//     }


    var allCones = Math.floor(Math.random() * 50) + 50;
    confirm(`You have ${allCones} ice cream cones to sell today!`);

    function sellCones() {
        let conesSold = Math.floor(Math.random() * 5) + 1;
        while(conesSold - allCones) {
            confirm(`You sold ${conesSold} so far!`);
            do {
                allCones = allCones - conesSold

                if (conesSold < allCones) {
                    confirm(`You have ${allCones} left to sell`);

                } else {
                    alert("Yay i sold them all!");
                    break;
                }
            } while(allCones > conesSold);

        }
    }
 sellCones()


    //// SOLUTION TO CONES EXERCISE
    // var allCones = Math.floor(Math.random() * 50) + 150;
    //
    // do{
    //     let conesSold = Math.floor(Math.random() * 5) + 1;
    //     console.log(conesSold + " cones sold ...");
    //     console.log(allCones + " cones left");
    //     allCones = allCones - conesSold;
    // } while(allCones >= 0)














})();