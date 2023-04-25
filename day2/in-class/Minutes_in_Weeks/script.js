const main = function (noOfWeeks) {
  let noOfHoursPerDay = 24;
  let noOfMinPerHour = 60;
  let noOfDaysPerWeek = 7;
  let totalNoOfMinInGivenWeeks =
    noOfWeeks * noOfDaysPerWeek * noOfHoursPerDay * noOfMinPerHour;
  let myOutputValue = `In ${noOfWeeks} weeks there are ${totalNoOfMinInGivenWeeks} minutes! Wow!`;
  return myOutputValue;
};

// var main = function (input) {
//   var numberOfMin = input * 7 * 24 * 60;
//   var myOutputValue = `In ${input} weeks there are ${numberOfMin} minutes! Wow!`;
//   return myOutputValue;
// };

// // Minutes in Weeks
// // The user will enter a number of weeks. The program should output the number of minutes in those weeks in the output box.
// // Format the output nicely. Like: In 3 weeks there are 30240 minutes! Wow!
