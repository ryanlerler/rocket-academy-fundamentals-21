let mode = "choose";
let entireDiceList = [];
let diceCount = 0;
let player1WinCount = 0;
let player1LoseCount = 0;
let player2WinCount = 0;
let player2LoseCount = 0;
let diceListEachRound = [];
let currentPlayer = 1;
let nextPlayer = 2;

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
    if (didPlayerWinEachRound) {
      if (currentPlayer == 1) {
        player1WinCount += 1;
      } else if (currentPlayer == 2) {
        player2WinCount += 1;
      }
    } else {
      if (currentPlayer == 1) {
        player1LoseCount += 1;
      } else if (currentPlayer == 2) {
        player2LoseCount += 1;
      }
    }
    entireDiceList += `${diceListEachRound} | `;
    diceListEachRound = [];
    outerCounter += 1;
  } // end of each round

  // Remove the extra "|" and 2 extra spaces at the end of the entireDiceList array
  entireDiceList = entireDiceList.slice(0, -3);

  // update score and output
  return `Player ${currentPlayer}. You guessed ${userGuess} and the computer rolled ${entireDiceList}. <br> 
  Player 1's win-loss record is ${player1WinCount}-${player1LoseCount}. <br>
  Player 2's win-loss record is ${player2WinCount}-${player2LoseCount}. <br>`;
};

const main = function (input) {
  let myOutputValue = "";
  // in the first mode, assign input to num of dice rolled
  if (mode == "choose") {
    diceCount = input;
    myOutputValue = `Player ${currentPlayer}. You have chosen to roll ${diceCount} dice. Please enter a single guess for all of these dice.`;
    // switch mode
    mode = "game";
  }
  // main game mode
  else if (mode == "game") {
    myOutputValue = playGame(input);

    // switch player
    // assign nextPlayer (2) to currentPlayer
    // if currentPlayer is 2, nextPlayer is 1
    // when nextPlayer is 1, assign 1 to currentPlayer
    // if currentPlayer is 1, nextPlayer is 2
    currentPlayer = nextPlayer;
    // currentPlayer nextPlayer
    //      1           2
    //      2           1
    nextPlayer = (currentPlayer % 2) + 1;
    myOutputValue += `Player ${currentPlayer}. Please enter a number of dice to roll to start again.`;

    // the end of the game -> switch back to the first mode and reset the array so the previous num will not be pushed together with the new num in the next round
    mode = "choose";
    entireDiceList = [];
  }
  console.log(currentPlayer);
  return myOutputValue;
};
