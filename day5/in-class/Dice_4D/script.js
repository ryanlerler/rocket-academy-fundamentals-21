let withinNumber = 0;
let isANewRound = true;
let winCount = 0;
let remainingWinCountToPlay4D = 2;

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

const playWithin1Mode = function (playerChoice, diceNumber1, diceNumber2) {
  if (
    playerChoice == diceNumber1 ||
    playerChoice == diceNumber1 + 1 ||
    playerChoice == diceNumber1 - 1 ||
    playerChoice == diceNumber2 ||
    playerChoice == diceNumber2 + 1 ||
    playerChoice == diceNumber2 - 1
  ) {
    isANewRound = true;
    winCount += 1;
    remainingWinCountToPlay4D -= 1;
    if (winCount == 1) {
      return `You rolled ${diceNumber1} and ${diceNumber2}. You guessed ${playerChoice}. Within number: ${withinNumber}. You win ${winCount} time! You need ${remainingWinCountToPlay4D} more win to play 4D!`;
    } else if (winCount == 2) {
      return `You rolled ${diceNumber1} and ${diceNumber2}. You guessed ${playerChoice}. Within number: ${withinNumber}. You win ${winCount} times! Time to play 4D! Enter your 4D guess.`;
    }
  } else {
    return `You rolled ${diceNumber1} and ${diceNumber2}. You guessed ${playerChoice}. Within number: ${withinNumber}. You lose! You need ${remainingWinCountToPlay4D} more win to play 4D!`;
  }
};

const playWithin2Mode = function (playerChoice, diceNumber1, diceNumber2) {
  if (
    playerChoice == diceNumber1 ||
    playerChoice == diceNumber1 + 1 ||
    playerChoice == diceNumber1 - 1 ||
    playerChoice == diceNumber1 + 2 ||
    playerChoice == diceNumber1 - 2 ||
    playerChoice == diceNumber2 ||
    playerChoice == diceNumber2 + 1 ||
    playerChoice == diceNumber2 - 1 ||
    playerChoice == diceNumber2 + 2 ||
    playerChoice == diceNumber2 - 2
  ) {
    isANewRound = true;
    winCount += 1;
    remainingWinCountToPlay4D -= 1;
    if (winCount == 1) {
      return `You rolled ${diceNumber1} and ${diceNumber2}. You guessed ${playerChoice}. Within number: ${withinNumber}. You win ${winCount} time! You need ${remainingWinCountToPlay4D} more win to play 4D!`;
    } else if (winCount == 2) {
      return `You rolled ${diceNumber1} and ${diceNumber2}. You guessed ${playerChoice}. Within number: ${withinNumber}. You win ${winCount} times! Time to play 4D! Enter your 4D guess.`;
    }
  } else {
    return `You rolled ${diceNumber1} and ${diceNumber2}. You guessed ${playerChoice}. Within number: ${withinNumber}. You lose! You need ${remainingWinCountToPlay4D} more win to play 4D!`;
  }
};

const playWithin3Mode = function (playerChoice, diceNumber1, diceNumber2) {
  if (
    playerChoice == diceNumber1 ||
    playerChoice == diceNumber1 + 1 ||
    playerChoice == diceNumber1 - 1 ||
    playerChoice == diceNumber1 + 2 ||
    playerChoice == diceNumber1 - 2 ||
    playerChoice == diceNumber1 + 3 ||
    playerChoice == diceNumber1 - 3 ||
    playerChoice == diceNumber2 ||
    playerChoice == diceNumber2 + 1 ||
    playerChoice == diceNumber2 - 1 ||
    playerChoice == diceNumber2 + 2 ||
    playerChoice == diceNumber2 - 2 ||
    playerChoice == diceNumber2 + 3 ||
    playerChoice == diceNumber2 - 3
  ) {
    isANewRound = true;
    winCount += 1;
    remainingWinCountToPlay4D -= 1;
    if (winCount == 1) {
      return `You rolled ${diceNumber1} and ${diceNumber2}. You guessed ${playerChoice}. Within number: ${withinNumber}. You win ${winCount} time! You need ${remainingWinCountToPlay4D} more win to play 4D!`;
    } else if (winCount == 2) {
      return `You rolled ${diceNumber1} and ${diceNumber2}. You guessed ${playerChoice}. Within number: ${withinNumber}. You win ${winCount} times! Time to play 4D! Enter your 4D guess.`;
    }
  } else {
    return `You rolled ${diceNumber1} and ${diceNumber2}. You guessed ${playerChoice}. Within number: ${withinNumber}. You lose! You need ${remainingWinCountToPlay4D} more win to play 4D!`;
  }
};

const play4D = function (input) {
  let randomDigit1 = Math.floor(Math.random() * 10);
  let randomDigit2 = Math.floor(Math.random() * 10);
  let randomDigit3 = Math.floor(Math.random() * 10);
  let randomDigit4 = Math.floor(Math.random() * 10);
  let fourDNumber = `${randomDigit1}${randomDigit2}${randomDigit3}${randomDigit4}`;
  if (input == fourDNumber) {
    myOutputValue = `Your guess: ${input}. 4D number: ${fourDNumber}. You win 4D!!! Please enter a dice roll guess. To play 4D again, please play and win the dice game twice.`;
  } else {
    myOutputValue = `Your guess: ${input}. 4D number: ${fourDNumber}. You did not win 4D!!! Please enter a dice roll guess. To play 4D again, please play and win the dice game twice.`;
  }
  winCount = 0;
  remainingWinCountToPlay4D = 2;
  return myOutputValue;
};

const main = function (input) {
  let diceNumber1 = getRandomDiceNumber();
  let diceNumber2 = getRandomDiceNumber();
  getRandomWithinNumber();
  let myOutputValue = "";
  if (winCount == 2) {
    return play4D(input);
  } else {
    if (withinNumber == 1) {
      return (myOutputValue = playWithin1Mode(input, diceNumber1, diceNumber2));
    } else if (withinNumber == 2) {
      return (myOutputValue = playWithin2Mode(input, diceNumber1, diceNumber2));
    } else if (withinNumber == 3) {
      return (myOutputValue = playWithin3Mode(input, diceNumber1, diceNumber2));
    }
  }
  return myOutputValue;
};
