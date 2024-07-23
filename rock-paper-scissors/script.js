



function getComputerChoice() {
    let randomChoice = getRandomInt(3);
    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    let userChoice = prompt("Enter your choice: rock, paper, scissors").toLowerCase();
    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        alert("Invalid input");
        userChoice = prompt("Enter your choice: rock, paper, scissors").toLowerCase();
    }
    return userChoice;
}



function playGame() {
    let humanScore = computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        
        switch (humanChoice()) {
            case computerChoice():
                console.log("You Draw");
                break;
            case "scissors":
                if (computerChoice == "rock") {
                    console.log("You lose! Rock beast Scissors");
                    computerScore += 1;
                } else {
                    console.log("You win! Scissors beats Paper");
                    humanScore += 1;
                }
                break;
            case "rock":
                if (computerChoice == "paper") {
                    console.log("You lose! Paper beast Rock");
                    computerScore += 1;
                } else {
                    console.log("You win! Rock beats Scissors");
                    humanScore += 1;
                }
                break;
            case "paper":
                if (computerChoice == "scissors") {
                    console.log("You lose! Scissors beast Paper");
                    computerScore += 1;
                } else {
                    console.log("You win! Paper beats Rock");
                    humanScore += 1;
                }
                break;
        }
    }
    for (let i=0; i<5; i++) {
        playRound(getHumanChoice, getComputerChoice)
    }
    console.log("Human Score:" + humanScore);
    console.log("Computer Score: " + computerScore);
    
    if (humanScore > computerScore) {
        alert("You win!");
    } else {
        alert("You lose!");
    }
}

playGame();

