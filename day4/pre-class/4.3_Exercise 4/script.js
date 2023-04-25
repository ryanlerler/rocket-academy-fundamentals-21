const rollDice = function () {
  let randomInteger = Math.floor(Math.random() * 6);
  let diceNumber = randomInteger + 1;
  return diceNumber;
};

const main = function (input) {
  let randomDiceNumber1 = rollDice();
  let randomDiceNumber2 = rollDice();
  let myOutputValue;
  if (
    // snake eyes
    (randomDiceNumber1 == 1 && randomDiceNumber2 == 1) ||
    // Within 1 for any dice
    Math.abs(randomDiceNumber1 - input) <= 1 ||
    Math.abs(randomDiceNumber2 - input) <= 1
  ) {
    myOutputValue = "You win!";
  } else {
    myOutputValue = "You lose!";
  }
  return `You guessed ${input} and the computer rolled ${randomDiceNumber1} & ${randomDiceNumber2}. ${myOutputValue}`;
};
