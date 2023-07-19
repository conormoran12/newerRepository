let plr_score = 0;
let comp_score = 0;
let turns_left = 5;


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    const min = 1;
    const max = 4;

    let result = Math.floor(Math.random() * (max - min) + min);
    return choices[result-1];
}

function playRound(playerSelection, computerSelection) {
    // Player Wins Logic
    turns_left--
    if (playerSelection == "rock" && computerSelection == "scissors") {
        plr_score++
        document.getElementById("player_score").textContent = "Player Score: " + plr_score
        return "You Win!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        plr_score++
        document.getElementById("player_score").textContent = "Player Score: " + plr_score
        return "You Win!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        plr_score++
        document.getElementById("player_score").textContent = "Player Score: " + plr_score
        return "You Win!";
    }

    // Computer Wins Logic
    if (computerSelection == "rock" && playerSelection == "scissors") {
        comp_score++
        document.getElementById("computer_score").textContent = "Computer Score: " + comp_score
        return "Computer Wins!";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        comp_score++
        document.getElementById("computer_score").textContent = "Computer Score: " + comp_score
        return "Computer Wins!";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        comp_score++
        document.getElementById("computer_score").textContent = "Computer Score: " + comp_score
        return "Computer Wins!";
    }

    // Draw Logic
    if (playerSelection == computerSelection) {
        return "Draw!";
    }
    
}

window.addEventListener("DOMContentLoaded", (event) => {
    const el1 = document.getElementById('rock_button');
    const el2 = document.getElementById('paper_button');
    const el3 = document.getElementById('scissors_button');
    if (el1) {
        el1.addEventListener("click", function() { 
                if (turns != 0) {
                    playRound("rock", getComputerChoice())
                }
        })
    //} else if (el2) {
        //el2.addEventListener("click", function() { playRound("paper", getComputerChoice()) })
   // } else if (el3) {
       // el3.addEventListener("click", function() { playRound("scissors", getComputerChoice()) })
    }
})