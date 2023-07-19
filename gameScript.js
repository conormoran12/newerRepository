
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    const min = 1;
    const max = 4;

    let result = Math.floor(Math.random() * (max - min) + min);
    return choices[result-1];
}

function playRound(playerSelection, computerSelection) {
    // Player Wins Logic
    
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win!";
    }

    // Computer Wins Logic
    if (computerSelection == "rock" && playerSelection == "scissors") {
        return "Computer Wins!";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "Computer Wins!";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "Computer Wins!";
    }

    // Draw Logic

    if (playerSelection == computerSelection) {
        return "Draw!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper or Scissors?");
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}

game()