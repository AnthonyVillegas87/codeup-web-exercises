"use strict";

let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startBtn = document.getElementById("start");

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let doorBeachPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";


let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const isClicked = (door) => {
    if(door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }


}

const playDoor = (door) => {
    numClosedDoors--;
    if(numClosedDoors === 0) {
        gameOver('win');
    }
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
    if(!isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor();
    }

}

doorImage2.onclick = () => {
    if(!isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor();
    }

}

doorImage3.onclick = () => {
    if(!isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor();
    }

}

const gameOver = (status) => {
    if(status === 'win') {
        startBtn.innerHTML = 'You win! Play again?'
    }

}

randomChoreDoorGenerator();