// Guess the Number Game

let gameNum = 87;
let Num = prompt("Guess the Number That I've stored ");
let chance = 5;


while (Num != gameNum && chance > 0) {
    if(Num > gameNum) {
    Num = prompt(`Too High, Guess the Number Again. You have ${chance} chances left`);
    chance--;
    }
    else if(Num < gameNum) {
    Num = prompt(`Too Low, Guess the Number Again. You have ${chance} chances left`);
    chance--;
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
