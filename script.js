"use strict"; // Enforce strict mode for better error-checking

// Code goes here

// Selectors
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const player1Text = document.querySelector("#player1-score");
const computerText = document.querySelector("#computer-score");
const tieScoreText = document.querySelector("#tie-score");

// Global Variables
let player1Score = 0;
let computerScore = 0;
let tieScore = 0;

btnRock.addEventListener("click", function () {
  console.log("test");
  playRound("rock");
});
btnPaper.addEventListener("click", function () {
  console.log("test");
  playRound("paper");
});
btnScissors.addEventListener("click", function () {
  console.log("test");
  playRound("scissors");
});

const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  const rollIndex = Math.floor(Math.random() * 3);
  return choices[rollIndex];
};

const playRound = function (humanChoice) {
  const computerChoice = getComputerChoice();
  console.log(`Human: ${humanChoice} vs Computer: ${computerChoice}`);

  if (player1Score < 5 && computerScore < 5) {
    if (humanChoice === computerChoice) {
      tieScore += 1;
      tieScoreText.textContent = tieScore;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      player1Score += 1;
      player1Text.textContent = player1Score;
      if (player1Score >= 5) {
        player1Text.textContent = "Player1 Wins";
      } else {
        player1Text.textContent = player1Score;
      }
    } else {
      computerScore += 1;
      if (computerScore >= 5) {
        computerText.textContent = "Computer Wins";
      } else computerText.textContent = computerScore;
    }

    console.log(
      `The score is humans: ${player1Score} to computers: ${computerScore} with ${tieScore} matches ending in a draw.`
    );
  }
};

const playGame = function () {
  player1Score = 0;
  computerScore = 0;
  tieScore = 0;

  while (player1Score < 5 && computerScore < 5) {
    playRound();
  }
  console.log(
    `The FINAL score is humans: ${player1Score} to computers: ${computerScore} with ${tieScore} matches ending in a draw.`
  );
};
