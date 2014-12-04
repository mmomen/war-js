// Data Structures declared here
var deck = [];
var moveCount = 0;
var moveCountArr = [];

var player1 = {
  deck: []
};

var player2 = {
  deck: []
};

var initializeDeck = function() {
  console.log("Fill deck with 52 cards (each card is an object that has a rank and suit). Clear the players' decks.");
  player1.deck = [];
  player2.deck = [];
  deck = [
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
  if (deck.length === 52) {
    console.log('RATATA');
  } else {
    throw "Deck has " + deck.length + " cards -- that might be wrong.";
  }
};

var shuffleCards = function() {
  console.log("Shuffle the deck of cards");
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
  shuffle(deck);
};

var passOutCards = function() {
  console.log("Pass out the deck of cards to the 2 players");
  for (var i=0,len=deck.length;i<len;i++) {
    if (i % 2 === 0) {
      player2.deck.push(deck[i]);
    } else {
      player1.deck.push(deck[i]);
    }
  }
};

var playOneRound = function(card) {
  card = typeof card !== 'undefined' ? card : 0; //if card is set, keep it, otherwise make it 0
  var cardPurgatory = [];
  // console.log("Play 1 round of war where each player takes out a card to battle!");

  var logging = function() {
    console.log('p1: ' + player1.deck.length);
    console.log('p2: ' + player2.deck.length);
    console.log('total: ' + (player1.deck.length + player2.deck.length));
  };

  var tieDiscard = function() {
    player1.deck.shift(); //0
    player1.deck.shift(); //1
    player1.deck.shift(); //2
    player1.deck.shift(); //3
    player1.deck.shift(); //4
    player2.deck.shift(); //0
    player2.deck.shift(); //1
    player2.deck.shift(); //2
    player2.deck.shift(); //3
    player2.deck.shift(); //4
  };

  var holdingCards = function(card) {
    cardPurgatory.push(player1.deck[card], player1.deck[card+1], player1.deck[card+2], player1.deck[card+3], player1.deck[card+4],  player2.deck[card], player2.deck[card+1], player2.deck[card+2], player2.deck[card+3], player2.deck[card+4]);
  };

  var restoreCards = function(playerObj) {
    cardPurgatory.forEach(function(e) {
      playerObj.deck.push(e);
    });
    cardPurgatory = [];
  };

  var tie = function(card) {
    console.log("card is " + card);
    if (player1.deck.length < card+5) {
      player1.deck.forEach(function(e) {
        player2.deck.push(e);
      });
      restoreCards(player2);
      player1.deck = [];
      console.log('p1 didn\'t have enough cards');
      logging();
    } else if (player2.deck.length < card+5) {
      player2.deck.forEach(function(e) {
        player1.deck.push(e);
      });
      restoreCards(player1);
      player2.deck = [];
      console.log('p2 didn\'t have enough cards');
      logging();
    } else if (player1.deck[card+4].rank > player2.deck[card+4].rank) {
      console.log('tie - p1 wins');
      holdingCards(card);
      restoreCards(player1);
      tieDiscard();
      logging();
    } else if (player2.deck[card+4].rank > player1.deck[card+4].rank) {
      console.log('tie - p2 wins');
      holdingCards(card);
      restoreCards(player2);
      tieDiscard();
      logging();
    }  else {
      holdingCards(card);
      tieDiscard();
      tie(card);
    }
  };
  
  if (player1.deck[card].rank > player2.deck[card].rank) {
    player1.deck.push(player2.deck[card], player1.deck[card]);
    player1.deck.shift();
    player2.deck.shift();
    console.log('p1 wins');
    logging();
  } else if (player2.deck[card].rank > player1.deck[card].rank) {
    player2.deck.push(player1.deck[card], player2.deck[card]);
    player1.deck.shift();
    player2.deck.shift();
    console.log('p2 wins');
    logging();
  }  else {
    console.log("card is " + card);
    tie(card); 
  }
  moveCount++;
};

var declareWinner = function() {
  console.log("Print out who the winner of the game is and how many moves it took to win.");
  console.log("Number of moves in this game: " + moveCount);
  console.log("Player 1: " + player1.deck.length);
  console.log("Player 2: " + player2.deck.length);
  if (player2.deck.length === 0) {
    console.log("PLAYER 1 HAS WON OMFG");
  } else if (player1.deck.length === 0) {
    console.log("PLAYER 2 HAS WON-HOW U DOOZ DIZ?");
  } else {
    console.log("Unexpected scenario - debug");
  }
  moveCountArr.push(moveCount);
  moveCount = 0;
};

// Main function that controls everything
var countTotalMovesInWar = function(num) {
  var games = 0;
  while (games<num) {
    initializeDeck();
    shuffleCards();
    passOutCards();
    while(player1.deck.length > 0 && player2.deck.length > 0) {
      playOneRound();
    }
    declareWinner();
    games++;
  }
};

// Execute main function
countTotalMovesInWar(100);
var sum = 0;
for(var x = 0; x < moveCountArr.length; x++){
  sum += moveCountArr[x];
}

var average = sum / moveCountArr.length;
var min = Math.min.apply(null, moveCountArr);
var max = Math.max.apply(null, moveCountArr);

console.log("Games played: " + moveCountArr.length);
console.log("Average turns per game: " + average);
console.log("Min: " + min + " ||| Max: " + max);