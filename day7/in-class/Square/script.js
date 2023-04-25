const main = function (input) {
  let myOutputValue = "";
  let i = 0;
  while (i < input) {
    j = 0;
    while (j < input) {
      myOutputValue = `${myOutputValue}😂`;
      j += 1;
    }
    myOutputValue = `${myOutputValue}<br>`;
    i += 1;
  }
  return myOutputValue;
};
