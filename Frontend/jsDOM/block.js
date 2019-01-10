"use strict";
let pos = 0;

function attachUnderElement(text, elementID) {
    // Create div element
    let newDiv = document.createElement("div");

    // Add text
    let someText = document.createTextNode(text);
    newDiv.appendChild(someText);

    // Make div center
    newDiv.style.textAlign = "center";

    // Append under title
    document.getElementById(elementID).appendChild(newDiv);
}

function moveDown(action) {
    let block = document.getElementsByClassName("block")[0];
    let interval = setInterval(move, 5);
    console.log(interval);
    if (action == "stop") {
        clearInterval(interval);
        console.log(interval);
    }
    console.log(interval);


    function move() {
        // Get block and increment left and down
        if (pos == 350) {
            clearInterval(interval);
        }
        else {
            pos ++;
            block.style.top = pos + "px";
            block.style.left = pos + "px";
        }
    }
}


function moveUp(action) {
    let block = document.getElementsByClassName("block")[0];
    let interval = setInterval(move, 5);

    if (action == "stop") {
        clearInterval(interval);
    }

    function move() {
        // Get block and increment left and down
        if (pos == 0) {
            clearInterval(interval);
        }
        else {
            pos --;
            block.style.top = pos + "px";
            block.style.left = pos + "px";
        }
    }
}