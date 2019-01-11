"use strict";

let arrOfText =[
    "Hi everyone! Sorry for the wall of text!!! I've noticed something recently that I find unfortunate and deeply disturbing. Through this amazing group, I've had the pleasure of friending and talking to a good number of so called “halfies” that aren’t who they say they are. It’s become clear that several very active members of this group identify as trans-racial. For those who don’t know, a trans-racial is someone who adopts a new race or ethnicity. These aren’t real halfies that are passing as white, they are Weaboos/Koreaboos/etc. pretending to be something they are not. ",
    "I won’t name anyone explicitly, but I had an encounter with a white trans female identifying as half North Korean, attempting to convince me that she had escaped North Korea as a grade schooler with her trilingual deceased military mother who had fathered her with a Native American/Soviet Russian father who lived with them in North Korea for some time. Another individual tried to convince me that she was the daughter of a major J-Pop producer. These stories are obviously fabricated and the sheer ridiculousness of these stories and clear misunderstanding of what it means to be a halfie is what gives away their falseness.",
    "I want to preface this by saying that if you are a member of the LGBTQ community, I fully support your pursuits to gain societal equity and wish you nothing but the best. But race and its resulting lived ethnic experiences are immutable and cannot simply be re-identified or adopted."
];

function addTextFromArray(arr) {
    let containerElem = document.getElementById("container");
    for (const line of arr) {
        // Create div with class card
        let divElem = document.createElement("div");
        divElem.className = "card";

        // Create text node and append under div
        let text = document.createTextNode(line);
        divElem.appendChild(text);

        // Append div under container
        console.log(divElem);
        containerElem.appendChild(divElem);
    }
}

/////////////////////////////////////////////////////////////////////////////////////
let pathName= "https://jsonplaceholder.typicode.com/posts";

function addTextFromObject(object) {
    // Declarations
    let divElem, titleText, bodyText, heading, content;

    // Create div with class card
    divElem = document.createElement("div");
    divElem.className = "card";

    // Create heading with title text
    heading = document.createElement("h2");
    heading.className = "header";
    titleText = document.createTextNode(object.title);
    heading.appendChild(titleText);

    // Create content element with bodyText
    content = document.createElement("p");
    content.className = "content";
    bodyText = document.createTextNode(object.body);
    content.appendChild(bodyText);
    
    // Append everything
    divElem.appendChild(heading);
    divElem.appendChild(content);

    return divElem;
}

function useJsonObjects(jsonObject) {
    let container = document.getElementById("container");

    for (const object of jsonObject) {
        container.appendChild(addTextFromObject(object));
    }

}

function logError(err) {
    console.log("Error: " + err);
}

function checkForError(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function fetchJsonObjects(pathName) {
    fetch(pathName)
    .then(checkForError)
    .then(response => response.json())
    .then(useJsonObjects)
    .catch(logError);
}

fetchJsonObjects(pathName);
