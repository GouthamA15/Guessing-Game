// Guess the Number Game

let gameNum = 87;
let Num = prompt("Guess the Number That I've stored ");
let chance = 5;


while (Num != gameNum && chance > 0) {
    Num = prompt(`Your Wrong, Guess the Number Again. You have ${chance} chances left`);
    chance--;
    if(Num != gameNum) {
        console.log(`You have ${chance} chances left`);
    }
    else {
        break;
    }
}


if(Num == gameNum) {
    alert("Congratulations, You've Won");
    console.log("Refresh to Start Again");
}
else {
    alert("Sorry, You've Lost");
    console.log("Refresh to Start Again");
}
