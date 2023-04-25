const getRandomInteger = function () {
  let randomInteger = Math.floor(Math.random() * 10);
  return randomInteger;
};

const main = function (input) {
  let randomDigit1 = getRandomInteger();
  let randomDigit2 = getRandomInteger();
  let randomDigit3 = getRandomInteger();
  let randomDigit4 = getRandomInteger();
  let myOutputValue;
  if (
    input == randomDigit1 ||
    input == randomDigit2 ||
    input == randomDigit3 ||
    input == randomDigit4
  ) {
    myOutputValue = "You win!";
  } else {
    myOutputValue = "You lose!";
  }
  return `You guessed ${input} and the 4D number is ${randomDigit1}${randomDigit2}${randomDigit3}${randomDigit4}. ${myOutputValue}`;
};
