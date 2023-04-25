var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSEDSCISSORS = "reversed scissors";
var REVERSEDPAPER = "reversed paper";
var REVERSEDSTONE = "reversed stone";
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
  if (choice == SCISSORS || choice == REVERSEDSCISSORS) {
    return "✂️";
  } else if (choice == PAPER || choice == REVERSEDPAPER) {
    return "🗒";
  } else if (choice == STONE || choice == REVERSEDSTONE) {
    return "🪨";
  }
};

var playSPS = function (playerChoice) {
  var pcChoice = getPcChoice();
  var playerEmoji = getEmoji(playerChoice);
  var pcEmoji = getEmoji(pcChoice);
  // draw condition
  if (
    playerChoice == pcChoice ||
    (playerChoice == REVERSEDSCISSORS && pcChoice == SCISSORS) ||
    (playerChoice == REVERSEDPAPER && pcChoice == PAPER) ||
    (playerChoice == REVERSEDSTONE && pcChoice == STONE)
  ) {
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  It's a draw!<br>
  Now you can type "scissors" "paper" or "stone" to play another round! `;
  } else if (
    // normal game winning conditions
    (playerChoice == SCISSORS && pcChoice == PAPER) ||
    (playerChoice == PAPER && pcChoice == STONE) ||
    (playerChoice == STONE && pcChoice == SCISSORS) ||
    // reverse game winning conditions
    (playerChoice == REVERSEDSCISSORS && pcChoice == STONE) ||
    (playerChoice == REVERSEDPAPER && pcChoice == SCISSORS) ||
    (playerChoice == REVERSEDSTONE && pcChoice == PAPER)
  ) {
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  You win! Woo hoo...<br>
  Now you can type "scissors" "paper" or "stone" to play another round! `;
  } else if (
    // normal game losing conditions
    (playerChoice == SCISSORS && pcChoice == STONE) ||
    (playerChoice == PAPER && pcChoice == SCISSORS) ||
    (playerChoice == STONE && pcChoice == PAPER) ||
    // reverse game losing conditions
    (playerChoice == REVERSEDSCISSORS && pcChoice == PAPER) ||
    (playerChoice == REVERSEDPAPER && pcChoice == STONE) ||
    (playerChoice == REVERSEDSTONE && pcChoice == SCISSORS)
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
    playerChoice != STONE ||
    playerChoice != REVERSEDSCISSORS ||
    playerChoice != REVERSEDPAPER ||
    playerChoice != REVERSEDSTONE
  ) {
    myOutputValue =
      'There are only 3 input options: please enter either "scissors", "paper", "stone".';
  }
  myOutputValue = playSPS(playerChoice);
  return myOutputValue;
};
