/******************************************************
 * create getComputerChoice function, randomly selects rock, paper or scissors
 * create a getUserInput function, takes in input from console
 * check input is valid, then compare to computerChoice to see who won
 * create global value to keep scores
 * make function to play a round
 * user input should be case-insensitive
 * put everything in playgame function to run a 5 round game
 ******************************************************/

//Global Variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  if (rand === 0) {
    return 1; //rock
  } else if (rand === 1) {
    return 2; //paper
  } else return 3; //scissors
}

function getHumanChoice() {
  while (true) {
    let choice = prompt("Please Input your choice (Rock/Paper/Scissors): ");
    let choiceLower = choice.toLowerCase();
    if (choiceLower === "rock") {
      return 1;
    } else if (choiceLower === "paper") {
      return 2;
    } else if (choice === "scissors") return 3;
    else {
      console.log("invalid input, try again");
      continue;
    }
  }
}

function determineRoundWinner(humanChoice, ComputerChoice) {
  if (ComputerChoice === 1) {
    if (humanChoice === 2) {
      console.log("You Win! Paper beats Rock");
      humanScore++;
    } else if (humanChoice === 3) {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    } else console.log("You both chose Rock! Tie game");
  } else if (ComputerChoice === 2) {
    if (humanChoice === 1) {
      console.log("You Lose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice === 3) {
      console.log("You Win! Scisssors beat Paper");
      humanScore++;
    } else console.log("You both chose Paper! Tie game");
  } else {
    if (humanChoice === 1) {
      console.log("You Win! Rock beats scissors");
      humanScore++;
    } else if (humanChoice === 2) {
      console.log("You lose! Scissors beat Paper");
      computerScore++;
    } else console.log("You both chose Scissor! Tie game");
  }
}

function playRound() {
  const computerSelect = getComputerChoice();
  const humanSelect = getHumanChoice();
  determineRoundWinner(humanSelect, computerSelect);
  console.log(
    `Current Score:\n You: ${humanScore}\n Computer: ${computerScore}`,
  );
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    console.log(`You Win! score is ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose! score is ${humanScore} to ${computerScore}`);
  } else {
    console.log(`You Tied! score is ${humanScore} to ${computerScore}`);
  }
}
