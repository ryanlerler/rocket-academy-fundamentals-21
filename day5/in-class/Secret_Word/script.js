let winCount = 0;
let correctGuessCountToWin = 2;

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
    correctGuessCountToWin -= 1;
    myOutputValue = `You guessed correctly! <br> You need ${correctGuessCountToWin} more correct guess(es) to win.`;

    if (winCount == 2) {
      winCount = 0;
      correctGuessCountToWin = 2;
      myOutputValue = `You guessed correctly! <br> You Win!!! <br> Play again!`;
    }
  } else {
    myOutputValue = `You guessed wrongly! <br> You need ${correctGuessCountToWin} more correct guess(es) to win.`;
  }
  return `Guessed word: ${input}; <br> Secret word: ${randomWord}; <br> ${myOutputValue}`;
};

const main = function (input) {
  return playGame(input);
};
