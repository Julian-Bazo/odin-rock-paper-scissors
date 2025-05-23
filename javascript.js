console.log("Hello WORLD!");

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



let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

// Allows for the scoring of multiple back-to-back rounds. Ends when a score reaches 5.
function playGame() {

//Initializes scoring mechanism integers
    let humanScore = 0;
    let computerScore = 0;

    console.log(humanChoice);

    console.log(playRound(humanChoice, computerChoice));
    alert("You: " + humanScore + " | Computer: " + computerScore);
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    alert("You: " + humanScore + " | Computer: " + computerScore);
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    alert("You: " + humanScore + " | Computer: " + computerScore);
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    alert("You: " + humanScore + " | Computer: " + computerScore);
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    alert("You: " + humanScore + " | Computer: " + computerScore);
    alert("FINAL --> You: " + humanScore + " | Computer: " + computerScore);

//Allows for the playing and scoring of a round
    function playRound(humanChoice, computerChoice) {

        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return "You win! Rock beats scissors!";
        }

        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return "You win! Paper beats rock!";
        }

        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return "You win! Scissors beats paper!";
        }

        else if (computerChoice === "rock" && humanChoice === "scissors") {
            computerScore++;
            return "You lose! Rock beats scissors!"
        }

        else if (computerChoice === "paper" && humanChoice === "rock") {
            computerScore++;
            return "You lose! Paper beats rock!"
        }

        else if (computerChoice === "scissors" && humanChoice === "paper") {
            computerScore++;
            return "You lose! Scissors beats paper!"
        }

        else {
            return "It's a tie, try again!";
        }
    }

}

playGame();
// console.log(playRound(humanChoice, computerChoice));
// console.log("You: " + humanScore + " | Computer: " + computerScore);
