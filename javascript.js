// Randomly will return "Rock" || "Paper" || "Scissors" and set it as the computer's choice
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

// Returns a valid choice based off of user input to use as the human's choice
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

// Initializes all the global variables needed to run the functions below
// let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

// Allows for the scoring of multiple back-to-back rounds. Ends when 5 rounds have been played.
function playGame() {
    playRound(humanChoice, computerChoice);
    reportScore(humanScore, computerScore)
    playRound(getHumanChoice(), getComputerChoice());
    reportScore(humanScore, computerScore)
    playRound(getHumanChoice(), getComputerChoice());
    reportScore(humanScore, computerScore)
    playRound(getHumanChoice(), getComputerChoice());
    reportScore(humanScore, computerScore)
    playRound(getHumanChoice(), getComputerChoice());
    endGame(humanScore, computerScore)
}

// Allows for the playing and scoring of a round
function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return announcerDiv.textContent = "You win! Rock beats scissors!";
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return announcerDiv.textContent = "You win! Paper beats rock!";
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return announcerDiv.textContent = "You win! Scissors beats paper!";
    }

    else if (computerChoice === "rock" && humanChoice === "scissors") {
            computerScore++;
            return announcerDiv.textContent = "You lose! Rock beats scissors!";
    }

    else if (computerChoice === "paper" && humanChoice === "rock") {
            computerScore++;
            return announcerDiv.textContent = "You lose! Paper beats rock!";
    }

    else if (computerChoice === "scissors" && humanChoice === "paper") {
            computerScore++;
            return announcerDiv.textContent = "You lose! Scissors beats paper!";
    }

    else {
            return announcerDiv.textContent = "It's a tie, try again!";
    }
}

// Reports the final score of the game and says who won
function endGame(humanScore, computerScore) {

    if (humanScore === 5 || computerScore === 5) {
        buttonDiv.style.display = "none";
        let winLose = "";
        (humanScore === 5) ? winLose = "You Win!" : winLose = "You Lose!";
        scoringDiv.textContent = `FINAL Score: You ${humanScore} | Computer ${computerScore}\n\n${winLose}`
        
    }
    // if (humanScore > computerScore) {
    //     return alert(`You won the game!\nFinal Score: You ${humanScore} | Computer ${computerScore}`);
    // }
    // else if (computerScore > humanScore) {
    //     return alert(`You lost the game!\nFinal Score: You ${humanScore} | Computer ${computerScore}`);
    // }
    // else if (computerScore === humanScore) {
    //     return alert(`Tie game!\nFinal Score: You ${humanScore} | Computer ${computerScore}`);
    // }

}

// Reports the current score in-between rounds
function reportScore(humanScore, computerScore) {
    alert("You: " + humanScore + " | Computer: " + computerScore);
}


// Player selection button creation

// Button div creation
const buttonDiv = document.createElement("div");
buttonDiv.id = "buttonDiv";
document.body.appendChild(buttonDiv);

// Announcer div creation
const announcerDiv = document.createElement("div");
announcerDiv.id= "announcerDiv";
document.body.appendChild(announcerDiv);
announcerDiv.textContent = "Press a button to start the game!\nFirst to 5 points wins!";

// Rock button creation
const rockButton = document.createElement("button");
rockButton.classList.add("selection-button");
rockButton.id = "rockButton";
rockButton.textContent = "Select Rock!"
buttonDiv.appendChild(rockButton);

// Paper button creation
const paperButton = document.createElement("button");
paperButton.classList.add("selection-button");
paperButton.id = "paperButton";
paperButton.textContent = "Select Paper!"
buttonDiv.appendChild(paperButton);

// Scissors button creation
const scissorsButton = document.createElement("button");
scissorsButton.classList.add("selection-button");
scissorsButton.id = "scissorsButton";
scissorsButton.textContent = "Select scissors!"
buttonDiv.appendChild(scissorsButton);

// Scoring div creation
const scoringDiv = document.createElement('div');
scoringDiv.id = "scoringDiv";
document.body.appendChild(scoringDiv);
scoringDiv.textContent = `Score: You ${humanScore} | Computer ${computerScore}`;

// Button event listeners
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    updateScore();
    endGame(humanScore, computerScore);
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
    updateScore();
    endGame(humanScore, computerScore);
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
    updateScore();
    endGame(humanScore, computerScore);
});

// Scoring div implementation function
function updateScore() {
    scoringDiv.textContent = `Score: You ${humanScore} | Computer ${computerScore}`;
}

let buttonsDesign = document.querySelectorAll("selection-button");
buttonsDesign.style.color = "black";
