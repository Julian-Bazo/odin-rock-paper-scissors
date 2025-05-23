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

// Returns a valid choice based off of user input
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?","");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }
    else {
        return "Please select either rock, paper, or scissors";
    }
}

