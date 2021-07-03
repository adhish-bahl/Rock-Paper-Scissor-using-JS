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
    const choice = ["Rock", "Paper", "Scissors"]
    let computerAction = choice[Math.floor(Math.random() * 3)];
    console.log(computerAction);
    return computerAction;
}

function resultDisplay(result123, userChoice, computerChoice) {
    const subComp = "comp".fontsize(3).sub();
    const subUser = "user".fontsize(3).sub();
    switch(result123) {
        case "userWin": userScore++;
                        // result.appendChild(userChoice + subUser + " beats " + computerChoice + subComp + ". You Win!")
                        result.innerHTML = `${userChoice}${subUser}  beats  ${computerChoice}${subComp} . You Win!`;
                        scoreBoard.style.border = "5px solid green";
                        break;
        case "compWin": compScore++;
                        result.innerHTML = `${computerChoice}${subComp} beats ${userChoice}${subUser}. You Lost!`;
                        scoreBoard.style.border = "5px solid red";
                        break;
        case "tie": scoreBoard.style.border = "5px solid grey";
                    result.innerHTML = `${userChoice}${subUser} equals ${computerChoice}${subComp}. It's tie!"`;
                    break;
    }
    setTimeout(()=> {
        scoreBoard.style.border = "5px solid var(--darkBlue)";
    }, 500);

    userScoreDOM.textContent = userScore;
    compScoreDOM.textContent = compScore;
}

function compareAndScore(userChoice) {

    let computerChoice = getComputerChoice();
    
    switch(userChoice) {
        case "Rock": switch(computerChoice) {
                            case "Rock":  resultDisplay("tie", userChoice, computerChoice);
                                        break;
                            case "Paper": resultDisplay("compWin", userChoice, computerChoice);
                                        break;
                            case "Scissors": resultDisplay("userWin", userChoice, computerChoice);
                                            break;
                        }
                        break;

        case "Paper": switch(computerChoice) {
                            case "Rock": resultDisplay("userWin", userChoice, computerChoice);
                                        break;
                            case "Paper": resultDisplay("tie", userChoice, computerChoice);
                                        break;
                            case "Scissors": resultDisplay("compWin", userChoice, computerChoice);
                                            break;
                        }
                        break;
        
        case "Scissors": switch(computerChoice) {
                            case "Rock": resultDisplay("compWin", userChoice, computerChoice);
                                        break;
                            case "Paper": resultDisplay("userWin", userChoice, computerChoice);
                                        break;
                            case "Scissors": resultDisplay("tie", userChoice, computerChoice);
                                            break;
                        }
                        break;
    }
}

rock.addEventListener("click", ()=> {
    compareAndScore("Rock");
});

paper.addEventListener("click", ()=> {
    compareAndScore("Paper");
});

scissors.addEventListener("click", ()=> {
    compareAndScore("Scissors");
});

