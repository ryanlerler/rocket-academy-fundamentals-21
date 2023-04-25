// After refactoring
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var myOutputValue = "";

var getPcChoice = function () {
  var randomInteger = Math.floor(Math.random() * 3) + 1;
  if (randomInteger == 1) {
    return SCISSORS;
  } else if (randomInteger == 2) {
    return PAPER;
  } else {
    return STONE;
  }
};

var getEmoji = function (choice) {
  if (choice == SCISSORS) {
    return "✂️";
  } else if (choice == PAPER) {
    return "🗒";
  } else if (choice == STONE) {
    return "🪨";
  }
};

var playSPS = function (playerChoice) {
  var pcChoice = getPcChoice();
  var playerEmoji = getEmoji(playerChoice);
  var pcEmoji = getEmoji(pcChoice);
  if (playerChoice == pcChoice) {
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  It's a draw!<br>
  Now you can type "scissors" "paper" or "stone" to play another round! `;
  } else if (
    (playerChoice == SCISSORS && pcChoice == PAPER) ||
    (playerChoice == PAPER && pcChoice == STONE) ||
    (playerChoice == STONE && pcChoice == SCISSORS)
  ) {
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  You win! Woo hoo...<br>
  Now you can type "scissors" "paper" or "stone" to play another round! `;
  } else if (
    (playerChoice == SCISSORS && pcChoice == STONE) ||
    (playerChoice == PAPER && pcChoice == SCISSORS) ||
    (playerChoice == STONE && pcChoice == PAPER)
  ) {
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  You lose! Bummer.<br>
  Now you can type "scissors" "paper" or "stone" to play another round! `;
  }
  return myOutputValue;
};

var main = function (playerChoice) {
  if (
    playerChoice != SCISSORS ||
    playerChoice != PAPER ||
    playerChoice != STONE
  ) {
    myOutputValue =
      'There are only 3 input options: please enter either "scissors" "paper" or "stone".';
  }
  myOutputValue = playSPS(playerChoice);
  return myOutputValue;
};

// Before refactoring
// var SCISSORS = "scissors";
// var PAPER = "paper";
// var STONE = "stone";

// var getPcChoice = function () {
//   var randomInteger = Math.floor(Math.random() * 3) + 1;
//   if (randomInteger == 1) {
//     return SCISSORS;
//   } else if (randomInteger == 2) {
//     return PAPER;
//   } else {
//     return STONE;
//   }
// };

// var main = function (playerChoice) {
//   var myOutputValue;
//   if (
//     playerChoice != SCISSORS ||
//     playerChoice != PAPER ||
//     playerChoice != STONE
//   ) {
//     myOutputValue =
//       'There are only 3 input options: please enter either "scissors" "paper" or "stone".';
//   }
//   var pcChoice = getPcChoice();
//   if (playerChoice == pcChoice) {
//     myOutputValue = `The computer chose ${pcChoice}. <br>
// You chose ${playerChoice}.<br>
// It's a draw!<br>
// Now you can type "scissors" "paper" or "stone" to play another round! `;
//   } else if (
//     (playerChoice == SCISSORS && pcChoice == PAPER) ||
//     (playerChoice == PAPER && pcChoice == STONE) ||
//     (playerChoice == STONE && pcChoice == SCISSORS)
//   ) {
//     myOutputValue = `The computer chose ${pcChoice}. <br>
// You chose ${playerChoice}.<br>
// You win! Woo hoo...<br>
// Now you can type "scissors" "paper" or "stone" to play another round! `;
//   } else if (
//     (playerChoice == SCISSORS && pcChoice == STONE) ||
//     (playerChoice == PAPER && pcChoice == SCISSORS) ||
//     (playerChoice == STONE && pcChoice == PAPER)
//   ) {
//     myOutputValue = `The computer chose ${pcChoice}. <br>
// You chose ${playerChoice}.<br>
// You lose! Bummer.<br>
// Now you can type "scissors" "paper" or "stone" to play another round! `;
//   }
//   return myOutputValue;
// };
