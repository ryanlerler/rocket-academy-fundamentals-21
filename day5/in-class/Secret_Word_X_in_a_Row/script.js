let score = 0;
let conditionToWin = 0;
let remainingCorrectGuessCountToWin = 0;
let isANewRound = true;

const getConditionToWin = function () {
  return Math.floor(Math.random() * 3) + 2;
};

const getRandomWord = function () {
  let randomInteger = Math.floor(Math.random() * 3) + 1;
  if (randomInteger == 1) {
    return "banana";
  } else if (randomInteger == 2) {
    return "chisel";
  } else {
    return "faucet";
  }
};

const playGame = function (input) {
  // if it is the 1st round or a new round after the user has won, only then generate the condition to win
  // how many more correct guess to win depends on what the condition is
  // set the boolean to false to stop a new condition to be generated everytime when submit button is clicked until the user has won
  if (isANewRound) {
    conditionToWin = getConditionToWin();
    remainingCorrectGuessCountToWin = conditionToWin;
    isANewRound = false;
  }
  let randomWord = getRandomWord();
  let myOutputValue = "";
  // if user has guessed correctly
  if (input == randomWord) {
    // if user has guessed a word correctly but still has not achieved the full score yet
    score += 1;
    remainingCorrectGuessCountToWin -= 1;
    myOutputValue = `You guessed correctly! <br> You need ${remainingCorrectGuessCountToWin} more correct guess(es) to win.`;

    // if user has won, reset the score and set the boolean to true so a new round with new random condition will continue
    if (score == conditionToWin) {
      score = 0;
      isANewRound = true;
      myOutputValue = `You guessed correctly! <br> You Win!!! <br> Play again!`;
    }
  }
  // reset the score etc. as long as user has made a wrong guess, at any time, even if the user has guessed some words correctly previously
  else {
    score = 0;
    remainingCorrectGuessCountToWin = conditionToWin;
    myOutputValue = `You guessed wrongly! <br> You need ${conditionToWin} more correct guess(es) to win.`;
  }

  return `Guessed word: ${input}; <br> Secret word: ${randomWord}; <br> ${myOutputValue}`;
};

const main = function (input) {
  console.log(remainingCorrectGuessCountToWin);

  return playGame(input);
};

//
