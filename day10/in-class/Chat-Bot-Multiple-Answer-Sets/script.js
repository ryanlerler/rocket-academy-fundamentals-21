const userAnswersAndBotResponses = [
  {
    question: `Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)`,
    answers: {
      yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
      no: `Oh ok, just normally happy ;)`,
      maybe: `It seems the very thought of coding makes people happy!`,
    },
  },
  {
    question: `Do you enjoy coding most during the day, night, or both? (day/night/both)`,
    answers: {
      day: `Ah yes, when the sun is high in the sky, I can feel its energy too.`,
      night: `Under the calm and gentle moon, I also find my focus.`,
      both: `Indeed, I could code 24/7 if I didn't have to sleep!`,
    },
  },
];

// Set the current question no
let currentQuesNum = 0;

const main = function (input) {
  console.log(currentQuesNum);
  // Store the current Q&A obj
  const currentQ_A = userAnswersAndBotResponses[currentQuesNum];

  // Store the current ans obj for comparison with user's input later
  const currentAns = currentQ_A.answers;

  // Check user's input which is a string against the key in the obj which is also a string and then assign it to the responseText variable
  // For eg., if user's input is 'yes' which is a valid obj key, userAnswersAndBotResponses['yes'] accesses the corresponding value (bot response) and then this certain bot response (the corresponding value in the obj) will be kept in the responseText variable
  const responseText = currentAns[input];

  let myOutputValue = "";

  // If obj value or bot response can be accessed by the user's input (a valid obj key), return that obj value, else return the question
  if (currentQ_A.answers[input]) {
    myOutputValue = responseText;
    // Move to the next question
    currentQuesNum += 1;
  } else {
    myOutputValue = currentQ_A.question;
  }

  // Reset question no after the first question
  if (currentQuesNum >= userAnswersAndBotResponses.length  ) {
    currentQuesNum = 0;
  }

  return myOutputValue;
};
