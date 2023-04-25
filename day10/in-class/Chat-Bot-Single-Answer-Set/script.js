const userAnswersAndBotResponses = {
  yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
  no: `Oh ok, just normally happy ;)`,
  maybe: `It seems the very thought of coding makes people happy!`,
};

const main = function (input) {
  // Set the question
  let myOutputValue = `Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)`;
  // Check user's input which is a string against the key in the obj which is also a string and then assign it to the responseText variable
  // For eg., if user's input is 'yes' which is also in the obj key, userAnswersAndBotResponses['yes'] accesses the corresponding value (bot response) and then this certain bot response (the corresponding value in the obj) will be kept in the responseText variable
  let responseText = userAnswersAndBotResponses[input];
  // If obj value or bot response can be accessed by the user's input (a valid obj key), return that obj value, else return the question
  if (userAnswersAndBotResponses[input]) {
    return responseText;
  } else {
    return myOutputValue;
  }
};
