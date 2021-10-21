"use strict";

let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let doorBeachPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";



let numClosedDoors = 4;
let openDoor1;
let openDoor2;
let openDoor3;

const playDoor = () => {

}

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    switch (choreDoor) {
        case 0:
             openDoor1 = botDoorPath;
             openDoor2 = doorBeachPath;
             openDoor3 = spaceDoorPath;
            break;
        case 1:
             openDoor2 = botDoorPath;
             openDoor1 = doorBeachPath;
             openDoor3 = spaceDoorPath;
            break;
        case 2:
            openDoor3 = botDoorPath;
            openDoor2 = doorBeachPath;
            openDoor1 = spaceDoorPath;
            break;
    }
}


doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
}

doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
}

doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
}

randomChoreDoorGenerator();