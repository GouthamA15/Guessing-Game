// Guess the Number Game

let gameNum = 8;
let Num = prompt("Guess the Number That I've stored ");
let chance = 5;


while (Num != gameNum && chance > 0) {
    Num = prompt("Your Wrong, Guess the Number Again. You have few chances");
    chance--;
    if (chance == 0) {
        break;
    }
    console.log("You have",chance,"chances left");
}


if(Num == gameNum) {
    alert("Congratulations, You've Won");
    console.log("Refresh to Start Again");
}
else {
    alert("Sorry, You've Lost");
}
