const main = function (hoursSpentPerDay) {
  let lifeExpectancy = 82;
  let noOfDaysPerYear = 365;
  let totalHoursSpent = hoursSpentPerDay * noOfDaysPerYear * lifeExpectancy;
  let noOfHoursPerDay = 24;
  let totalDaysSpent = totalHoursSpent / noOfHoursPerDay;
  let myOutputValue = `If I spend ${hoursSpentPerDay} hours per day on WhatsApp and I live an average lifetime of ${lifeExpectancy} years, I will spend ${totalDaysSpent} days on WhatsApp during my life.`;
  return myOutputValue;
};
