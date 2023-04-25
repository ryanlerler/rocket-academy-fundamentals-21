let mode = "numOfPlayers";
let entireDiceList = [];
let diceCount = 0;
let currentPlayerWinCount = [];
let currentPlayerLoseCount = [];
let diceListEachRound = [];
let currentPlayer = 1;
let nextPlayer = 2;
let totalNumOfPlayers = 0;

const rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const playGame = function (userGuess) {
  // reassign input from main function to userGuess
  // initialize num of rounds
  let outerCounter = 0;
  // 4 rounds as per question
  while (outerCounter < 4) {
    // initialize num of dice depending on user input
    // start of each round
    let innerCounter = 0;
    // if this boolean is initialized here OUTSIDE of inner loop, it will NOT be reset to false for each num in inner loop but remain true as long as any num in each inner loop is correctly guessed
    let didPlayerWinEachRound = false;
    while (innerCounter < diceCount) {
      let randomDiceNumber = rollDice();
      diceListEachRound.push(randomDiceNumber);

      // if this boolean is initialized here INSIDE of inner loop, it will be reset to false for each num in inner loop, winCount will only +=1 when the LAST num in each inner loop is correctly guessed
      // let didPlayerWinEachRound = false;

      // user wins each round as long as any of the num in each round is guessed correctly
      if (userGuess == diceListEachRound[innerCounter]) {
        didPlayerWinEachRound = true;
      }
      innerCounter += 1;
    }
    // increment currentPlayerWinCount[0] by 1 if player 1 wins, currentPlayerWinCount[1] by 1 if player 2 wins, etc..
    if (didPlayerWinEachRound) {
      currentPlayerWinCount[currentPlayer - 1] += 1;
    } else {
      currentPlayerLoseCount[currentPlayer - 1] += 1;
    }
    entireDiceList += `${diceListEachRound} | `;
    diceListEachRound = [];
    outerCounter += 1;
  } // end of each round

  // Remove the extra "|" and 2 extra spaces at the end of the entireDiceList array
  entireDiceList = entireDiceList.slice(0, -3);

  // update output
  return `Player ${currentPlayer}. You guessed ${userGuess} and the computer rolled ${entireDiceList}. <br> `;
};

const updateScore = function () {
  let scoreMessage = "";
  i = 0;
  while (i < totalNumOfPlayers) {
    // as the currentPlayer will be switched to the nextPlayer at the same state, another variable is needed to keep track of the current playerID
    // currentPlayerWinCount[playerID - 1]: currentPlayerWinCount[0] for player 1, currentPlayerWinCount[1] for player 2, etc..
    let playerID = i + 1;
    scoreMessage += `Player ${playerID}'s win-loss record is ${
      currentPlayerWinCount[playerID - 1]
    }-${currentPlayerLoseCount[playerID - 1]}. <br>`;
    i += 1;
  }
  return scoreMessage;
};

const main = function (input) {
  let myOutputValue = "";
  // get user to input the num of players
  if (mode == "numOfPlayers") {
    if (!input) {
      myOutputValue = `Please enter a number of players to begin.`;
    } else {
      totalNumOfPlayers = input;

      // initialize currentPlayerWinCount and currentPlayerLoseCount arrays with zeroes
      let i = 0;
      while (i < totalNumOfPlayers) {
        currentPlayerWinCount[i] = 0;
        currentPlayerLoseCount[i] = 0;
        i += 1;
      }
      myOutputValue = `You have chosen ${totalNumOfPlayers}-player mode. <br> Player 1: Please enter a number of dice to roll.`;
      mode = "numOfDice";
    }
  }

  // in this mode, assign input to num of dice rolled
  else if (mode == "numOfDice") {
    diceCount = input;
    myOutputValue = `Player ${currentPlayer}. You have chosen to roll ${diceCount} dice. Please enter a single guess for all of these dice.`;
    // switch mode
    mode = "game";
  }
  // main game mode
  else if (mode == "game") {
    myOutputValue = playGame(input);
    myOutputValue += updateScore();
    // switch player
    currentPlayer = nextPlayer;
    nextPlayer = currentPlayer + 1;

    // check if all players have played
    if (currentPlayer > totalNumOfPlayers) {
      // reset
      myOutputValue += `Player 1. Please enter a number of dice to roll to start again.`;
      currentPlayer = 1;
      nextPlayer = 2;
    } else {
      myOutputValue += `Player ${currentPlayer}. Please enter a number of dice to roll to start again.`;
    }

    // the end of the game -> switch back to numOfDice mode and reset the array so the previous num will not be pushed together with the new num in the next round
    mode = "numOfDice";
    entireDiceList = [];
  }
  return myOutputValue;
};
