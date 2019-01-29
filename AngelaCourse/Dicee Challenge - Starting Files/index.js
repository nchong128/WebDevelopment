// Constants
let PLAYER_ONE_WINS = "Player 1 Wins!";
let PLAYER_TWO_WINS = "Player 2 Wins!";
let GAME_DRAW = "Tie Game!";

// Generate random numbers
let p1Roll = Math.floor(Math.random() * 6) + 1;
let p2Roll = Math.floor(Math.random() * 6) + 1;

// Shift images based on random numbers
console.log(p1Roll + " " + p2Roll);
document.querySelector(".img1").setAttribute("src", "images/dice" + p1Roll + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + p2Roll + ".png");

// Change title based on winner
if (p1Roll > p2Roll) {
    document.querySelector(".container h1").innerHTML = PLAYER_ONE_WINS;
} else if(p2Roll > p1Roll) {
    document.querySelector(".container h1").innerHTML = PLAYER_TWO_WINS;
} else {
    document.querySelector(".container h1").innerHTML = GAME_DRAW;
}

