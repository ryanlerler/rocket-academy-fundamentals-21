const main = function (input) {
  let myOutputValue = "";
  let outerCounter = 0;
  while (outerCounter < input) {
    let innerCounter = 0;
    while (innerCounter < input) {
      if (innerCounter <= outerCounter) {
        myOutputValue = `${myOutputValue}😂`;
      }
      innerCounter += 1;
    }
    myOutputValue = `${myOutputValue}<br>`;
    outerCounter += 1;
  }
  return myOutputValue;
};

// outerCounter | innerCounter | print
// 0                  0           yes   0 = 0
// 0                  1           no
// 0                  2           no
// 0                  3           no

// 1                  0           yes   1 > 0
// 1                  1           yes   1 = 1
// 1                  2
// 1                  3

// 2                  0           yes   2 > 0
// 2                  1           yes   2 > 1
// 2                  2           yes   2 = 2
// 2                  3

// 3                  0           yes   3 > 0
// 3                  1           yes   3 > 1
// 3                  2           yes   3 > 2
// 3                  3           yes   3 = 3
