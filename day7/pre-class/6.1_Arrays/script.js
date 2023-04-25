let userGuess = [];
let bankRoll = 10;

const rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const main = function (input) {
  userGuess.push(input);
  let randomDiceNumber = rollDice();
  let myOutputValue;
  if (input == randomDiceNumber) {
    bankRoll += 1;
    myOutputValue = "You win!";
  } else {
    myOutputValue = "You lose!";
  }
  return `You guessed ${input} and the computer rolled ${randomDiceNumber}. ${myOutputValue}<br>
  Bankroll: ${bankRoll} <br>
  Previous guesses: ${userGuess}`;
};
