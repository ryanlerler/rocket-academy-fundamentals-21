let deck = [];
const CARDCOUNT = "CARDCOUNT";
const GAME = "GAME";
let programState = CARDCOUNT;
let cardCount = 0;

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

const getPlayerCards = function (shuffledDeck) {
  const playerCard = [];
  for (let i = 0; i < cardCount; i += 1) {
    playerCard.push(shuffledDeck.pop());
  }
  return playerCard;
};

const main = function (input) {
  if (programState === CARDCOUNT) {
    if (!input || Number.isNaN(Number(input))) {
      return `Please enter the number of cards.`;
    } else {
      cardCount = input;
      programState = GAME;
      return `You chose to draw ${input} cards.`;
    }
  } else if (programState === GAME) {
    deck = makeDeck();
    const shuffledDeck = shuffleDeck();
    const pcCard = shuffledDeck.pop();

    const allplayerCards = getPlayerCards(shuffledDeck);

    // Check if player drew a queen
    let didPlayerDrawQueen = false;
    for (let i = 0; i < allplayerCards.length; i += 1) {
      if (allplayerCards[i].rank === 12) {
        didPlayerDrawQueen = true;
      }
    }
    console.log(didPlayerDrawQueen);
    let myOutputValue = `PC drew ${pcCard.name} of ${pcCard.suit}. <br> Player drew`;

    const playerCardsMessage = [];

    for (let i = 0; i < allplayerCards.length; i += 1) {
      playerCardsMessage.push(
        ` ${allplayerCards[i].name} of ${allplayerCards[i].suit}`
      );
    }

    myOutputValue += `${playerCardsMessage}.`;

    // HOW TO ACCESS all cards' allplayerCards.rank and find the lowest card then find the winner
    const allplayerCardRanks = [];
    for (let i = 0; i < allplayerCards.length; i += 1) {
      allplayerCardRanks.push(allplayerCards[i].rank);
    }

    let playerLowestCardIndexNum = allplayerCardRanks.indexOf(
      Math.min(...allplayerCardRanks)
    );
    let playerLowestCardRank = allplayerCardRanks[playerLowestCardIndexNum];
    console.log(playerLowestCardRank);

    // results

    if (
      (pcCard.rank === 12 && !didPlayerDrawQueen) ||
      (pcCard.rank < playerLowestCardRank && !didPlayerDrawQueen)
    ) {
      myOutputValue += "<br>PC wins!!!";
    } else if (
      (pcCard.rank !== 12 && didPlayerDrawQueen) ||
      (pcCard.rank !== 12 && pcCard.rank > playerLowestCardRank)
    ) {
      myOutputValue += "<br>Player wins!!!";
    } else {
      myOutputValue += "<br>DRAW!!!";
    }

    return myOutputValue;
  }
};
