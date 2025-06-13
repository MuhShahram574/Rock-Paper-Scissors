const playBtn = document.querySelectorAll(".playbtn");
const message = function (message) {
  document.querySelector(".message").textContent = message;
};
const playerScoreEl = function (val) {
  document.querySelector(".player--score").textContent = val;
};

const computerScoreEl = function (message) {
  document.querySelector(".computer--score").textContent = message;
};

const playerChoice = function (playerGuess) {
  const playerChoice =
    playerGuess === 0 ? "Rock" : playerGuess === 1 ? "Paper" : "Scissors";

  return playerChoice;
};
const computerChoice = function (computerGuess) {
  const computerChoice =
    computerGuess === 0 ? "Rock" : computerGuess === 1 ? "Paper" : "Scissors";
  return computerChoice;
};

const playerWinningMsg = function (playerGuess, computerGuess) {
  return `Your Guess is ${playerChoice(
    playerGuess
  )} and Computer's guess is ${computerChoice(
    computerGuess
  )}. Hence, You win this point.`;
};
const computerWinningMsg = function (playerGuess, computerGuess) {
  return `Your Guess is ${playerChoice(
    playerGuess
  )} and Computer's guess is ${computerChoice(
    computerGuess
  )}. Hence, Computer win this point.`;
};

let playerGuess;
let playerScore = 0;
let computerScore = 0;
playBtn.forEach((e, index) => {
  e.addEventListener("click", () => {
    if (computerScore < 10 && playerScore < 10) {
      playerGuess = index;
      let computerGuess = Math.floor(Math.random() * 3);

      if (playerGuess === 0 && computerGuess === 2) {
        playerScore++;
        playerScoreEl(playerScore);
        message(playerWinningMsg(playerGuess, computerGuess));
      }
      // /////////////////////// Rock = 0 ,paper = 1 and Scissors = 2
      else if (computerGuess === 0 && playerGuess === 2) {
        computerScore++;
        computerScoreEl(computerScore);
        message(computerWinningMsg(playerGuess, computerGuess));
      }
      // ///////////////////////
      else if (playerGuess === 2 && computerGuess === 1) {
        playerScore++;
        playerScoreEl(playerScore);
        message(playerWinningMsg(playerGuess, computerGuess));
      }
      // ///////////////////////
      else if (computerGuess === 2 && playerGuess === 1) {
        computerScore++;
        computerScoreEl(computerScore);
        message(computerWinningMsg(playerGuess, computerGuess));
      }
      // /////////////////////// Rock = 0 ,paper = 1 and Scissors = 2
      else if (playerGuess === 1 && computerGuess === 0) {
        playerScore++;
        playerScoreEl(playerScore);
        message(playerWinningMsg(playerGuess, computerGuess));
      }
      // ///////////////////////  Rock = 0 ,paper = 1 and Scissors = 2
      else if (computerGuess === 1 && playerGuess === 0) {
        computerScore++;
        computerScoreEl(computerScore);
        message(computerWinningMsg(playerGuess, computerGuess));
      } else {
        message(
          `Your Guess is ${
            playerGuess === 0
              ? "Rock"
              : playerGuess === 1
              ? "Paper"
              : "Scissors"
          } and computer's guess is also ${
            computerGuess === 0
              ? "Rock"
              : computerGuess === 1
              ? "Paper"
              : "Scissors"
          } Hence , It is Tie`
        );
      }
    } else {
      playerScore === 10
        ? message(
            `🎉 You win the game! Final Score: ${playerScore} - ${computerScore}`
          )
        : message(
            `😢 You lost the game. Final Score: ${playerScore} - ${computerScore}`
          );
      for (const element of playBtn) {
        element.classList.remove(
          "focus:bg-gray-200/50",
          "hover:bg-gray-200/40"
        );
      }
    }
  });
});
