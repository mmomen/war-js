var gameStatus = {};
var moveCountArr = [];

var init = function() {
  // console.log("Fill deck with 52 cards (each card is an object that has a rank and suit). Clear the players' decks.");

  gameStatus.deck = [];
  gameStatus.moveCount = 0;
  gameStatus.player1 = {deck: []};
  gameStatus.player2 = {deck: []};
};

var initializeDeck = function() {
  gameStatus.deck = [
    {
      rank: 02,
      suit: "spades"
    },{
      rank: 03,
      suit: "spades"
    },{
      rank: 04,
      suit: "spades"
    },{
      rank: 05,
      suit: "spades"
    },{
      rank: 06,
      suit: "spades"
    },{
      rank: 07,
      suit: "spades"
    },{
      rank: 08,
      suit: "spades"
    },{
      rank: 09,
      suit: "spades"
    },{
      rank: 10,
      suit: "spades"
    },{
      rank: 11,
      suit: "spades"
    },{
      rank: 12,
      suit: "spades"
    },{
      rank: 13,
      suit: "spades"
    },{
      rank: 14,
      suit: "spades"
    },{
      rank: 02,
      suit: "hearts"
    },{
      rank: 03,
      suit: "hearts"
    },{
      rank: 04,
      suit: "hearts"
    },{
      rank: 05,
      suit: "hearts"
    },{
      rank: 06,
      suit: "hearts"
    },{
      rank: 07,
      suit: "hearts"
    },{
      rank: 08,
      suit: "hearts"
    },{
      rank: 09,
      suit: "hearts"
    },{
      rank: 10,
      suit: "hearts"
    },{
      rank: 11,
      suit: "hearts"
    },{
      rank: 12,
      suit: "hearts"
    },{
      rank: 13,
      suit: "hearts"
    },{
      rank: 14,
      suit: "hearts"
    },{
      rank: 02,
      suit: "diamonds"
    },{
      rank: 03,
      suit: "diamonds"
    },{
      rank: 04,
      suit: "diamonds"
    },{
      rank: 05,
      suit: "diamonds"
    },{
      rank: 06,
      suit: "diamonds"
    },{
      rank: 07,
      suit: "diamonds"
    },{
      rank: 08,
      suit: "diamonds"
    },{
      rank: 09,
      suit: "diamonds"
    },{
      rank: 10,
      suit: "diamonds"
    },{
      rank: 11,
      suit: "diamonds"
    },{
      rank: 12,
      suit: "diamonds"
    },{
      rank: 13,
      suit: "diamonds"
    },{
      rank: 14,
      suit: "diamonds"
    },{
      rank: 02,
      suit: "clubs"
    },{
      rank: 03,
      suit: "clubs"
    },{
      rank: 04,
      suit: "clubs"
    },{
      rank: 05,
      suit: "clubs"
    },{
      rank: 06,
      suit: "clubs"
    },{
      rank: 07,
      suit: "clubs"
    },{
      rank: 08,
      suit: "clubs"
    },{
      rank: 09,
      suit: "clubs"
    },{
      rank: 10,
      suit: "clubs"
    },{
      rank: 11,
      suit: "clubs"
    },{
      rank: 12,
      suit: "clubs"
    },{
      rank: 13,
      suit: "clubs"
    },{
      rank: 14,
      suit: "clubs"
    }
  ];
};

var shuffleCards = function(deckArr) {
  // console.log("Shuffle the deck of cards");
  var shuffle = function(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  };
  shuffle(deckArr);
};

var passOutCards = function() {
  // console.log("Pass out the deck of cards to the 2 players");
  for (var i=0,len=gameStatus.deck.length;i<len;i++) {
    if (i % 2 === 0) {
      gameStatus.player2.deck.push(gameStatus.deck[i]);
    } else {
      gameStatus.player1.deck.push(gameStatus.deck[i]);
    }
  }
};

