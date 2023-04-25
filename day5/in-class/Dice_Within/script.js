let withinNumber = 0;
let isANewRound = true;

const getRandomDiceNumber = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const getRandomWithinNumber = function () {
  if (isANewRound) {
    withinNumber = Math.floor(Math.random() * 3) + 1;
    isANewRound = false;
  }
  return withinNumber;
};

const main = function (input) {
  let diceNumber = getRandomDiceNumber();
  getRandomWithinNumber();
  let myOutputValue = `You rolled ${diceNumber}. You guessed ${input}. Within number: ${withinNumber}. `;
  if (Math.abs(diceNumber - input) <= withinNumber) {
    isANewRound = true;
    myOutputValue += `You win!`;
  } else {
    myOutputValue += `You lose!`;
  }
  return myOutputValue;
};
