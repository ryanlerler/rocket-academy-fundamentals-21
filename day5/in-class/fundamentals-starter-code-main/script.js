let withinNumber = 0;
let isANewRound = true;
let winCount = 0;
let remainingWinCountToPlay4D = 2;

const getRandomDiceNumber = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const rollTwoDice = function () {
  const twoDice = [];
  for (let i = 0; i < 2; i++) {
    twoDice.push(getRandomDiceNumber());
  }
  return twoDice;
};

const getRandomWithinNumber = function () {
  if (isANewRound) {
    withinNumber = Math.floor(Math.random() * 3) + 1;
    isANewRound = false;
  }
  return withinNumber;
};

const getRandomDigit = function () {
  return Math.floor(Math.random() * 10);
};

const getRandom4DNumber = function () {
  let randomNumber = "";
  for (i = 0; i < 4; i++) {
    randomNumber += getRandomDigit();
  }
  return Number(randomNumber);
};

const main = function (input) {
  let diceNumbers = rollTwoDice();
  getRandomWithinNumber();
  let myOutputValue = `You rolled ${diceNumbers[0]} and ${diceNumbers[1]}. You guessed ${input}. Within number: ${withinNumber}. `;
  if (
    Math.abs(diceNumbers[0] - input) <= withinNumber ||
    Math.abs(diceNumbers[1] - input) <= withinNumber
  ) {
    winCount += 1;
    remainingWinCountToPlay4D -= 1;
    isANewRound = true;
    myOutputValue += `You win! ${remainingWinCountToPlay4D} more wins to play 4D!`;
  } else {
    myOutputValue += `You lose! ${remainingWinCountToPlay4D} more wins to play 4D!`;
  }

  const fourDNumber = getRandom4DNumber();

  if (winCount === 2) {
    myOutputValue += ` You've won twice! Time to play 4D! Enter your 4D guess.`;
    if (input === fourDNumber) {
      myOutputValue = `Your guess: ${input}. 4D number: ${fourDNumber}. You win 4D!!! Please enter a dice roll guess. To play 4D again, please play and win the dice game twice.`;
    } else {
      myOutputValue = `Your guess: ${input}. 4D number: ${fourDNumber}. You did not win 4D. Please enter a dice roll guess. To play 4D again, please play and win the dice game twice.`;
    }
  }
  return myOutputValue;
};
