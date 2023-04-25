const main = function (input) {
  let feet = convertMilesToFeet(convertKmtoMiles(input));
  let myOutputValue = feet;
  return myOutputValue;
};

const convertKmtoMiles = function (distanceInKm) {
  let distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

const convertMilesToFeet = function (distanceInMiles) {
  let feet = distanceInMiles * 5280;
  return feet;
};
