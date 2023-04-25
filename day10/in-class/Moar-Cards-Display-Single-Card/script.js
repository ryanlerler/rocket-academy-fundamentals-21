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
      let card = {
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
  const cardDrawn = shuffledDeck.pop();
  let myOutputValue = `You drew ${cardDrawn.name} of ${cardDrawn.suit}.`;
  return myOutputValue;
};
