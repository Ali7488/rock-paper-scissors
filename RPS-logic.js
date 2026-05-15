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
    let choiceLower = choice.toLowerCase(); //makes the prompt case-insensitive
    if (choiceLower === "rock") {
      return 1;
    } else if (choiceLower === "paper") {
      return 2;
    } else if (choice === "scissors") return 3;
    else {
      alert("invalid input, try again");
      continue;
    }
  }
}

function determineRoundWinner(humanChoice, ComputerChoice) {
  //an if-else jungle just to determine the winner of each round
  if (ComputerChoice === 1) {
    if (humanChoice === 2) {
      alert("You Win! Paper beats Rock");
      humanScore++;
    } else if (humanChoice === 3) {
      alert("You lose! Rock beats Scissors");
      computerScore++;
    } else alert("You both chose Rock! Tie game");
  } else if (ComputerChoice === 2) {
    if (humanChoice === 1) {
      alert("You Lose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice === 3) {
      alert("You Win! Scisssors beat Paper");
      humanScore++;
    } else alert("You both chose Paper! Tie game");
  } else {
    if (humanChoice === 1) {
      alert("You Win! Rock beats scissors");
      humanScore++;
    } else if (humanChoice === 2) {
      alert("You lose! Scissors beat Paper");
      computerScore++;
    } else alert("You both chose Scissor! Tie game");
  }
}

function playRound() {
  const computerSelect = getComputerChoice();
  const humanSelect = getHumanChoice();
  determineRoundWinner(humanSelect, computerSelect);
  alert(`Current Score:\n You: ${humanScore}\n Computer: ${computerScore}`);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    alert(`You Win! score is ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    alert(`You lose! score is ${humanScore} to ${computerScore}`);
  } else {
    alert(`You Tied! score is ${humanScore} to ${computerScore}`);
  }
}

const playGameButton = document.querySelector("#intro-button");
function hideButton() {
  playGameButton.classList.add("hidden");
}

playGameButton.addEventListener("click", hideButton);
