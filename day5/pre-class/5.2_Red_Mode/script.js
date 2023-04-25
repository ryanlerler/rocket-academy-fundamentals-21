let mode = "green";

const main = function (input) {
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  } else if (input == "redmode") {
    mode = "red";
  }
  let myOutputValue;
  if (mode == "green") {
    myOutputValue =
      "A fool sees not the same tree that a wise man sees. -William Blake";
  }
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }
  if (mode == "red") {
    myOutputValue = "RED mode";
  }

  return myOutputValue;
};
