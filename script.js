// Create a boolean variable to track current mode
let darkMode = false;

/* NEW JS FUNCTION: document.querySelector()
    lets us SELECT an HTML ELEMENT and store a reference to it in a VARIABLE
*/

// select by tag type
const body = document.querySelector("body");
// heading is a VARIABLE that points to the h1 ELEMENT with an id=:main-heading" -> just like CSS selection!
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");

// JS can now change attributes & properties
heading.textContent = "Light & Dark Mode Website"; // JS wrote HTML code!
heading.style.color = "blue";
heading.style.background = "thistle";
body.style.background = "lavender";
heading.style.fontSize = "30px";

// Define what happens when button is clicked
function toggleMode() {
    // 1. Flip the value of darkMode (boolean variable)
    darkMode = !darkMode;
    console.log(darkMode);

    // 2. Conditionally apply styles based on the mode
    if (darkMode == true) {
        console.log("apply dark mode");
        body.style.background = "black";
        heading.style.color = "lightgrey";
        description.style.color = "white";
        heading.style.background = "darkgrey";
        toggleBtn.style.background = "darkgrey";
        description.textContent = "Welcome to the Dark Side";
        toggleBtn.textContent = "Switch to Light";

    }
    else {
        console.log("apply light mode");
        body.style.background = "white";
        heading.style.color = "darkgrey";
        description.style.color = "black";
        heading.style.background = "lightgrey";
        toggleBtn.style.background = "lightgrey";
        description.textContent = "Welcome to the Light Side";
        toggleBtn.textContent = "Switch to Dark";
    }

}

// Attach function to the button
toggleBtn.addEventListener("click", toggleMode);

// REVIEW
// 1. Select an HTML element for JS to target
const hackerBtn = document.querySelector("#hacker");
// 2. Attach click event listener to trigger a function
hackerBtn.addEventListener("click", setHackerMode);
// 3. Define what happens when event triggers function
function setHackerMode() {
    body.style.background = "linear-gradient(black, green)";
    body.style.fontFamily = "monospace";
    description.style.color = "rgb(85, 255, 0)";
    description.textContent = "YOU HAVE BEEN HACKED :(";
}


const rainbowBtn = document.querySelector("#rainbow");
rainbowBtn.addEventListener("click", setRainbowMode);
function setRainbowMode() {
    body.style.background = "linear-gradient(red, orange, yellow, green, blue, purple)";
    body.style.fontFamily = "copperplate";
    description.style.color = "rgb(0, 0, 0)";
    description.textContent = "RAINBOW BLAST!";
}