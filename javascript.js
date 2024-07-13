function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice = humanChoice.toLowerCase();
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*10);
    if (computerChoice <= 2) {
        computerChoice = "rock";
    } else if (computerChoice <= 5) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore = humanScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore = computerScore + 1;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Tie! You both picked Scissors.");
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Tie! You both picked Rock.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore = humanScore + 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Scissors beats Rock");
        computerScore = computerScore + 1;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore = computerScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Tie! You both picked Paper.");
    } else {
        console.log("You win! Scissors beats Paper.");
        humanScore = humanScore + 1;
    }
}