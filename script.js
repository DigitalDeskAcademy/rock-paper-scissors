"use strict"; // Enforce strict mode for better error-checking

// Code goes here

// Global Variables
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

const getComputerChoice = function () {
  // Create a function that takes a random number of 1,2,3 and return rock for 1, paper for 2, scissors for 3.
  const choices = ["rock", "paper", "scissors"];

  const rollIndex = Math.floor(Math.random() * 3);
  return choices[rollIndex];
};

const getHumanChoice = function () {
  const choices = ["rock", "paper", "scissors"];

  const rollIndex = Math.floor(Math.random() * 3);
  return choices[rollIndex];
  //   const humanChoice = prompt("Please enter rock, paper or scissors: ");
  //   return humanChoice;
};

const playRound = function () {
  const human = getHumanChoice();
  const computer = getComputerChoice();

  if (human === computer) {
    console.log("It's a tie!");
    tieScore += 1;
  }

  else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    console.log("Human wins");
    humanScore += 1;
  } else {
    console.log("Computer wins!");
    computerScore += 1;
  }

  console.log(
    `The score is humans: ${humanScore} to computers: ${computerScore} with ${tieScore} matches ending in a draw.`
  );
};

const playGame = function () {
  humanScore = 0;
  computerScore = 0;
  tieScore = 0;

  while (humanScore < 5 && computerScore < 5) {
    playRound();
  }
  console.log(
    `The FINAL score is humans: ${humanScore} to computers: ${computerScore} with ${tieScore} matches ending in a draw.`
  );
};

playGame();
