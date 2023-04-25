let lastRoll = 0;

const rollDice = function () {
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  return diceNumber;
};

const updateLastRoll = function () {
  if (lastRoll == 0) {
    let message = "This was your first roll";
  } else {
    message = `You last roll was ${lastRoll}`;
  }
  return message;
};

const main = function (input) {
  let randomDiceNumber = rollDice();
  let lastRollMessage = updateLastRoll();
  lastRoll = randomDiceNumber;
  let myOutputValue;
  if (randomDiceNumber == input) {
    myOutputValue = "You win!";
  } else {
    myOutputValue = "You lose!";
  }
  return `${lastRollMessage}. You guessed ${input} and the computer rolled ${randomDiceNumber}. ${myOutputValue}`;
};
