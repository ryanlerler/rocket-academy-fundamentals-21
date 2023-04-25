const deck = [
  {
    name: "ace",
    suit: "hearts",
    rank: 1,
  },
  {
    name: "2",
    suit: "hearts",
    rank: 2,
  },
  {
    name: "3",
    suit: "hearts",
    rank: 3,
  },
  {
    name: "4",
    suit: "hearts",
    rank: 4,
  },
  {
    name: "5",
    suit: "hearts",
    rank: 5,
  },
  {
    name: "6",
    suit: "hearts",
    rank: 6,
  },
  {
    name: "7",
    suit: "hearts",
    rank: 7,
  },
  {
    name: "8",
    suit: "hearts",
    rank: 8,
  },
  {
    name: "9",
    suit: "hearts",
    rank: 9,
  },
  {
    name: "10",
    suit: "hearts",
    rank: 10,
  },
  {
    name: "jack",
    suit: "hearts",
    rank: 11,
  },
  {
    name: "queen",
    suit: "hearts",
    rank: 12,
  },
  {
    name: "king",
    suit: "hearts",
    rank: 13,
  },
  {
    name: "ace",
    suit: "diamonds",
    rank: 1,
  },
  {
    name: "2",
    suit: "diamonds",
    rank: 2,
  },
  {
    name: "3",
    suit: "diamonds",
    rank: 3,
  },
  {
    name: "4",
    suit: "diamonds",
    rank: 4,
  },
  {
    name: "5",
    suit: "diamonds",
    rank: 5,
  },
  {
    name: "6",
    suit: "diamonds",
    rank: 6,
  },
  {
    name: "7",
    suit: "diamonds",
    rank: 7,
  },
  {
    name: "8",
    suit: "diamonds",
    rank: 8,
  },
  {
    name: "9",
    suit: "diamonds",
    rank: 9,
  },
  {
    name: "10",
    suit: "diamonds",
    rank: 10,
  },
  {
    name: "jack",
    suit: "diamonds",
    rank: 11,
  },
  {
    name: "queen",
    suit: "diamonds",
    rank: 12,
  },
  {
    name: "king",
    suit: "diamonds",
    rank: 13,
  },
  {
    name: "ace",
    suit: "clubs",
    rank: 1,
  },
  {
    name: "2",
    suit: "clubs",
    rank: 2,
  },
  {
    name: "3",
    suit: "clubs",
    rank: 3,
  },
  {
    name: "4",
    suit: "clubs",
    rank: 4,
  },
  {
    name: "5",
    suit: "clubs",
    rank: 5,
  },
  {
    name: "6",
    suit: "clubs",
    rank: 6,
  },
  {
    name: "7",
    suit: "clubs",
    rank: 7,
  },
  {
    name: "8",
    suit: "clubs",
    rank: 8,
  },
  {
    name: "9",
    suit: "clubs",
    rank: 9,
  },
  {
    name: "10",
    suit: "clubs",
    rank: 10,
  },
  {
    name: "jack",
    suit: "clubs",
    rank: 11,
  },
  {
    name: "queen",
    suit: "clubs",
    rank: 12,
  },
  {
    name: "king",
    suit: "clubs",
    rank: 13,
  },
  {
    name: "ace",
    suit: "spades",
    rank: 1,
  },
  {
    name: "2",
    suit: "spades",
    rank: 2,
  },
  {
    name: "3",
    suit: "spades",
    rank: 3,
  },
  {
    name: "4",
    suit: "spades",
    rank: 4,
  },
  {
    name: "5",
    suit: "spades",
    rank: 5,
  },
  {
    name: "6",
    suit: "spades",
    rank: 6,
  },
  {
    name: "7",
    suit: "spades",
    rank: 7,
  },
  {
    name: "8",
    suit: "spades",
    rank: 8,
  },
  {
    name: "9",
    suit: "spades",
    rank: 9,
  },
  {
    name: "10",
    suit: "spades",
    rank: 10,
  },
  {
    name: "jack",
    suit: "spades",
    rank: 11,
  },
  {
    name: "queen",
    suit: "spades",
    rank: 12,
  },
  {
    name: "king",
    suit: "spades",
    rank: 13,
  },
];

const getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// IS PARAMETER NECESSARY HERE? It's a good practice to pass the variable as parameter even if it is a global variable
const shuffleCards = function () {
  let currentIndex = 0;
  while (currentIndex < deck.length) {
    // all these let have to be in the loop as they have to be looped for deck.length number of times
    let randomIndex = getRandomIndex(deck.length);
    let randomCard = deck[randomIndex];
    let currentCard = deck[currentIndex];
    // Assign randomCard to deck array so the deck is shuffled
    deck[currentIndex] = randomCard;
    deck[randomIndex] = currentCard;
    currentIndex += 1;
  }
  return deck;
};

// Highest of 2 Cards
const return1Card = function (shuffledDeck) {
  return shuffledDeck.pop();
};

const main = function (input) {
  let shuffledDeck = shuffleCards();
  let pcCard = [];
  let playerCard = [];
  let i = 0;
  while (i < 2) {
    pcCard.push(return1Card(shuffledDeck));
    i += 1;
  }
  let j = 0;
  while (j < 2) {
    playerCard.push(return1Card(shuffledDeck));
    j += 1;
  }
  console.log(deck); // as each player draws 2 cards or each round draws 4 cards, the deck will be empty after 13 rounds, and so, the codes stop running

  let myOutputValue = `PC drew ${pcCard[0].name} of ${pcCard[0].suit} and ${pcCard[1].name} of ${pcCard[1].suit} while player drew ${playerCard[0].name} of ${playerCard[0].suit} and ${playerCard[1].name} of ${playerCard[1].suit}. <br> `;
  // HOW TO FIND THE WINNER???
  let allPcScores = [];
  allPcScores.push(pcCard[0].rank, pcCard[1].rank);
  let maxPcScore = Math.max(...allPcScores);
  let allPlayerScores = [];
  allPlayerScores.push(playerCard[0].rank, playerCard[1].rank);
  let maxPlayerScore = Math.max(...allPlayerScores);

  if (maxPcScore > maxPlayerScore) {
    myOutputValue += "PC wins!!!";
  } else if (maxPcScore < maxPlayerScore) {
    myOutputValue += "Player wins!!!";
  } else {
    myOutputValue += "DRAW!!!";
  }

  console.log("allPcScores: " + allPcScores);
  console.log("maxPcScore: " + maxPcScore);
  console.log("allPlayerScores: " + allPlayerScores);
  console.log("maxPlayerScore: " + maxPlayerScore);

  return myOutputValue;
};
// This method is difficult to account for draw condition
// let allScores = [];
// allScores.push(
//   pcCard[0].rank,
//   pcCard[1].rank,
//   playerCard[0].rank,
//   playerCard[1].rank
// );
// // find the index num in allScores array which has the highest score
// let maxScoreIndexNum = allScores.indexOf(Math.max(...allScores));
// if (maxScoreIndexNum == 0 || maxScoreIndexNum == 1) {
//   myOutputValue += "PC wins!!!";
// } else if (maxScoreIndexNum == 2 || maxScoreIndexNum == 3) {
//   myOutputValue += "Player wins!!!";
// } else {
//   myOutputValue += "DRAW!!!";
// }
// console.log("allScores: " + allScores);
// console.log("maxScoreIndexNum: " + maxScoreIndexNum);

// // Basic High Card
// const main = function (input) {
//   let shuffledDeck = shuffleCards();
//   let pcCard = shuffledDeck.pop();
//   let playerCard = shuffledDeck.pop();
//   let myOutputValue = `PC drew ${pcCard.name} of ${pcCard.suit} while player drew ${playerCard.name} of ${playerCard.suit}. <br> `;
//   if (pcCard.rank > playerCard.rank) {
//     myOutputValue += "PC wins!!!";
//   } else if (pcCard.rank < playerCard.rank) {
//     myOutputValue += "Player wins!!!";
//   } else {
//     myOutputValue += "DRAW!!!";
//   }
//   return myOutputValue;
// };
