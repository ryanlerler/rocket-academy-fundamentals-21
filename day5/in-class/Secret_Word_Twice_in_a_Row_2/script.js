let winCount = 0;
let remainingCorrectGuessCountToWin = 2;
let lastWord = "";

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

// assign lastWord which is empty string to secretWord
// since secretWord == lastWord == empty string, run getRandomWord() then store the value in secretWord (for eg. banana)
// update lastWord to current secretWord (i.e. banana)
// assign lastWord (banana) to secretWord (banana)
// since secretWord == lastWord == 'banana', run getRandomWord() to get a different word then store the value in secretWord (for eg. faucet or chisel)
const getDifferentRandomWord = function () {
  let secretWord = lastWord;
  while (secretWord == lastWord) {
    secretWord = getRandomWord();
  }
  lastWord = secretWord;
  return secretWord;
};

const playGame = function (input) {
  let randomWord = getDifferentRandomWord();
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
