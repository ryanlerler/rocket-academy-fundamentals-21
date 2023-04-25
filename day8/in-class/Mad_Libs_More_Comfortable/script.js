let randomAdj = [];
let INPUT = "input";
let CREATE = "create";
let POPULAR = "popular";
let mode = INPUT;
let randomAdjIndexNumArray = [];
let randomAdjIndexNumFrequency = [];
let randomExclamation = [];
let randomExclamationIndexNumArray = [];
let randomExclamationIndexNumFrequency = [];
let randomAdverb = [];
let randomAdverbIndexNumArray = [];
let randomAdverbIndexNumFrequency = [];
let randomNoun = [];
let randomNounIndexNumArray = [];
let randomNounIndexNumFrequency = [];
let currentWordType = "exclamations";
let lastWordType = "";

const getRandomIndexNum = function () {
  return Math.floor(Math.random() * randomAdj.length);
};

const getRandomMadLibsIndexNum = function () {
  return Math.floor(Math.random() * 2);
};

const runInputMode = function (currentUserInput) {
  if (!currentUserInput) {
    return `Please input ${currentWordType} separated by spaces to fill in our Mad Lib.`;
  }
  if (currentUserInput == INPUT) {
    return `Please input ${currentWordType} separated by spaces to fill in our Mad Lib.`;
  }
  if (currentWordType == "exclamations") {
    currentUserInput = currentUserInput.split(" ");
    randomExclamation.push(currentUserInput);

    // initialize randomExclamationIndexNumFrequency with zeros
    for (let i = 0; i < randomExclamation.length; i += 1) {
      randomExclamationIndexNumFrequency[i] = 0;
    }
    lastWordType = "exclamations";
    currentWordType = "adverbs";
  } else if (currentWordType == "adverbs") {
    currentWordType = "adverbs";
    currentUserInput = currentUserInput.split(" ");
    randomAdverb.push(currentUserInput);

    // initialize randomAdverbIndexNumFrequency with zeros
    for (let i = 0; i < randomAdverb.length; i += 1) {
      randomAdverbIndexNumFrequency[i] = 0;
    }
    lastWordType = "adverbs";
    currentWordType = "nouns";
  } else if (currentWordType == "nouns") {
    currentWordType = "nouns";
    currentUserInput = currentUserInput.split(" ");
    randomNoun.push(currentUserInput);

    // initialize randomNounIndexNumFrequency with zeros
    for (let i = 0; i < randomNoun.length; i += 1) {
      randomNounIndexNumFrequency[i] = 0;
    }
    lastWordType = "nouns";
    currentWordType = "adjectives";
  } else if (currentWordType == "adjectives") {
    currentWordType = "adjectives";
    currentUserInput = currentUserInput.split(" ");
    randomAdj.push(currentUserInput);

    // initialize randomAdjIndexNumFrequency with zeros
    for (let i = 0; i < randomAdj.length; i += 1) {
      randomAdjIndexNumFrequency[i] = 0;
    }
    lastWordType = "adjectives";
    currentWordType = "exclamations";
  }
  return `You have added ${currentUserInput} to our list of ${lastWordType}. <br>

Our list of exclamations is ${randomExclamation}. <br>

Our list of adverbs is ${randomAdverb}. <br>

Our list of nouns is ${randomNoun}. <br>

Our list of adjectives is ${randomAdj}. <br>

Please input ${currentWordType} separated by spaces to fill in our Mad Lib.  <br>

If you have input words for each word type, type "create" to enter create mode to generate complete Mad Libs.  <br>

You can also type "popular" to enter create mode with only the most popular words so far`;
};

const runCreateMode = function () {
  let randomExclamationIndexNum = getRandomIndexNum();
  randomExclamationIndexNumArray.push(randomExclamationIndexNum);
  randomExclamationIndexNumFrequency[randomExclamationIndexNum] += 1;
  let randomAdverbIndexNum = getRandomIndexNum();
  randomAdverbIndexNumArray.push(randomAdverbIndexNum);
  randomAdverbIndexNumFrequency[randomAdverbIndexNum] += 1;
  let randomNounIndexNum = getRandomIndexNum();
  randomNounIndexNumArray.push(randomNounIndexNum);
  randomNounIndexNumFrequency[randomNounIndexNum] += 1;
  let randomAdjIndexNum = getRandomIndexNum();
  randomAdjIndexNumArray.push(randomAdjIndexNum);
  randomAdjIndexNumFrequency[randomAdjIndexNum] += 1;

  let madLib = [
    `${randomExclamation[randomExclamationIndexNum]}! he said ${randomAdverb[randomAdverbIndexNum]} as he jumped into his convertible ${randomNoun[randomNounIndexNum]} and drove off with his ${randomAdj[randomAdjIndexNum]} wife.`,
    `It was a ${randomAdj[randomAdjIndexNum]}, cold November day. I woke up to the ${randomAdj[randomAdjIndexNum]} smell of ${randomNoun[randomNounIndexNum]} roasting in the ${randomNoun[randomNounIndexNum]} downstairs.`,
  ];
  let randomMadLibsIndexNum = getRandomMadLibsIndexNum();
  return `${madLib[randomMadLibsIndexNum]} <br> <br> Hit Submit to complete the Mad Lib again, enter "input" to input more words, "create" to create random Mad Libs, or "popular" to create the most popular Mad Lib.`;
};

const runPopularMode = function () {
  // get the index num of the most popular index num
  let mostPopularExclamationIndexNum =
    randomExclamationIndexNumFrequency.indexOf(
      Math.max(...randomExclamationIndexNumFrequency)
    );
  let mostPopularAdverbIndexNum = randomAdverbIndexNumFrequency.indexOf(
    Math.max(...randomAdverbIndexNumFrequency)
  );
  let mostPopularNounIndexNum = randomNounIndexNumFrequency.indexOf(
    Math.max(...randomNounIndexNumFrequency)
  );
  let mostPopularAdjIndexNum = randomAdjIndexNumFrequency.indexOf(
    Math.max(...randomAdjIndexNumFrequency)
  );

  let madLib = [
    `${randomExclamation[mostPopularExclamationIndexNum]}! he said ${randomAdverb[mostPopularAdverbIndexNum]} as he jumped into his convertible ${randomNoun[mostPopularNounIndexNum]} and drove off with his ${randomAdj[mostPopularAdjIndexNum]} wife.`,
    `It was a ${randomAdj[mostPopularAdjIndexNum]}, cold November day. I woke up to the ${randomAdj[mostPopularAdjIndexNum]} smell of ${randomNoun[mostPopularExclamationIndexNum]} roasting in the ${randomNoun[mostPopularExclamationIndexNum]} downstairs.`,
  ];
  let randomMadLibsIndexNum = getRandomMadLibsIndexNum();
  return `${madLib[randomMadLibsIndexNum]} <br> <br> Hit Submit to complete the Mad Lib again, enter "input" to input more words, "create" to create random Mad Libs, or "popular" to create the most popular Mad Lib.`;
};

const main = function (input) {
  let myOutputValue = "";
  if (input == INPUT) {
    mode = INPUT;
  } else if (input == CREATE) {
    mode = CREATE;
  } else if (input == POPULAR) {
    mode = POPULAR;
  }
  if (mode == INPUT) {
    return (myOutputValue = runInputMode(input));
  } else if (mode == CREATE) {
    return (myOutputValue = runCreateMode());
  } else if (mode == POPULAR) {
    return (myOutputValue = runPopularMode());
  }
  return myOutputValue;
};
