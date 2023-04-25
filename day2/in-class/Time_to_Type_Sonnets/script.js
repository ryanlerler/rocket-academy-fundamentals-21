const main = function (wordsPerMinTypingSpeed) {
  let numberOfWordsInSoonets = 17677;
  let numberOfMinuteRequired = numberOfWordsInSoonets / wordsPerMinTypingSpeed;
  let numberOfMinutePerHour = 60;
  let numberofHourRequired = numberOfMinuteRequired / numberOfMinutePerHour;
  numberofHourRequired = numberofHourRequired.toFixed(2);
  let myOutputValue = `If a person can type ${wordsPerMinTypingSpeed} words per minute, he/ she should take ${numberofHourRequired} hours to type all of Shakespeare's soonets (assume 17,677 words in all of Shakespeare's soonets).`;
  return myOutputValue;
};

// Time to Type Sonnets
// The user will enter their words-per-minute typing speed. The app will calculate how long it will take them to type all of Shakespeare's sonnets in hours.
// For simplicity, assume 17,677 words in all of Shakespeare's sonnets.
