const calcHuggingSecondsPerDay = function () {
  let nonHuggingHoursPerDay = 9;
  let noOfHoursPerDay = 24;
  let huggingHoursPerDay = noOfHoursPerDay - nonHuggingHoursPerDay;
  let noOfMinPerHour = 60;
  let noOfSecondPerMin = 60;
  let noOfSecondPerHour = noOfMinPerHour * noOfSecondPerMin;
  let totalHuggingSecondsPerDay = huggingHoursPerDay * noOfSecondPerHour;
  return totalHuggingSecondsPerDay;
};

const calcNumberOfHugsPerDay = function (preferredHuggingTimeInSeconds) {
  let timeSpentOnHuggingEachDay = calcHuggingSecondsPerDay();
  return timeSpentOnHuggingEachDay / preferredHuggingTimeInSeconds;
};

const calcNumberOfYearsToHugEveryone = function (
  preferredHuggingTimeInSeconds
) {
  let singaporePopulation = 5974702;
  let numberOfHugsPerDay = calcNumberOfHugsPerDay(
    preferredHuggingTimeInSeconds
  );
  let numberOfDaysToHugEveryone = singaporePopulation / numberOfHugsPerDay;
  let numberOfDaysPerYear = 365;
  return numberOfDaysToHugEveryone / numberOfDaysPerYear;
};

const main = function (input) {
  let numberOfYearsToHugEveryone =
    calcNumberOfYearsToHugEveryone(input).toFixed(2);
  let myOutputValue = `It will take ${numberOfYearsToHugEveryone} years to hug everyone in Singapore if you were to hug each person ${input} seconds on average.`;
  return myOutputValue;
};

// Everyone has a different gauge for how long they like to hug. The user can enter a number of seconds they like to hug on average, and the app will calculate how many years it will take to hug everyone in Singapore. You are allowed 9 hours a day to sleep and eat. (Ref Solution)
