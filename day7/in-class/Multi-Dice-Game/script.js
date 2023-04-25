// After refactoring
let mode = "choose";
let diceList = [];
let diceCount = 0;
let winCount = 0;
let loseCount = 0;

const rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const playGame = function (userGuess) {
  // reassign input from main function to userGuess
  // run the loop - in each iteration, generate a random dice num, push it to the array (for output purpose only)
  // run the loop - in each iteration, check if user has made the correct guess for each num, set boolean to true if so
  // increment counter, go to the next iteration and repeat the same steps above
  let counter = 0;
  let didPlayerWin = false;
  while (counter < diceCount) {
    let randomDiceNumber = rollDice();
    diceList.push(randomDiceNumber);
    if (userGuess == randomDiceNumber) {
      didPlayerWin = true;
    }
    counter += 1;
  }
  // if player wins, update score and output
  if (didPlayerWin) {
    winCount += 1;
    return `You guessed ${userGuess} and the computer rolled ${diceList}. You win! Your win-loss record is ${winCount}-${loseCount}. <br>
        Please enter a number of dice to roll to start again.`;
  }
  // if player loses, update score and output
  else {
    loseCount += 1;
    return `You guessed ${userGuess} and the computer rolled ${diceList}. You lose! Your win-loss record is ${winCount}-${loseCount}. <br>
        Please enter a number of dice to roll to start again.`;
  }
};

const main = function (input) {
  let myOutputValue = "";
  // in the first mode, assign input to num of dice rolled
  if (mode == "choose") {
    diceCount = input;
    myOutputValue = `You have chosen to roll ${diceCount} dice. Please enter a single guess for all of these dice.`;
    // switch mode
    mode = "game";
  }
  // main game mode
  else if (mode == "game") {
    myOutputValue = playGame(input, myOutputValue);
    // the end of the game -> switch back to the first mode and reset the array so the previous num will not be pushed together with the new num in the next round
    mode = "choose";
    diceList = [];
  }
  return myOutputValue;
};

// Before refactoring
// let mode = "choose";
// let diceList = [];
// let diceCount = 0;
// let winCount = 0;
// let loseCount = 0;

// const rollDice = function () {
//   return Math.floor(Math.random() * 6) + 1;
// };

// const main = function (input) {
//   let myOutputValue = "";
//   // in the first mode, assign input to num of dice rolled
//   if (mode == "choose") {
//     diceCount = input;
//     myOutputValue = `You have chosen to roll ${diceCount} dice. Please enter a single guess for all of these dice.`;
//     // switch mode
//     mode = "game";
//   }
//   // main game mode
//   else if (mode == "game") {
//     // reassign input to user's guess
//     let userGuess = input;
//     // run the loop - in each iteration, generate a random dice num, push it to the array (for output purpose only)
//     // run the loop - in each iteration, check if user has made the correct guess for each num, set boolean to true if so
//     // increment counter, go to the next iteration and repeat the same steps above
//     let counter = 0;
//     let didPlayerWin = false;
//     while (counter < diceCount) {
//       let randomDiceNumber = rollDice();
//       diceList.push(randomDiceNumber);
//       if (userGuess == randomDiceNumber) {
//         didPlayerWin = true;
//       }
//       counter += 1;
//     }
//     // if player wins, update score and output
//     if (didPlayerWin) {
//       winCount += 1;
//       myOutputValue = `You guessed ${userGuess} and the computer rolled ${diceList}. You win! Your win-loss record is ${winCount}-${loseCount}. <br>
//         Please enter a number of dice to roll to start again.`;
//     }
//     // if player loses, update score and output
//     else {
//       loseCount += 1;
//       myOutputValue = `You guessed ${userGuess} and the computer rolled ${diceList}. You lose! Your win-loss record is ${winCount}-${loseCount}. <br>
//         Please enter a number of dice to roll to start again.`;
//     }
//     // the end of the game -> switch back to the first mode and reset the array so the previous num will not be pushed together with the new num in the next round
//     mode = "choose";
//     diceList = [];
//   }
//   return myOutputValue;
// };
