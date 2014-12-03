console.log("hi");

// Data Structures declared here
var deck = [];
var moveCount = 0;

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
};

var playOneRound = function(start) {
  var logging = function() {
    console.log('p1: ' + player1.deck.length);
    console.log('p2: ' + player2.deck.length);
    console.log('total: ' + (player1.deck.length + player2.deck.length));
  }
  // start = typeof start !== 'undefined' ? start : 0;
  // console.log("Play 1 round of war where each player takes out a card to battle!");
  if (player1.deck[0].rank > player2.deck[0].rank) {
    player1.deck.push(player2.deck[0], player1.deck[0]);
    player1.deck.shift();
    player2.deck.shift();
    console.log('p1 wins');
    logging();
  } else if (player2.deck[0].rank > player1.deck[0].rank) {
    player2.deck.push(player1.deck[0], player2.deck[0]);
    player1.deck.shift();
    player2.deck.shift();
    console.log('p2 wins');
    logging();
  } else if (player1.deck.length < 5) {
    player1.deck.forEach(function(e,i,a) {
      player2.deck.push(e);
    });
    player1.deck = [];
    console.log('p2 wins');
    logging();
  } else if (player2.deck.length < 5) {
    player2.deck.forEach(function(e,i,a) {
      player1.deck.push(e);
    });
    console.log('p1 wins');
    logging();
    player2.deck = [];
  } else if (player1.deck[4].rank > player2.deck[4].rank) {
    console.log('tie - p1 wins');
    // console.log(playerOneTieRange + "," + playerTwoTieRange);
    player1.deck.push(player1.deck[0], player1.deck[1], player1.deck[2], player1.deck[3], player1.deck[4],  player2.deck[0], player2.deck[1], player2.deck[2], player2.deck[3], player2.deck[4]);
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
    console.log('p1 wins');
    logging();
  } else if (player2.deck[4].rank > player1.deck[4].rank) {
    console.log('tie - p2 wins');
    // console.log(playerTwoTieRange + "," + playerOneTieRange);
    player2.deck.push(player2.deck[0], player2.deck[1], player2.deck[2], player2.deck[3], player2.deck[4], player1.deck[0], player1.deck[1], player1.deck[2], player1.deck[3], player1.deck[4]);
    player2.deck.shift(); //0
    player2.deck.shift(); //1
    player2.deck.shift(); //2
    player2.deck.shift(); //3
    player2.deck.shift(); //4
    player1.deck.shift(); //0
    player1.deck.shift(); //1
    player1.deck.shift(); //2
    player1.deck.shift(); //3
    player1.deck.shift(); //4
    console.log('p2 wins');
    logging();
  } else {
    // playOneRound()
    throw "break"
  }
  moveCount++;
};

var declareWinner = function() {
  console.log("Print out who the winner of the game is and how many moves it took to win.");
  console.log("Number of moves in this game: " + moveCount);
  console.log("Player 1: " + player1.deck.length);
  console.log("Player 2: " + player2.deck.length);
  if (player) {
    console.log("PLAYER 1 HAS WON OMFG");
  } else if (player2.score > player1.score) {
    console.log("PLAYER 2 HAS WON-HOW U DOOZ DIZ?");
  } else {
    console.log("DURR BE A TIE!");
  }
  // moveCount = 0; //reset movecount
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