var playOneRound = function(card) {
  card = typeof card !== 'undefined' ? card : 0; //if card is set, keep it, otherwise make it 0
  var cardPurgatory = [];
  // console.log("Play 1 round of war where each player takes out a card to battle!");

  var logging = function() {
    // console.log('p1: ' + gameStatus.player1.deck.length);
    // console.log('p2: ' + gameStatus.player2.deck.length);
    // console.log('total: ' + (gameStatus.player1.deck.length + gameStatus.player2.deck.length));
  };

  var tieDiscard = function() {
    gameStatus.player1.deck.shift(); //0
    gameStatus.player1.deck.shift(); //1
    gameStatus.player1.deck.shift(); //2
    gameStatus.player1.deck.shift(); //3
    gameStatus.player1.deck.shift(); //4
    gameStatus.player2.deck.shift(); //0
    gameStatus.player2.deck.shift(); //1
    gameStatus.player2.deck.shift(); //2
    gameStatus.player2.deck.shift(); //3
    gameStatus.player2.deck.shift(); //4
  };

  var holdingCards = function(card) {
    cardPurgatory.push(gameStatus.player1.deck[card], gameStatus.player1.deck[card+1], gameStatus.player1.deck[card+2], gameStatus.player1.deck[card+3], gameStatus.player1.deck[card+4],  gameStatus.player2.deck[card], gameStatus.player2.deck[card+1], gameStatus.player2.deck[card+2], gameStatus.player2.deck[card+3], gameStatus.player2.deck[card+4]);
  };

  var restoreCards = function(playerObj) {
    cardPurgatory.forEach(function(e) {
      playerObj.deck.push(e);
    });
    cardPurgatory = [];
  };

  var tie = function(card) {
    console.log("card is " + card);
    if (gameStatus.player1.deck.length < card+5) {
      gameStatus.player1.deck.forEach(function(e) {
        gameStatus.player2.deck.push(e);
      });
      restoreCards(gameStatus.player2);
      gameStatus.player1.deck = [];
      console.log('p1 didn\'t have enough cards');
      logging();
    } else if (gameStatus.player2.deck.length < card+5) {
      gameStatus.player2.deck.forEach(function(e) {
        gameStatus.player1.deck.push(e);
      });
      restoreCards(gameStatus.player1);
      gameStatus.player2.deck = [];
      console.log('p2 didn\'t have enough cards');
      logging();
    } else if (gameStatus.player1.deck[card+4].rank > gameStatus.player2.deck[card+4].rank) {
      console.log('tie - p1 wins');
      holdingCards(card);
      restoreCards(gameStatus.player1);
      tieDiscard();
      logging();
    } else if (gameStatus.player2.deck[card+4].rank > gameStatus.player1.deck[card+4].rank) {
      console.log('tie - p2 wins');
      holdingCards(card);
      restoreCards(gameStatus.player2);
      tieDiscard();
      logging();
    }  else {
      holdingCards(card);
      tieDiscard();
      tie(card);
    }
  };
  
  if (gameStatus.player1.deck[card].rank > gameStatus.player2.deck[card].rank) {
    gameStatus.player1.deck.push(gameStatus.player2.deck[card], gameStatus.player1.deck[card]);
    gameStatus.player1.deck.shift();
    gameStatus.player2.deck.shift();
    console.log('p1 wins');
    logging();
  } else if (gameStatus.player2.deck[card].rank > gameStatus.player1.deck[card].rank) {
    gameStatus.player2.deck.push(gameStatus.player1.deck[card], gameStatus.player2.deck[card]);
    gameStatus.player1.deck.shift();
    gameStatus.player2.deck.shift();
    console.log('p2 wins');
    logging();
  }  else {
    console.log("card is " + card);
    tie(card); 
  }
  gameStatus.moveCount++;
};

var declareWinner = function() {
  // console.log("Print out who the winner of the game is and how many moves it took to win.");
  console.log("Number of moves in this game: " + gameStatus.moveCount);
  console.log("Player 1: " + gameStatus.player1.deck.length);
  console.log("Player 2: " + gameStatus.player2.deck.length);
  if (gameStatus.player2.deck.length === 0) {
    console.log("PLAYER 1 HAS WON OMFG");
  } else if (gameStatus.player1.deck.length === 0) {
    console.log("PLAYER 2 HAS WON-HOW U DOOZ DIZ?");
  } else {
    console.log("Unexpected scenario - debug");
  }
  moveCountArr.push(gameStatus.moveCount);
  gameStatus.moveCount = 0;
};

exports.init = init;
exports.gameStatus = gameStatus;
exports.initializeDeck = initializeDeck;
exports.shuffleCards = shuffleCards;
exports.passOutCards = passOutCards;
exports.playOneRound = playOneRound;
exports.moveCountArr = moveCountArr;
exports.declareWinner = declareWinner;