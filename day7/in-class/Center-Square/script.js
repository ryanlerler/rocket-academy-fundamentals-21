const main = function (input) {
  let myOutputValue = "";
  if (input % 2 == 0) {
    myOutputValue = "Please key in an odd number.";
  } else {
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
          myOutputValue += "✊";
        } else if (
          outerCounter == innerCounter &&
          Math.floor(input / 2) == outerCounter
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
  }
  return myOutputValue;
};

// outerCounter | innerCounter | input | print
// 0                  0            5      ✊
// 0                  1            5      ✊
// 0                  2            5      ✊
// 0                  3            5      ✊
// 0                  4            5      ✊

// 1                  0            5      ✊
// 1                  1            5      👍
// 1                  2            5      👍
// 1                  3            5      👍
// 1                  4            5      ✊

// 2                  0            5      ✊
// 2                  1            5      👍
// 2                  2            5      😂
// 2                  3            5      👍
// 2                  4            5      ✊

// 3                  0            5      ✊
// 3                  1            5      👍
// 3                  2            5      👍
// 3                  3            5      👍
// 3                  4            5      ✊

// 4                  0            5      ✊
// 4                  1            5      ✊
// 4                  2            5      ✊
// 4                  3            5      ✊
// 4                  4            5      ✊
