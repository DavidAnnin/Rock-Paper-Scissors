// function to get computer's choice
function getComputerChoice(){
    // this function has to able to return one of these strings "rock", "paper", "scissors"
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// function to take the choice of the player and returns it
function getHumanChoice() {
    return prompt("Player what is your move - either Rock, Paper or Scissors");
}

// function takes the computerChoice and the humanChoice as arguments
function playRound(humanChoice, computerChoice){
    // convert the human choice to lowercase
    humanChoice = humanChoice.toLowerCase();
    console.log("Computer chose: " + computerChoice);
    console.log("You chose: " + humanChoice);

    if (humanChoice === computerChoice){
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        console.log("You win this round!");
        return "win";
    } else {
        console.log("You lose this round!");
        return "lose";
    }
}

// function to play the game for 5 rounds
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    for (let round = 1; round <= 5; round++) {
        console.log("Round " + round);
        
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let result = playRound(humanChoice, computerChoice);

        if (result === "win") {
            humanScore++;
        }
        else if (result === "lose"){
            computerScore++;
        }

        console.log("Score: You " + humanScore + " - Computer " + computerScore);
    }

    console.log("Final Result");
    if (humanScore > computerScore){
        console.log("You are the winner!");
    } else if (humanScore < computerScore){
        console.log("Computer Wins!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();