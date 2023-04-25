let randomAdj = [];
let INPUT_ADJ = "input";
let CREATE = "create";
let POPULAR = "popular";
let mode = INPUT_ADJ;
let randomAdjIndexNumArray = [];
let randomAdjIndexNumFrequency = [];

const getRandomIndexNum = function () {
  return Math.floor(Math.random() * randomAdj.length);
};

const runInputAdjMode = function (currentUserAdj) {
  if (!currentUserAdj || currentUserAdj == INPUT_ADJ) {
    return "Please input adjectives separated by spaces to fill in our Mad Lib.";
  }
  currentUserAdj = currentUserAdj.split(" ");
  randomAdj.push(currentUserAdj);

  // initialize randomAdjIndexNumFrequency with zeros
  for (let i = 0; i < randomAdj.length; i += 1) {
    randomAdjIndexNumFrequency[i] = 0;
  }
  return `You have added ${currentUserAdj} to our list of adjectives. Our list of adjectives is now ${randomAdj}.`;
};

const runCreateMode = function () {
  let randomAdjIndexNum = getRandomIndexNum();
  randomAdjIndexNumArray.push(randomAdjIndexNum);
  randomAdjIndexNumFrequency[randomAdjIndexNum] += 1;
  let madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj[randomAdjIndexNum]} wife.`;
  console.log("randomAdjIndexNum: " + randomAdjIndexNum);
  console.log("randomAdjIndexNumArray: " + randomAdjIndexNumArray);
  console.log("randomAdjIndexNumFrequency: " + randomAdjIndexNumFrequency);

  return madLib;
};

const runPopularMode = function () {
  // get the index num of the most popular index num
  let mostPopularAdjIndexNum = randomAdjIndexNumFrequency.indexOf(
    Math.max(...randomAdjIndexNumFrequency)
  );
  return `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj[mostPopularAdjIndexNum]} wife.`;
};

const main = function (input) {
  let myOutputValue = "";
  if (input == CREATE) {
    mode = CREATE;
  } else if (input == POPULAR) {
    mode = POPULAR;
  }
  if (mode == INPUT_ADJ) {
    return (myOutputValue = runInputAdjMode(input));
  } else if (mode == CREATE) {
    return (myOutputValue = runCreateMode());
  } else if (mode == POPULAR) {
    return (myOutputValue = runPopularMode());
  }
  return myOutputValue;
};
