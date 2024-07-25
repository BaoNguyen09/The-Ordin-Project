let humanScore = computerScore = 0;

const container = document.querySelector("#container");
const rock = document.createElement("button");
rock.textContent = "ROCK";
const paper = document.createElement("button");
paper.textContent = "PAPER";
const scissors = document.createElement("button");
scissors.textContent = "SCISSOR";
const div = document.createElement("div");
const humanS = document.createElement("h2");
const computerS = document.createElement("h2");
const result = document.createElement("h2");
div.appendChild(humanS);
div.appendChild(computerS);
div.appendChild(result);
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
container.appendChild(div);
humanS.textContent = "Human Score: ";
        computerS.textContent = "Computer Score: ";



rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

// if (humanScore > computerScore) {
//     alert("You win!");
// } else {
//     alert("You lose!");
// }

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


function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    switch (humanChoice) {
        case computerChoice:
            console.log("You Draw");
            break;
        case "scissors":
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore += 1;
            } else {
                console.log("You win! Scissors beats Paper");
                humanScore += 1;
            }
            break;
        case "rock":
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore += 1;
            } else {
                console.log("You win! Rock beats Scissors");
                humanScore += 1;
            }
            break;
        case "paper":
            if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper");
                computerScore += 1;
            } else {
                console.log("You win! Paper beats Rock");
                humanScore += 1;
            }
            break;
    }
    if (humanScore == 5 && computerScore < 5) {
        result.textContent = "You Win !";
    } else if (humanScore < 5 && computerScore == 5) {
        result.textContent = "You Lose !";
    }
    if (humanScore <= 5 && computerScore <= 5) {
        humanS.textContent = "Human Score: " + humanScore;
        computerS.textContent = "Computer Score: " + computerScore;
    }
    
}


