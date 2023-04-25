const main = function (noOfGuest) {
  let noOfDrinksPerGuest = 2;
  let noOfIceCubesPerDrink = 4;
  let cubeWeightInGrams = 1.5;
  let cubeWeightMadeInPoundsPerHour = 5;
  let GramsPerPound = 453.592;
  let cubeWeightMadeInGramsPerHour =
    cubeWeightMadeInPoundsPerHour * GramsPerPound;
  let cubeWeightRequiredInGrams =
    noOfGuest * noOfDrinksPerGuest * noOfIceCubesPerDrink * cubeWeightInGrams;
  let noOfHoursForIceMachine =
    cubeWeightRequiredInGrams / cubeWeightMadeInGramsPerHour;
  let myOutputValue = `Ice machine will need to be run for ${noOfHoursForIceMachine} hours to serve ${noOfGuest} guests.`;
  return myOutputValue;
};
