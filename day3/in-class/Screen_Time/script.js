const main = function (input) {
  let screenTime = calcScreenTime(input);
  let myOutputValue = `If I spend ${input} hours per day on WhatsApp, I will spend ${screenTime.toFixed(
    2
  )} days of my lifetime on WhatsApp if I live up to 82 years old.`;
  return myOutputValue;
};

const calcScreenTime = function (hoursSpentPerDay) {
  let lifeExpectancy = 82;
  let noOfDaysPerYear = 365;
  let totalHoursSpent = hoursSpentPerDay * noOfDaysPerYear * lifeExpectancy;
  let noOfHoursPerDay = 24;
  let totalDaysSpent = totalHoursSpent / noOfHoursPerDay;
  return totalDaysSpent;
};
