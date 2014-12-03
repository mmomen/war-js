console.log("hi");

// Data Structures declared here
var deck = [];
var moveCount = 0;
var tieCount = 0;

var player1 = {
  deck: [],
  score: 0
};

var player2 = {
  deck: [],
  score: 0
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
  // console.log(deck);
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
  console.log(player2.deck);
  console.log(player1.deck);
};

var playOneRound = function() {
  console.log("Play 1 round of war where each player takes out a card to battle!");
};

var declareWinner = function() {
  console.log("Print out who the winner of the game is and how many moves it took to win.");
  console.log("Move count: " + moveCount);
  moveCount = 0;
};

// Main function that controls everything
var countTotalMovesInWar = function() {
  initializeDeck();
  shuffleCards();
  passOutCards();
  while(player1.deck.length > 0 && player2.deck.length > 0) {
    playOneRound();
  }
  declareWinner();
};

// Execute main function
countTotalMovesInWar();