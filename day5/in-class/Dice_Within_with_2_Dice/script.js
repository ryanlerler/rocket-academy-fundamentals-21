let withinNumber = 0;
let isANewRound = true;

const getRandomDiceNumber = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const rollTwoDice = function () {
  const twoDice = [];
  for (let i = 0; i < 2; i++) {
    twoDice.push(getRandomDiceNumber());
  }
  return twoDice;
};

const getRandomWithinNumber = function () {
  if (isANewRound) {
    withinNumber = Math.floor(Math.random() * 3) + 1;
    isANewRound = false;
  }
  return withinNumber;
};

const main = function (input) {
  let diceNumbers = rollTwoDice();
  getRandomWithinNumber();
  let myOutputValue = `You rolled ${diceNumbers[0]} and ${diceNumbers[1]}. You guessed ${input}. Within number: ${withinNumber}. `;
  if (
    Math.abs(diceNumbers[0] - input) <= withinNumber ||
    Math.abs(diceNumbers[1] - input) <= withinNumber
  ) {
    isANewRound = true;
    myOutputValue += `You win!`;
  } else {
    myOutputValue += `You lose!`;
  }
  return myOutputValue;
};
