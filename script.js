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