const rollDice = function () {
  let randomInteger = Math.floor(Math.random() * 6);
  let diceNumber = randomInteger + 1;
  return diceNumber;
};

const main = function (input) {
  let myOutputValue;
  if (Number.isNaN(Number(input))) {
    return (myOutputValue = "sorry please enter a number");
  }

  if (input < 1 || input > 6) {
    return (myOutputValue = "sorry please enter a number from 1 - 6");
  }
  let randomDiceNumber = rollDice();
  if (randomDiceNumber == input) {
    return (myOutputValue = "You win!");
  } else {
    return (myOutputValue = "You lose!");
  }
};
