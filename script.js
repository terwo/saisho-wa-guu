let playerScore = 0;
let computerScore = 0;

// one round of rock paper scissors between the player selection and randomly generated computer selection
function playRound(playerSelection, computerSelection) {
    /// your code here!
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        switch (playerChoice) {
        case "rock":
            if (computerChoice === "paper") {
                computerScore += 1;
                console.log("You lose! Paper beats rock");
            } else {
                playerScore += 1;
                console.log("You win! Rock beats scissors");
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                computerScore += 1;
                console.log("You lose! Scissors beats paper");
            } else {
                playerScore += 1;
                console.log("You win! Paper beats rock");
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                computerScore += 1;
                console.log("You lose! Rock beats scissors");
            } else {
                playerScore += 1;
                console.log("You win! Scissors beats paper");
            }
            break;
        }
    }


}

// randomly return "rock", "paper" or "scissors"
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randChoice = Math.floor(Math.random() * 3);
    return choices[randChoice];
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    let winner = function() {
        if (playerScore > computerScore) {
            return "You win!";
        } else if (playerScore < computerScore) {
            return "You lose!";
        } else {
            return "It's a tie!";
        }
    }
    console.log(`Player score: ${playerScore} vs. Computer score: ${computerScore}. ${winner()}`);
}

game();
