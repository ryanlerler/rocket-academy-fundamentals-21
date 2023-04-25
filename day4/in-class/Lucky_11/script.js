const rollDice = function () {
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  return diceNumber;
};

const main = function (input) {
  let randomDiceNumber1 = rollDice();
  let randomDiceNumber2 = rollDice();
  let myOutputValue;
  if (
    input == randomDiceNumber1 ||
    input == randomDiceNumber2 ||
    randomDiceNumber1 + randomDiceNumber2 == 11
  ) {
    myOutputValue = "You win!";
  } else {
    myOutputValue = "You lose!";
  }
  return `You guessed ${input} and the computer rolled ${randomDiceNumber1} & ${randomDiceNumber2}. ${myOutputValue}`;
};
