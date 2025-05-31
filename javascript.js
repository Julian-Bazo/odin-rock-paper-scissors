console.log("I decided to do the whole game through alerts... so there's nothing to see here :)");

// Randomly will return "Rock" || "Paper" || "Scissors"
function getComputerChoice() {
    let selector = Math.random();
    if (selector <= .33) {
        return "rock";
    }
    else if (selector <= .66 && selector > .33) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Returns a valid choice based off of user input
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?","");
    choice = choice.toLowerCase(choice);
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }
    else {
        return "Please select either rock, paper, or scissors";
    }
}



// let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

// Allows for the scoring of multiple back-to-back rounds. Ends when a score reaches 5.
function playGame() {

//Initializes scoring mechanism integers
    let humanScore = 0;
    let computerScore = 0;

    // playRound(humanChoice, computerChoice);
    // alert("You: " + humanScore + " | Computer: " + computerScore);
    // playRound(getHumanChoice(), getComputerChoice());
    // alert("You: " + humanScore + " | Computer: " + computerScore);
    // playRound(getHumanChoice(), getComputerChoice());
    // alert("You: " + humanScore + " | Computer: " + computerScore);
    // playRound(getHumanChoice(), getComputerChoice());
    // alert("You: " + humanScore + " | Computer: " + computerScore);
    // playRound(getHumanChoice(), getComputerChoice());
    // alert("You: " + humanScore + " | Computer: " + computerScore);
    // endGame(humanScore, computerScore);

//Allows for the playing and scoring of a round
    function playRound(humanChoice, computerChoice) {

        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return alert("You win! Rock beats scissors!");
        }

        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return alert("You win! Paper beats rock!");
        }

        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return alert("You win! Scissors beats paper!");
        }

        else if (computerChoice === "rock" && humanChoice === "scissors") {
            computerScore++;
            return alert("You lose! Rock beats scissors!");
        }

        else if (computerChoice === "paper" && humanChoice === "rock") {
            computerScore++;
            return alert("You lose! Paper beats rock!");
        }

        else if (computerChoice === "scissors" && humanChoice === "paper") {
            computerScore++;
            return alert("You lose! Scissors beats paper!");
        }

        else {
            return alert("It's a tie, try again!");
        }
    }

    // Calls the final score of the 5 rounds
    function endGame(humanScore, computerScore) {
        if (humanScore > computerScore) {
            return alert("You won the game!");
        }
        else if (computerScore > humanScore) {
            return alert("You lost the game!");
        }
        else if (computerScore === humanScore) {
            return alert("Tie game!");
        }

    }

}

// Player selection button creation

// Rock button creation
const rockButton = document.createElement("button");
rockButton.classList.add("selection-button");
rockButton.id = "rockButton";
rockButton.textContent = "Select Rock!"
document.body.appendChild(rockButton);

// Paper button creation
const paperButton = document.createElement("button");
paperButton.classList.add("selection-button");
paperButton.id = "paperButton";
paperButton.textContent = "Select Paper!"
document.body.appendChild(paperButton);

// Scissors button creation
const scissorsButton = document.createElement("button");
scissorsButton.classList.add("selection-button");
scissorsButton.id = "scissorsButton";
scissorsButton.textContent = "Select scissors!"
document.body.appendChild(scissorsButton);


// playGame();
// console.log(playRound(humanChoice, computerChoice));
// console.log("You: " + humanScore + " | Computer: " + computerScore);
