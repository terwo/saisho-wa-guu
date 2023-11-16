let playerScore = 0;
let computerScore = 0;

// one round of rock paper scissors between the player selection and randomly generated computer selection
function playRound(playerSelection, computerSelection) {
    /// your code here!
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    let result = document.querySelector('.result h3');

    if (playerChoice === computerChoice) {
        result.textContent = "It's a tie!";
    } else {
        switch (playerChoice) {
        case "rock":
            if (computerChoice === "paper") {
                computerScore += 1;
                result.textContent = "You lose! Paper beats rock";
            } else {
                playerScore += 1;
                result.textContent = "You win! Rock beats scissors";
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                computerScore += 1;
                result.textContent = "You lose! Scissors beats paper";
            } else {
                playerScore += 1;
                result.textContent = "You win! Paper beats rock";
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                computerScore += 1;
                result.textContent = "You lose! Rock beats scissors";
            } else {
                playerScore += 1;
                result.textContent = "You win! Scissors beats paper";
            }
            break;
        }
        let newPlayerScore = document.querySelector('.player h3');
        let newComputerScore = document.querySelector('.computer h3');

        newPlayerScore.textContent = `Player: ${playerScore}`;
        newComputerScore.textContent = `Computer: ${computerScore}`;

        if (playerScore === 5 || computerScore === 5) {
            const finalResult = document.createElement('h3');
            finalResult.style.marginTop = "20px";
            finalResult.textContent = game();
            document.querySelector('.content').appendChild(finalResult);
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
    if (playerScore > computerScore) {
        return "You win!";
    } else  {
        return "You lose!";
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
    const selection = "rock";
    playRound(selection, getComputerChoice());
});

paper.addEventListener("click", () => {
    const selection = "paper";
    playRound(selection, getComputerChoice());
});

scissors.addEventListener("click", () => {
    const selection = "scissors";
    playRound(selection, getComputerChoice());
});
