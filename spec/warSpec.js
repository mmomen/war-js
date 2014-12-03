var War = require('../war2.js');

var card1 = {
  rank: 14,
  suit: "clubs"
};
var card2 = {
  rank: 10,
  suit: "diamonds"
};

describe("deck", function() {
  it("is an empty array", function() {
    War.init();
    expect(War.gameStatus.deck).toEqual([]);
  });

  it("initalizes with 52 cards", function() {
    War.init();
    War.initializeDeck();
    expect(War.gameStatus.deck.length).toEqual(52);
    expect(War.gameStatus.deck).toContain(card1);
    expect(War.gameStatus.deck).toContain(card2);
  });

  it("shuffles the deck", function() {
    War.init();
    War.initializeDeck();
    var origDeck = War.gameStatus.deck.slice(0,52); //save the original deck
    War.shuffleCards(War.gameStatus.deck); //shuffle it
    expect(origDeck).toNotEqual(War.gameStatus.deck); //orig should not be equal to live
    expect(War.gameStatus.deck.length).toEqual(52); //ensure 52 still exist
  });

  it("passes out cards", function() {
    War.init();
    War.initializeDeck();
    War.shuffleCards(War.gameStatus.deck);
    War.passOutCards();
    expect(War.gameStatus.player1.deck.length).toEqual(26);
    expect(War.gameStatus.player2.deck.length).toEqual(26);
    // expect(gameStatus.player1.deck).toNotEqual(gameStatus.player2.deck);
  });

  it("plays one move", function() {
    War.init();
    War.initializeDeck();
    War.shuffleCards(War.gameStatus.deck);
    War.passOutCards();
    var previousMoveCount = War.gameStatus.moveCount
    War.playOneRound();
    expect(War.gameStatus.moveCount).toEqual(previousMoveCount + 1);
    expect(War.gameStatus.player1.deck.length).toNotEqual(26);
    expect(War.gameStatus.player2.deck.length).toNotEqual(26);
  })
//create situation to force and test a tie, and a super tie
  
  it("declares the winner of the game", function() {
    War.init();
    War.initializeDeck();
    War.shuffleCards(War.gameStatus.deck);
    War.passOutCards();
    // War.playOneRound ();
    //configure setup for winner
    
    War.declareWinner();
  })

});