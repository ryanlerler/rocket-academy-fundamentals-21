// loops and conditions
// while loop
// const main = function (input) {
//   let myOutputValue = "";
//   let counter = 0;
//   while (counter < input) {
//     if (counter % 2 == 0) {
//       myOutputValue = `${myOutputValue} yes `;
//     } else {
//       myOutputValue = `${myOutputValue} no `;
//     }
//     counter += 1;
//   }
//   return myOutputValue;
// };

// loops and conditions
// for loop
// const main = function (input) {
//   let myOutputValue = "";
//   for (let counter = 0; counter < input; counter += 1) {
//     if (counter % 2 == 0) {
//       myOutputValue = `${myOutputValue} yes `;
//     } else {
//       myOutputValue = `${myOutputValue} no `;
//     }
//   }
//   return myOutputValue;
// };

// loops and functions
// while loop
// const rollDice = function () {
//   return Math.floor(Math.random() * 6) + 1;
// };

// const main = function (input) {
//   let myOutputValue = "";
//   let counter = 0;
//   while (counter < input) {
//     let diceNumber = rollDice();
//     myOutputValue = `${myOutputValue} ${diceNumber} `;
//     counter += 1;
//   }
//   return myOutputValue;
// };

// loops and functions
// for loop
// const rollDice = function () {
//   return Math.floor(Math.random() * 6) + 1;
// };

// const main = function (input) {
//   let myOutputValue = "";
//   for (let counter = 0; counter < input; counter += 1) {
//     let diceNumber = rollDice();
//     myOutputValue = `${myOutputValue} ${diceNumber} `;
//   }
//   return myOutputValue;
// };

// loops and loops
const rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const main = function (input) {
  let myOutputValue = "";
  let counter = 0;
  while (counter < input) {
    let innerCounter = 0;
    while (innerCounter < 2) {
      myOutputValue = `${myOutputValue} ${rollDice()} `;
      innerCounter += 1;
    }
    myOutputValue = `${myOutputValue} <br> `;
    counter += 1;
  }
  return myOutputValue;
};

// nested loops
// while loop
// const main = function (input) {
//   let myOutputValue = "";
//   let rowCounter = 0;
//   while (rowCounter < input) {
//     let columnCounter = 0;
//     while (columnCounter < input) {
//       // print 'x' in a line
//       myOutputValue = `${myOutputValue}x`;
//       columnCounter += 1;
//     }
//     // begin the next loop in a new line
//     myOutputValue = `${myOutputValue} <br>`;
//     rowCounter += 1;
//   }
//   return myOutputValue;
// };

// nested loops
// for loop
// const main = function (input) {
//   let myOutputValue = "";
//   for (let rowCounter = 0; rowCounter < input; rowCounter += 1) {
//     for (let columnCounter = 0; columnCounter < input; columnCounter += 1) {
//       // print 'x' in a line
//       myOutputValue = `${myOutputValue}x`;
//     }
//     // begin the next loop in a new line
//     myOutputValue = `${myOutputValue} <br>`;
//   }
//   return myOutputValue;
// };
