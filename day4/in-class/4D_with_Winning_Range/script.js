const getRandomInteger = function () {
  let randomInteger = Math.floor(Math.random() * 10);
  return randomInteger;
};

const main = function (input) {
  let randomDigit1 = getRandomInteger();
  let randomDigit2 = getRandomInteger();
  let randomDigit3 = getRandomInteger();
  let randomDigit4 = getRandomInteger();
  let fourDNumber = Number(
    `${randomDigit1}${randomDigit2}${randomDigit3}${randomDigit4}`
  );
  let myOutputValue;
  // Equivalent to using (Math.abs(input - fourDNumber) <= 1000)
  if (input >= fourDNumber - 1000 && input <= fourDNumber + 1000) {
    myOutputValue = "You win!";
  } else {
    myOutputValue = "You lose!";
  }
  return `You guessed ${input} and the 4D number is ${randomDigit1}${randomDigit2}${randomDigit3}${randomDigit4}. ${myOutputValue}`;
};

// e.g. 4D = 1234
// >= 0234 AND <= 2234; i.e. 0234 to 2234 inclusive (within 1000)
// >= 0234 OR <= 2234; i.e. 0234 onwards OR below 2234 inclusive (NOT within 1000)
