const main = function (input) {
  let myOutputValue = "";
  let counter = 1;
  while (counter <= 7) {
    myOutputValue = `${myOutputValue} hello`;
    counter += 2;
  }
  return myOutputValue;
};

// What happens if counter starts as a number other than zero?
// need to change the condition to achieve the same outcome
// What happens if, inside the loop, you alter the counter by adding a number other than one?
// in the case of, for eg, counter +=2, the loop will skip one round of iteration
// What happens if you change the condition inside the loop from counter < 6 to counter <= 6?
// the loop will iterate 1 more round
