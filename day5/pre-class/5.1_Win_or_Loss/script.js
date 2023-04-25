let lastRoll = 0;
let gameCount = 0;
let winCount = 0;

const rollDice = function () {
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  return diceNumber;
};

const updateLastRoll = function () {
  if (lastRoll == 0) {
    let message;
    message = "This was your first roll";
  } else {
    message = `You last roll was ${lastRoll}`;
  }
  return message;
};

const calcWinningPercent = function () {
  return ((winCount / gameCount) * 100).toFixed(2);
};

const main = function (input) {
  gameCount += 1;
  let randomDiceNumber = rollDice();
  let lastRollMessage = updateLastRoll();
  lastRoll = randomDiceNumber;
  let myOutputValue;
  if (randomDiceNumber == input) {
    winCount += 1;
    myOutputValue = "You win!";
  } else {
    myOutputValue = "You lose!";
  }
  let winningPercent = calcWinningPercent();
  return `This is round ${gameCount}. <br>
  You win ${winningPercent}% of the time. <br> 
  ${lastRollMessage}. You guessed ${input} and the computer rolled ${randomDiceNumber}. ${myOutputValue}`;
};
