// initialized global variables
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var myOutputValue = "";
var playerWinCount = 0;
var pcWinCount = 0;
var drawCount = 0;
var gameCount = 0;
var currentMode = "waiting for user name";
var userName = "";

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
  // generate PC choice
  var pcChoice = getPcChoice();
  // generate player emoji
  var playerEmoji = getEmoji(playerChoice);
  // generate PC emoji
  var pcEmoji = getEmoji(pcChoice);
  // draw condition
  if (playerChoice == pcChoice) {
    gameCount += 1;
    drawCount += 1;
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  It's a draw!<br>
  ${userName}, you have won ${playerWinCount} rounds and have a draw of ${drawCount} rounds out of the ${gameCount} rounds played. <br> 
  Now you can type "scissors" "paper" or "stone" to play another round! `;
  }
  // winning condition
  else if (
    (playerChoice == SCISSORS && pcChoice == PAPER) ||
    (playerChoice == PAPER && pcChoice == STONE) ||
    (playerChoice == STONE && pcChoice == SCISSORS)
  ) {
    gameCount += 1;
    playerWinCount += 1;
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  You win! Woo hoo...<br>
   ${userName}, you have won ${playerWinCount} rounds and have a draw of ${drawCount} rounds out of the ${gameCount} rounds played. <br> 
  Now you can type "scissors" "paper" or "stone" to play another round! `;
  }
  // losing condition
  else if (
    (playerChoice == SCISSORS && pcChoice == STONE) ||
    (playerChoice == PAPER && pcChoice == SCISSORS) ||
    (playerChoice == STONE && pcChoice == PAPER)
  ) {
    gameCount += 1;
    pcWinCount += 1;
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  You lose! Bummer.<br>
   ${userName}, you have won ${playerWinCount} rounds and have a draw of ${drawCount} rounds out of the ${gameCount} rounds played. <br> 
  Now you can type "scissors" "paper" or "stone" to play another round! `;
  }
  return myOutputValue;
};

var main = function (input) {
  // set username
  if (currentMode == "waiting for user name") {
    userName = input;
    myOutputValue = `Hi, ${userName}! You may start playing this game. Please enter either "scissors" "paper" or "stone`;
    // switch mode
    currentMode = "game mode";
  } else if (currentMode == "game mode") {
    var playerChoice = input;
    // if player enters an invalid input
    if (
      playerChoice != SCISSORS ||
      playerChoice != PAPER ||
      playerChoice != STONE
    ) {
      myOutputValue =
        'There are only 3 input options: please enter either "scissors" "paper" or "stone".';
    }
    // run the main game function and update output
    myOutputValue = playSPS(input);
  }
  return myOutputValue;
};
