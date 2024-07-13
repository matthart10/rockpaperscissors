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