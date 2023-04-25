const main = function (input) {
  let noOfHoursForIceMachine = calcIceMachineHours(input);
  let myOutputValue = `Ice machine will need to be run for ${noOfHoursForIceMachine.toFixed(
    2
  )} hours to serve ${input} guests.`;
  return myOutputValue;
};

const calcIceMachineHours = function (noOfGuest) {
  let noOfDrinksPerGuest = 2;
  let noOfIceCubesPerDrink = 4;
  let cubeWeightInGrams = 1.5;
  let cubeWeightMadeInPoundsPerHour = 5;
  let cubeWeightMadeInGramsPerHour = cubeWeightMadeInPoundsPerHour * 453.592;
  let cubeWeightRequiredInGrams =
    noOfGuest * noOfDrinksPerGuest * noOfIceCubesPerDrink * cubeWeightInGrams;
  let machineHours = cubeWeightRequiredInGrams / cubeWeightMadeInGramsPerHour;
  return machineHours;
};
