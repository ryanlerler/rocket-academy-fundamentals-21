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
  let randomDiceNumber1 = rollDice();
  let randomDiceNumber2 = rollDice();
  if (
    randomDiceNumber1 == input ||
    randomDiceNumber2 == input ||
    randomDiceNumber1 + 1 == input ||
    randomDiceNumber1 - 1 == input ||
    randomDiceNumber2 + 1 == input ||
    randomDiceNumber2 - 1 == input ||
    (randomDiceNumber1 == 1 && randomDiceNumber2 == 1)
  ) {
    myOutputValue = "You win!";
  } else {
    myOutputValue = "You lose!";
  }
  return `You guessed ${input} and the computer rolled ${randomDiceNumber1} & ${randomDiceNumber2}. ${myOutputValue}`;
};
