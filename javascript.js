function getHumanChoice() {
    let checker = true;
    let humanChoice = "";
    while (checker) {
        humanChoice = prompt("Rock, Paper or Scissors?");
        humanChoice = humanChoice.toLowerCase();
        let choice1 = "rock";
        let choice2 = "paper";
        let choice3 = "scissors";
        if (humanChoice.localeCompare(choice1) == 0 || humanChoice.localeCompare(choice2) == 0 || humanChoice.localeCompare(choice3) == 0) {
            checker = false;
        } else {
            console.log("Not an option, try again.");
        }
    }
    return humanChoice;
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
    return computerChoice;
}



let humanScore = 0;
let computerScore = 0;

console.log("Welcome to the Rock, Paper, Scissors game! You will play 5 rounds with the computer!");

for (let i = 0; i < 5; i++) {

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


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);
console.log("Your score: " + humanScore + " Computer score: " + computerScore);
}