let deck = [];

const makeDeck = function () {
  const suit = ["hearts", "diamonds", "clubs", "spades"];
  for (let suitIndex = 0; suitIndex < 4; suitIndex += 1) {
    let currentSuit = suit[suitIndex];
    for (let rankIndex = 1; rankIndex <= 13; rankIndex += 1) {
      let cardName = rankIndex;
      if (rankIndex === 1) {
        cardName = "ace";
      } else if (rankIndex === 11) {
        cardName = "jack";
      } else if (rankIndex === 12) {
        cardName = "queen";
      } else if (rankIndex === 13) {
        cardName = "king";
      }
      const card = {
        name: cardName,
        suit: currentSuit,
        rank: rankIndex,
      };
      deck.push(card);
    }
  }
  return deck;
};

const getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

const shuffleDeck = function () {
  for (let currentIndex = 0; currentIndex < deck.length; currentIndex += 1) {
    let currentCard = deck[currentIndex];
    let randomIndex = getRandomIndex(deck.length);
    let randomCard = deck[randomIndex];
    deck[currentIndex] = randomCard;
    deck[randomIndex] = currentCard;
  }
  return deck;
};

const main = function (input) {
  deck = makeDeck();
  const shuffledDeck = shuffleDeck();
  const pcCard = shuffledDeck.pop();
  const playerCard = shuffledDeck.pop();

  let myOutputValue = `PC drew ${pcCard.name} of ${pcCard.suit} while player drew ${playerCard.name} of ${playerCard.suit}. <br> `;

  if (
    (pcCard.name === "queen" && playerCard.name === "queen") ||
    pcCard.rank === playerCard.rank
  ) {
    myOutputValue += "Draw!!!";
  } else if (pcCard.name === "queen") {
    myOutputValue += "PC wins!!!";
  } else if (playerCard.name === "queen") {
    myOutputValue += "Player wins!!!";
  } else if (pcCard.rank < playerCard.rank) {
    myOutputValue += "PC wins!!!";
  } else if (pcCard.rank > playerCard.rank) {
    myOutputValue += "Player wins!!!";
  }
  return myOutputValue;
};
