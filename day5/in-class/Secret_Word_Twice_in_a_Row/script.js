let winCount = 0;
let remainingCorrectGuessCountToWin = 2;

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
  let randomWord = getRandomWord();
  let myOutputValue = "";
  if (input == randomWord) {
    winCount += 1;
    remainingCorrectGuessCountToWin -= 1;
    myOutputValue = `You guessed correctly! <br> You need ${remainingCorrectGuessCountToWin} more correct guess(es) to win.`;

    if (winCount == 2) {
      winCount = 0;
      remainingCorrectGuessCountToWin = 2;
      myOutputValue = `You guessed correctly! <br> You Win!!! <br> Play again!`;
    }
  }
  // Reset as long as the input is a wrong guess, doesn's matter if winCount is 0 or 1
  else {
    winCount = 0;
    remainingCorrectGuessCountToWin = 2;
    myOutputValue = `You guessed wrongly! <br> You need ${remainingCorrectGuessCountToWin} more correct guess(es) to win.`;
  }

  return `Guessed word: ${input}; <br> Secret word: ${randomWord}; <br> ${myOutputValue}`;
};

const main = function (input) {
  return playGame(input);
};
