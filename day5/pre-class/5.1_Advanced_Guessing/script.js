let lastRoll = 0;
let gameCount = 0;
let winCount = 0;
let num1Count = 0;
let num2Count = 0;
let num3Count = 0;
let num4Count = 0;
let num5Count = 0;
let num6Count = 0;
let score = 0;

const rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const updateLastRoll = function () {
  if (lastRoll == 0) {
    return "This was your first roll";
  } else {
    return `You last roll was ${lastRoll}`;
  }
};

const calcWinningPercent = function () {
  let winningPercent = (winCount / gameCount) * 100;
  return winningPercent;
};

const calcMostRolledNum = function (randomDiceNumber) {
  if (randomDiceNumber == 1) {
    num1Count += 1;
  } else if (randomDiceNumber == 2) {
    num2Count += 1;
  } else if (randomDiceNumber == 3) {
    num3Count += 1;
  } else if (randomDiceNumber == 4) {
    num4Count += 1;
  } else if (randomDiceNumber == 5) {
    num5Count += 1;
  } else {
    num6Count += 1;
  }
  if (
    num1Count > num2Count &&
    num1Count > num3Count &&
    num1Count > num4Count &&
    num1Count > num5Count &&
    num1Count > num6Count
  ) {
    return `1 is the number you roll the most.`;
  } else if (
    num2Count > num1Count &&
    num2Count > num3Count &&
    num2Count > num4Count &&
    num2Count > num5Count &&
    num2Count > num6Count
  ) {
    return `2 is the number you roll the most.`;
  } else if (
    num3Count > num1Count &&
    num3Count > num2Count &&
    num3Count > num4Count &&
    num3Count > num5Count &&
    num3Count > num6Count
  ) {
    return `3 is the number you roll the most.`;
  } else if (
    num4Count > num1Count &&
    num4Count > num2Count &&
    num4Count > num3Count &&
    num4Count > num5Count &&
    num4Count > num6Count
  ) {
    return `4 is the number you roll the most.`;
  } else if (
    num5Count > num1Count &&
    num5Count > num2Count &&
    num5Count > num3Count &&
    num5Count > num4Count &&
    num5Count > num6Count
  ) {
    return `5 is the number you roll the most.`;
  } else if (
    num6Count > num1Count &&
    num6Count > num2Count &&
    num6Count > num3Count &&
    num6Count > num4Count &&
    num6Count > num5Count
  ) {
    return `6 is the number you roll the most.`;
  } else {
    return `You do not have a most-rolled dice.`;
  }
};

const main = function (input) {
  gameCount += 1;
  let randomDiceNumber = rollDice();
  let lastRollMessage = updateLastRoll();
  lastRoll = randomDiceNumber;
  let myOutputValue;
  // incorporated scores
  if (randomDiceNumber == input) {
    winCount += 1;
    score += 5;
    myOutputValue = "You win!";
  } else if (randomDiceNumber + 1 == input || randomDiceNumber - 1 == input) {
    winCount += 1;
    score += 4;
    myOutputValue = "You win!";
  } else if (randomDiceNumber + 2 == input || randomDiceNumber - 2 == input) {
    winCount += 1;
    score += 3;
    myOutputValue = "You win!";
  } else if (randomDiceNumber + 3 == input || randomDiceNumber - 3 == input) {
    winCount += 1;
    score += 2;
    myOutputValue = "You win!";
  } else if (randomDiceNumber + 4 == input || randomDiceNumber - 4 == input) {
    winCount += 1;
    score += 1;
    myOutputValue = "You win!";
  } else {
    myOutputValue = "You lose!";
  }
  let winningPercent = calcWinningPercent(); // this function must be called after both gameCount and winCount += 1
  let mostRolledNum = calcMostRolledNum(randomDiceNumber);
  return `This is round ${gameCount}. <br>
  ${mostRolledNum} <br>
  You win ${winningPercent}% of the time. <br> 
  ${lastRollMessage}. You guessed ${input} and the computer rolled ${randomDiceNumber}. ${myOutputValue} <br>
  Your score is ${score}.`;
};
