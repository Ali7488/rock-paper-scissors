//Global Variables
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);

  if (rand === 0) {
    return "rock";
  } else if (rand === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function determineRoundWinner(humanChoice, computerChoice) {
  if (gameOver) {
    return;
  }
  if (humanChoice === computerChoice) {
    resultsTag.textContent = "Tie game!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultsTag.textContent = "You win this round!";
    humanScore++;
  } else {
    resultsTag.textContent = "You lost this round!";
    computerScore++;
  }
}

function playRound(humanSelect) {
  const computerSelect = getComputerChoice();
  determineRoundWinner(humanSelect, computerSelect);
  if (humanScore === 5 && computerScore < 5) {
    resultsTag.textContent = "You beat the computer!";
    gameOver = true;
    setTimeout(resetGame, 3000);
  } else if (computerScore === 5) {
    resultsTag.textContent = "You lost to the computer!";
    gameOver = true;
    setTimeout(resetGame, 3000);
  }
  humanScoreTag.textContent = humanScore;
  computerScoreTag.textContent = computerScore;
}

//extracting all the data needed from html
const playGameButton = document.querySelector("#intro-button");
const introSegment = document.querySelector(".intro-screen");
const gameScreen = document.querySelector(".game-screen");
const humanScoreTag = document.querySelector("#human-score");
const computerScoreTag = document.querySelector("#computer-score");
const gameButtons = document.querySelectorAll(".game-buttons");
const resultsTag = document.querySelector("#results");

//Listeners for when buttons are pressed
playGameButton.addEventListener("click", startGame);
gameButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const humansChoice = button.dataset.choice;
    playRound(humansChoice);
  });
});

function hideStartButton() {
  playGameButton.classList.add("hidden");
  introSegment.classList.add("hidden");
}
function unhideGame() {
  gameScreen.classList.remove("hidden");
}
function startGame() {
  hideStartButton();
  unhideGame();
}

//Reseting the game
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;

  humanScoreTag.textContent = humanScore;
  computerScoreTag.textContent = computerScore;
  resultsTag.textContent = "Choose your next move.";
}
