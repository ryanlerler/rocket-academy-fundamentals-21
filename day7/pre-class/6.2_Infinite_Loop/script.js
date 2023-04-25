const main = function (input) {
  let myOutputValue = "hello world";
  let counter = 0;
  while (true) {
    myOutputValue = `${myOutputValue} bye`;
    counter += 1;
  }
  return myOutputValue;
};
