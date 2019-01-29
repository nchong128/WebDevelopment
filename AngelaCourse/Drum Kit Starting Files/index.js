// Assign click listeners to all button
let allButtons = document.querySelectorAll(".drum");

allButtons.forEach(function(element) {
    element.addEventListener("click", playAudio);
    element.addEventListener("click", buttonAnimation);
});

// Assign key listener to the body
document.body.addEventListener("keypress", playAudio);
document.body.addEventListener("keypress", buttonAnimation);

// Listener to play audio
function playAudio(event) {
    let key, audio;
   
    if (event.type == "click") {
        key = event.originalTarget.innerHTML;
    } else {
        key = event.key;
    }

    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
            
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;

        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;

        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;

        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;

        case "k":
            audio = new Audio("sounds/crash.mp3");
            break;

        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            break;

        default:
            console.log("Error for " + name);
    }
    audio.play();
}


function buttonAnimation(event) {
    // Find key that was pressed
    let key;

    if (event.type == "click") {
        key = event.originalTarget.innerHTML;
    } else {
        key = event.key;
    }

    // Add "pressed" class
    document.querySelector("." + key).classList.add("pressed");

    // Remove class
    setTimeout(function() {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}