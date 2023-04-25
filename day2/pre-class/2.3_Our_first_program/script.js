const main = function (input) {
  let distanceInKm = input;
  let distanceInMiles = distanceInKm * 0.62;
  let myOutputValue = `Hi! ${distanceInKm} kilometers is equal to ${distanceInMiles} miles.`;
  return myOutputValue;
};

// var main = function (input) {
//   var distanceInKm = input;
//   var distanceInMiles = distanceInKm * 0.62;
//   var myOutputValue = `Hi! ${input} kilometres is equal to ${distanceInMiles} miles`;
//   return myOutputValue;
// };
