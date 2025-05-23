console.log("Hello WORLD!");

// Randomly will return "Rock" || "Paper" || "Scissors"
function getComputerChoice() {
    let selector = Math.random();
    if (selector <= .33) {
        return "Rock";
    }
    else if (selector <= .66 && selector > .33) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
