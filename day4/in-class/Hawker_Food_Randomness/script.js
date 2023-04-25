const getDishNumber = function () {
  let dishNumber = Math.floor(Math.random() * 6) + 1;
  if (dishNumber == 1) {
    return "chicken rice";
  } else if (dishNumber == 2) {
    return "roti plata";
  } else if (dishNumber == 3) {
    return "nasi lemak";
  } else if (dishNumber == 4) {
    return "hokkien mee";
  } else if (dishNumber == 5) {
    return "bak kut teh";
  } else {
    return "laksa";
  }
};

const main = function (input) {
  let dishChoice = getDishNumber();
  let myOutputValue;
  if (input == dishChoice) {
    myOutputValue = "You will get a free meal!";
  } else {
    myOutputValue = "You will <b> not </b> get a free meal!";
  }
  return `You guessed ${input} and Uncle's dish is ${dishChoice}. ${myOutputValue}`;
};
