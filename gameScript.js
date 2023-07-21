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
    if (turns_left == 0) {
        document.getElementById("reset_button").disabled = false
        document.getElementById("reset_button").hidden = false
    }
    document.getElementById("turns_left").textContent = "Turns left: " + turns_left
    if (playerSelection == "rock" && computerSelection == "scissors") {
        plr_score++
        document.getElementById("player_score").textContent = "Player Score: " + plr_score
        document.getElementById("commentary").textContent = "Player chose Rock and Computer chose Scissors"
        return "You Win!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        plr_score++
        document.getElementById("player_score").textContent = "Player Score: " + plr_score
        document.getElementById("commentary").textContent = "Player chose Paper and Computer chose Rock"
        return "You Win!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        plr_score++
        document.getElementById("player_score").textContent = "Player Score: " + plr_score
        document.getElementById("commentary").textContent = "Player chose Scissors and Computer chose Paper"
        return "You Win!";
    }

    // Computer Wins Logic
    if (computerSelection == "rock" && playerSelection == "scissors") {
        comp_score++
        document.getElementById("computer_score").textContent = "Computer Score: " + comp_score
        document.getElementById("commentary").textContent = "Player chose Rock and Computer chose Scissors"
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
    const rock_button = document.getElementById('rock_button');
    const paper_button = document.getElementById('paper_button');
    const scissors_button = document.getElementById('scissors_button');
   
    const reset_button = document.getElementById('reset_button');

    reset_button.hidden = true

    // Choices Buttons

    rock_button.addEventListener("click", function() { 
        if (turns_left != 0) {
            playRound("rock", getComputerChoice())
        }
    })

    paper_button.addEventListener("click", function() { 
        if (turns_left != 0) {
            playRound("paper", getComputerChoice())
        }
    })

    scissors_button.addEventListener("click", function() { 
        if (turns_left != 0) {
            playRound("scissors", getComputerChoice())
        }
    })

    // Reset Button

    reset_button.addEventListener("click", function() { 
        if (turns_left == 0) {
            turns_left = 5
            comp_score = 0
            plr_score = 0

            document.getElementById("turns_left").textContent = "Turns left: " + turns_left
                
            document.getElementById("player_score").textContent = "Player Score: " + plr_score
            document.getElementById("computer_score").textContent = "Computer Score: " + comp_score

            reset_button.hidden = true
            reset_button.disabled = true;
        }
    })
})