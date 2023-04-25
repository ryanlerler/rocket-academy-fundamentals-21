console.log('a')
const main = function (input) {
  console.log("b");

  let myOutputValue = kilometersToMiles(input);
  console.log("myOutputValue");
  console.log(`===${myOutputValue}===`);
  return myOutputValue;
};
console.log("c");

const kilometersToMiles = function (distanceInKilometers) {
  console.log("d");

  console.log("running km to miles function");
  let distanceInMiles = distanceInKilometers * 0.62;
  return distanceInMiles;
};
console.log("e");
