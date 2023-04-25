const main = function (hoursOfAirConUse) {
  let kilowattsOfElectricty = 2;
  let costPerKilowattHour = 0.2;
  let totalCost =
    hoursOfAirConUse * kilowattsOfElectricty * costPerKilowattHour;
  let myOutputValue = `${hoursOfAirConUse} hours of using air con would cost $${totalCost}.`;
  return myOutputValue;
};
