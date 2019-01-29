let gameStart = false;
let buttonColours = ["red", "blue","green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function startOver() {
    level = 0;
    gamePattern = 0;
    gameStart = false;
}

function gameOver() {
    $("#level-title").text("Game Over, Press Any Key to Restart");

    // Play wrong.mp3
    let audio = new Audio("sounds/wrong.mp3");
    audio.play();

    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);

    startOver();
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (gamePattern.length == userClickedPattern.length) {
            console.log("moving to next level");
            setTimeout(nextSequence, 1000);
        }
    } else {
        gameOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    gameStart = true;
    
    // Update level
    level++;
    
    // Adjust heading to level
    $("#level-title").text("Level " + level);
    
    // Get colour based on random number
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    
    // Save into game history
    gamePattern.push(randomChosenColour);
    
    // Fade out animation for button
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
}

function buttonHandler(event) {
    // Check if game started
    if (!gameStart) {
        gameOver();
    }
    
    // Get colour (id) of button
    let userChosenColour = event.currentTarget.id;
    
    // Save to main array
    userClickedPattern.push(userChosenColour);

    // Play sound
    playSound(userChosenColour);

    // Play animation on button
    animatePress(userChosenColour);

    // Check user's answer
    checkAnswer(userClickedPattern.length - 1);
}

function playSound(name) {
    // Sound animation based on colour
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    let id = "." + currentColour;

    // Pressing animation
    $(id).addClass("pressed");
    setTimeout(() => {$(id).removeClass("pressed");}, 100);
}

// Listener for keypress
$("body").keypress(nextSequence);

// Listener for clicking button
$(".btn").click(buttonHandler);

