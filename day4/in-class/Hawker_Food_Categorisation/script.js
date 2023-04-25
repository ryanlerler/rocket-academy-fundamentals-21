const main = function (input) {
  let myOutputValue = categorizeFood(input);
  return myOutputValue;
};

const categorizeFood = function (dishName) {
  let base;
  if (dishName == "chicken rice" || dishName == "nasi lemak") {
    base = "rice-based";
  } else if (dishName == "hokkien mee" || dishName == "laksa") {
    base = "noodle-based";
  } else {
    base = "others";
  }
  return base;
};
