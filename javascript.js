let humanSelection = "";
let computerSelection = "";
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const winnerRoundReport = document.querySelector("#winnerRound");
const scoreReport = document.querySelector("#score");
const winnerReport = document.querySelector("#finalWinner");
let humanScore = 0;
let computerScore = 0;
var pRound = document.createElement("p");
var pWinner = document.createElement("p");
var pScore = document.createElement("p");

btnRock.addEventListener("click", () => {
    rockChosen();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

btnPaper.addEventListener("click", () => {
    paperChosen();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

btnScissors.addEventListener("click", () => {
    scissorsChosen();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

function rockChosen() {
    humanSelection = "rock";
    return humanSelection;
}

function paperChosen() {
    humanSelection = "paper";
    return humanSelection;
}

function scissorsChosen() {
    humanSelection = "scissors";
    return humanSelection;
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

console.log("Welcome to the Rock, Paper, Scissors game! You will play until someone has 5 wins!");


    function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        pRound.textContent = "You win! Rock beats Scissors.";
        winnerRoundReport.appendChild(pRound);
        humanScore = humanScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        pRound.textContent = "You lose! Scissors beats Paper.";
        winnerRoundReport.appendChild(pRound);
        computerScore = computerScore + 1;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        pRound.textContent = "Tie! You both picked Scissors.";
        winnerRoundReport.appendChild(pRound);
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        pRound.textContent = "Tie! You both picked Rock.";
        winnerRoundReport.appendChild(pRound);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        pRound.textContent = "You win! Paper beats Rock.";
        winnerRoundReport.appendChild(pRound);
        humanScore = humanScore + 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        pRound.textContent = "You lose! Scissors beats Rock";
        winnerRoundReport.appendChild(pRound);
        computerScore = computerScore + 1;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        pRound.textContent = "You lose! Paper beats Rock";
        winnerRoundReport.appendChild(pRound);
        computerScore = computerScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        pRound.textContent = "Tie! You both picked Paper.";
        winnerRoundReport.appendChild(pRound);
    } else {
        pRound.textContent = "You win! Scissors beats Paper.";
        winnerRoundReport.appendChild(pRound);
        humanScore = humanScore + 1;
    }
    pScore.textContent = "Your score: " + humanScore + " Computer's score: " + computerScore;
    scoreReport.appendChild(pScore);
    if (humanScore == 5) {
        pWinner.textContent = "You have won!";
        winnerReport.appendChild(pWinner);
    } else if (computerScore == 5) {
        pWinner.textContent = "Computer has won!";
        winnerReport.appendChild(pWinner);
    }
}