let bankRoll = 10;

const rollDice = function () {
  let randomInteger = Math.floor(Math.random() * 6);
  let diceNumber = randomInteger + 1;
  return diceNumber;
};

const main = function (input) {
  let randomDiceNumber = rollDice();
  let myOutputValue;
  if (input == randomDiceNumber) {
    bankRoll += 1;
    myOutputValue = "You win!";
  } else {
    myOutputValue = "You lose!";
  }
  return `You guessed ${input} and the computer rolled ${randomDiceNumber}. ${myOutputValue}<br>
  Bankroll: ${bankRoll}`;
};
