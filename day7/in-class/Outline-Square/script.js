const main = function (input) {
  let myOutputValue = "";
  let outerCounter = 0;
  while (outerCounter < input) {
    let innerCounter = 0;
    while (innerCounter < input) {
      if (
        outerCounter == 0 ||
        outerCounter == input - 1 ||
        innerCounter == 0 ||
        innerCounter == input - 1
      ) {
        myOutputValue += "😂";
      } else {
        myOutputValue += "👍";
      }
      innerCounter += 1;
    }
    myOutputValue += "<br>";
    outerCounter += 1;
  }
  return myOutputValue;
};

// outerCounter | innerCounter | input | print
// 0                  0            4      😂
// 0                  1            4      😂
// 0                  2            4      😂
// 0                  3            4      😂

// 1                  0            4      😂
// 1                  1            4
// 1                  2            4
// 1                  3            4      😂

// 2                  0            4      😂
// 2                  1            4
// 2                  2            4
// 2                  3            4      😂

// 3                  0            4      😂
// 3                  1            4      😂
// 3                  2            4      😂
// 3                  3            4      😂
