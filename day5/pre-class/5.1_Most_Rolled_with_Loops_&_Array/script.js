let lastDice = 0;
let winCount = 0;
let gameCount = 0;
let diceFrequencies = [];
let score = 0;

// Initialize diceFrequencies to zeroes
for (i = 0; i < 6; i++) {
  diceFrequencies[i] = 0;
}
const rollDice = function () {
  // produces a decimal starting from 0 and ending BEFORE 6 (5.999999...)
  var randomDecimal = Math.random() * 6;

  // take off the decimal -> 0 to 5
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1 -> 1 to 6
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

const updateLastRoll = function () {
  if (lastDice === 0) {
    return `This was your first roll.`;
  } else {
    return `Your last roll was ${lastDice}.`;
  }
};

const calcWinRate = function () {
  return (winCount / gameCount) * 100;
};

const calcDiceFrequencies = function (diceNumber) {
  return (diceFrequencies[diceNumber - 1] += 1);
};

const findMostRolledDice = function () {
  // The highest frequency a dice is rolled
  let maxFrequency = 0;
  // Dice index num from 0 to 5
  let maxDice = 0;
  // Initialize a variable to keep track if there are multiple dice with the same maxFrequency
  let maxDiceCount = 0;

  for (let i = 0; i < diceFrequencies.length; i++) {
    // If any dice in the diceFrequencies array is > maxFrequency, update maxFrequency, assign the dice index num with the highest diceFrequency to maxDice, set maxDiceCount to 1 as there is only 1 dice with the maxFrequency
    if (diceFrequencies[i] > maxFrequency) {
      maxFrequency = diceFrequencies[i];
      maxDice = i;
      maxDiceCount = 1;
    }
    // If there are multiple dice with the same maxFrequency, increment maxDicecount by 1
    // As maxDiceCount will always be 1 after the 1st roll, maxDicecount in this case will then increment to 2
    else if (diceFrequencies[i] === maxFrequency) {
      maxDiceCount++;
    }
  }

  if (maxDiceCount > 1) {
    return `There is no most-rolled dice.`;
  } else {
    return `You rolled ${maxDice + 1} the most!`;
  }
};

const calcScore = function (diceNumber, userGuess) {
  if (diceNumber === Number(userGuess)) {
    return 5;
  } else if (Math.abs(diceNumber - userGuess) === 1) {
    return 4;
  } else if (Math.abs(diceNumber - userGuess) === 2) {
    return 3;
  } else if (Math.abs(diceNumber - userGuess) === 3) {
    return 2;
  } else if (Math.abs(diceNumber - userGuess) === 4) {
    return 1;
  }
};

const main = function (input) {
  gameCount += 1;
  let randomDiceNumber = rollDice();

  calcDiceFrequencies(randomDiceNumber);
  findMostRolledDice();

  let lastRoll = updateLastRoll();
  lastDice = randomDiceNumber;

  let myOutputValue = "";

  if (Math.abs(randomDiceNumber - input) <= 4) {
    winCount += 1;
    myOutputValue = "You win";
  } else {
    myOutputValue = "You lose";
  }

  score += calcScore(randomDiceNumber, input);

  let winRate = calcWinRate().toFixed(2);

  return `${lastRoll} You just rolled a ${randomDiceNumber}. ${findMostRolledDice()} <br>
  You guessed ${input}. ${myOutputValue}! Your current score is ${score}. <br> You win ${winRate}% of the time.`;
};
