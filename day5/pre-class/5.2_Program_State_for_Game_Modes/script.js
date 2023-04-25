// After refactoring
let currentGameMode = "waiting for user name";
let bankRoll = 10;
let userName;

const rollDice = function () {
  let randomInteger = Math.floor(Math.random() * 6);
  let diceNumber = randomInteger + 1;
  return diceNumber;
};

const playDiceGame = function (userName, userGuess) {
  let randomDiceNumber = rollDice();
  if (userGuess == randomDiceNumber) {
    bankRoll += 1;
    return `Hi, ${userName}. You guessed ${userGuess} and the computer rolled ${randomDiceNumber}. You Win!<br>
  Bankroll: ${bankRoll}`;
  } else {
    return `Hi, ${userName}. You guessed ${userGuess} and the computer rolled ${randomDiceNumber}. You lose!<br>
  Bankroll: ${bankRoll}`;
  }
};

const main = function (input) {
  let myOutputValue;
  if (currentGameMode == "waiting for user name") {
    userName = input;
    myOutputValue = `Hi, ${userName}.`;
    currentGameMode = "dice game";
  } else if (currentGameMode == "dice game") {
    myOutputValue = playDiceGame(userName, input);
  }
  return myOutputValue;
};

// // Before refactoring
// let currentGameMode = "waiting for user name";
// let bankRoll = 10;
// let userName;

// let rollDice = function () {
//   let randomInteger = Math.floor(Math.random() * 6);
//   let diceNumber = randomInteger + 1;
//   return diceNumber;
// };

// let main = function (input) {
//   let myOutputValue;
//   if (currentGameMode == "waiting for user name") {
//     userName = input;
//     myOutputValue = `Hi, ${userName}.`;
//     currentGameMode = "dice game";
//   } else if (currentGameMode == "dice game") {
//     userGuess = input;
//     let randomDiceNumber = rollDice();
//     if (userGuess == randomDiceNumber) {
//       bankRoll += 1;
//       myOutputValue = `Hi, ${userName}. You guessed ${userGuess} and the computer rolled ${randomDiceNumber}. You Win!<br>
//   Bankroll: ${bankRoll}`;
//     } else {
//       myOutputValue = `Hi, ${userName}. You guessed ${userGuess} and the computer rolled ${randomDiceNumber}. You lose!<br>
//   Bankroll: ${bankRoll}`;
//     }
//   }
//   return myOutputValue;
// };
