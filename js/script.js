// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const noun3Button = document.getElementById("noun3");

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById("choosenNoun1");
const chosenVerb = document.getElementById("choosenVerb");
const chosenAdjective = document.getElementById("choosenAdjective");
const chosenNoun2 = document.getElementById("choosenNoun2");
const chosennoun3 = document.getElementById("choosennoun3");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");

// Variables for pre-defined arrays
const nouns1Array = ["The cat", "The dog", "The tree", "The ball", "The flower"];
const verbsArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectivesArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2Array = ["elephant", "lion", "bird", "snake", "fish"];
const noun3sArray = ["on the chair", "on the moon", "in my noodles", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let noun3Count = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    const noun1 = nouns1Array[noun1Count];
    chosenNoun1.textContent = noun1;

    // if-else to change count noun3
    if (noun1Count < nouns1Array.length - 1) {
        noun1Count++;
    } else {
        noun1Count = 0;
    }
}

function verb_on_click() {
    const verb = verbsArray[verbCount];
    chosenVerb.textContent = verb;

    if (verbCount < verbsArray.length - 1) {
        verbCount++;
    } else {
        verbCount = 0;
    }
}

function adjective_on_click() {
    const adjective = adjectivesArray[adjectiveCount];
    chosenAdjective.textContent = adjective;

    if (adjectiveCount < adjectivesArray.length - 1) {
        adjectiveCount++;
    } else {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    const noun2 = nouns2Array[noun2Count];
    chosenNoun2.textContent = noun2;

    if (noun2Count < nouns2Array.length - 1) {
        noun2Count++;
    } else {
        noun2Count = 0;
    }
}

function noun3_on_click() {
    const noun3 = noun3sArray[noun3Count];
    chosennoun3.textContent = noun3;

    if (noun3Count < noun3sArray.length - 1) {
        noun3Count++;
    } else {
        noun3Count = 0;
    }
}

// concatenate the user story and display
function playback_on_click() {
    const noun1 = chosenNoun1.textContent.trim();
    const verb = chosenVerb.textContent.trim();
    const adjective = chosenAdjective.textContent.trim();
    const noun2 = chosenNoun2.textContent.trim();
    const noun3 = chosennoun3.textContent.trim();

    if (noun1 && verb && adjective && noun2 && noun3) {
        const story = `Once upon a time, ${noun1} ${verb} ${adjective} ${noun2} ${noun3}.`;
        document.getElementById("story").textContent = story;
    } else {
        document.getElementById("story").textContent = "Please first make the full story from above.";
    }
}


// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1 = nouns1Array[Math.floor(Math.random() * nouns1Array.length)];
    const randomVerb = verbsArray[Math.floor(Math.random() * verbsArray.length)];
    const randomAdjective = adjectivesArray[Math.floor(Math.random() * adjectivesArray.length)];
    const randomNoun2 = nouns2Array[Math.floor(Math.random() * nouns2Array.length)];
    const randomnoun3 = noun3sArray[Math.floor(Math.random() * noun3sArray.length)];

    const story = `Once upon a time, ${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomnoun3}.`;
    document.getElementById("story").textContent = story;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
noun3Button.addEventListener("click", noun3_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
