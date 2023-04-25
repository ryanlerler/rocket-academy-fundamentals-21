const main = function (input) {
  let kegsNeeded = calcNoOfKegs(input);
  let myOutputValue = `For an average of ${input} customers per day, ${kegsNeeded.toFixed(
    2
  )} kegs of beer would be needed per quarter.`;
  return myOutputValue;
};

const calcNoOfKegs = function (noOfCustomersPerDay) {
  let noOfWeeksPerYear = 52;
  let noOfDaysPerWeek = 7;
  let noOfDaysPerYear = noOfWeeksPerYear * noOfDaysPerWeek;
  let noOfQuartersPerYear = 4;
  let noOfDaysPerQuarter = noOfDaysPerYear / noOfQuartersPerYear;
  let totalNoOfCustomers = noOfDaysPerQuarter * noOfCustomersPerDay;
  let noOfPintsPerCustomer = 2;
  let totalNoOfPints = totalNoOfCustomers * noOfPintsPerCustomer;
  let noOfPintsPerKeg = 124;
  let noOfKegRequired = totalNoOfPints / noOfPintsPerKeg;
  return noOfKegRequired;
};
