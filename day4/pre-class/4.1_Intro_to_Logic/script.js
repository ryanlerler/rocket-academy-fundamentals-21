// Random Number Generation from 0 to a provided max number

// let main = function (input) {
//   let myOutputValue = getRandomInteger(input);
//   return myOutputValue;
// };

// let getRandomInteger = function (max) {
//   let randomInteger = Math.floor(Math.random() * (Number(max) + 1)); // Note that the input is string by default
//   return randomInteger;
// };

// Dice Game Logic
const rollDice = function () {
  let randomInteger = Math.floor(Math.random() * 6);
  let diceNumber = randomInteger + 1;
  return diceNumber;
};

const main = function (input) {
  let randomDiceNumber = rollDice();
  let myOutputValue;
  if (randomDiceNumber == 2 * input) {
    myOutputValue = "You win!";
  } else {
    myOutputValue = "You lose!";
  }
  return `You guessed ${input} and the computer rolled ${randomDiceNumber}. ${myOutputValue}`;
};
