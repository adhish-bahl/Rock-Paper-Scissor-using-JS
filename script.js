const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".result");
const userScoreDOM = document.querySelector(".userScore");
const compScoreDOM = document.querySelector(".compScore");
const scoreBoard = document.querySelector(".scoreBoard");
let userScore = 0;
let compScore = 0;

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"]
    let computerAction = choice[Math.floor(Math.random() * 3)];
    console.log(computerAction);
    return computerAction;
}

function resultDisplay(result, userChoice, computerChoice) {
    switch(result) {
        case "userWin": userScore++;
                        result.textContent = document.createTextNode(userChoice + "<sub>user</sub> beats " + computerChoice + "<sub>comp</sub>. You Win!");
                        scoreBoard.style.border = "5px solid green";
                        break;
        case "compWin": compScore++;
                        result.textContent = document.createTextNode(computerChoice + "<sub>comp</sub> beats " + userChoice + "<sub>user</sub>. You Lost!");
                        scoreBoard.style.border = "5px solid red";
                        break;
        case "tie": scoreBoard.style.border = "5px solid grey";
                    result.textContent = document.createTextNode(userChoice + "<sub>user</sub> equals " + computerChoice + "<sub>comp</sub>. It's tie!");
                    break;
    }
    setInterval(()=> {
        scoreBoard.style.border = "5px solid var(--darkBlue)";
    }, 1500);

    userScoreDOM.textContent = userScore;
    compScoreDOM.textContent = compScore;
}

function compareAndScore(userChoice) {

    let computerChoice = getComputerChoice();
    
    switch(userChoice) {
        case "rock": switch(computerChoice) {
                            case "rock":  resultDisplay("tie", userChoice, computerChoice);
                                        break;
                            case "paper": resultDisplay("compWin", userChoice, computerChoice);
                                        break;
                            case "scissors": resultDisplay("userWin", userChoice, computerChoice);
                                            break;
                        }
                        break;

        case "paper": switch(computerChoice) {
                            case "rock": resultDisplay("userWin", userChoice, computerChoice);
                                        break;
                            case "paper": resultDisplay("tie", userChoice, computerChoice);
                                        break;
                            case "scissors": resultDisplay("compWin", userChoice, computerChoice);
                                            break;
                        }
                        break;
        
        case "scissors": switch(computerChoice) {
                            case "rock": resultDisplay("compWin", userChoice, computerChoice);
                                        break;
                            case "paper": resultDisplay("userWin", userChoice, computerChoice);
                                        break;
                            case "scissors": resultDisplay("tie", userChoice, computerChoice);
                                            break;
                        }
                        break;
    }
}

rock.addEventListener("click", ()=> {
    compareAndScore("rock");
});

paper.addEventListener("click", ()=> {
    compareAndScore("paper");
});

scissors.addEventListener("click", ()=> {
    compareAndScore("scissors");
});

