const main = function (input) {
  let costRequired = calcCost(input);
  let myOutputValue = `${input} hours of using air con would cost $${costRequired}.`;
  return myOutputValue;
};

const calcCost = function (hoursOfAirConUse) {
  let kilowattsOfElectricity = 2;
  let costPerKilowattHour = 0.2;
  let cost = hoursOfAirConUse * kilowattsOfElectricity * costPerKilowattHour;
  return cost;
};
