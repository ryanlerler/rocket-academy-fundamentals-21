const makeDeck = function () {
  const cardDeck = [];
  const suits = ["hearts", "diamonds", "clubs", "spades"];
  let suitsIndex = 0;
  while (suitsIndex < suits.length) {
    let currentSuit = suits[suitsIndex];
    let rankIndex = 1;
    while (rankIndex <= 13) {
      let cardName = rankIndex;
      if (rankIndex == 1) {
        cardName = "ace";
      } else if (rankIndex == 11) {
        cardName = "jack";
      } else if (rankIndex == 12) {
        cardName = "queen";
      } else if (rankIndex == 13) {
        cardName = "king";
      }
      const card = {
        name: cardName,
        suit: currentSuit,
        rank: rankIndex,
      };
      cardDeck.push(card);
      rankIndex += 1;
    }
    suitsIndex += 1;
  }
  return cardDeck;
};

const main = function (input) {
  let myOutputValue = makeDeck();
  return myOutputValue;
};
