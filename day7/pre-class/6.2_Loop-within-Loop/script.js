const main = function (input) {
  let myOutputValue = "";
  let outerCounter = 0;
  while (outerCounter < input) {
    let innerCounter = 0;
    while (innerCounter < input * 2) {
      myOutputValue = `${myOutputValue} hello`;
      innerCounter += 1;
    }
    myOutputValue = `${myOutputValue} <br>`;
    outerCounter += 1;
  }
  return myOutputValue;
};
