module.exports = (function() {
  var War = function() {
    this.deck = [];

    this.player1 = {
      deck: []
    };

    this.player2 = {
      deck: []
    };

    var cardPurgatory = [];
    this.moveCount = 0;
    this.moveCountArr = [];
  };

  War.prototype.initializeDeck = function() {
    // console.log("Fill deck with 52 cards (each card is an object that has a rank and suit). Clear the players' decks.");
    this.deck = [
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

  War.prototype.shuffleCards = function() {
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
    shuffle(this.deck);
  };

  War.prototype.passOutCards = function() {
    //rework to remove card from original deck and push (syncing the decks)
    for (var i=0,len=this.deck.length;i<len;i++) { //if shuffled, this is unnecessary
      if (i % 2 === 0) {
        this.player2.deck.push(this.deck[i]);
      } else {
        this.player1.deck.push(this.deck[i]);
      }
    }
  };

  War.prototype.logging = function() {
    console.log('p1: ' + this.player1.deck.length);
    console.log('p2: ' + this.player2.deck.length);
    console.log('total: ' + (this.player1.deck.length + this.player2.deck.length));
  };

  War.prototype.tieDiscard = function() {
    this.player1.deck.shift(); //0
    this.player1.deck.shift(); //1
    this.player1.deck.shift(); //2
    this.player1.deck.shift(); //3
    this.player1.deck.shift(); //4
    this.player2.deck.shift(); //0
    this.player2.deck.shift(); //1
    this.player2.deck.shift(); //2
    this.player2.deck.shift(); //3
    this.player2.deck.shift(); //4
    };

  War.prototype.holdingCards = function(card) {
    console.log("card is " + card);
    console.log(this.cardPurgatory);
    this.cardPurgatory = typeof this.cardPurgatory !== 'undefined' ? this.cardPurgatory : [];
    console.log(this.cardPurgatory);
    // card = typeof card !== 'undefined' ? card : 0;
    this.cardPurgatory.push(this.player1.deck[card], this.player1.deck[card+1], this.player1.deck[card+2], this.player1.deck[card+3], this.player1.deck[card+4],  this.player2.deck[card], this.player2.deck[card+1], this.player2.deck[card+2], this.player2.deck[card+3], this.player2.deck[card+4]);
  };

  War.prototype.restoreCards = function(playerObj) {
    var savePlayerObj = playerObj;
    this.cardPurgatory.forEach(function(e) {
      savePlayerObj.deck.push(e);
    });
    this.cardPurgatory = [];
   };

   War.prototype.tie = function(card) {
      console.log("card is " + card);
      if (this.player1.deck.length < card+5) {
        var that = this;
        this.player1.deck.forEach(function(e) {
          that.player2.deck.push(e);
        });
        this.restoreCards(this.player2);
        this.player1.deck = [];
        console.log('p1 didn\'t have enough cards');
        this.logging();
      } else if (this.player2.deck.length < card+5) {
        var that = this;
        this.player2.deck.forEach(function(e) {
          that.player1.deck.push(e);
        });
        this.restoreCards(this.player1);
        this.player2.deck = [];
        console.log('p2 didn\'t have enough cards');
        this.logging();
      } else if (this.player1.deck[card+4].rank > this.player2.deck[card+4].rank) {
        console.log('tie - p1 wins');
        this.holdingCards(card);
        this.restoreCards(this.player1);
        this.tieDiscard();
        this.logging();
      } else if (this.player2.deck[card+4].rank > this.player1.deck[card+4].rank) {
        console.log('tie - p2 wins');
        this.holdingCards(card);
        this.restoreCards(this.player2);
        this.tieDiscard();
        this.logging();
      }  else {
        this.holdingCards(card);
        this.tieDiscard();
        this.tie(card);
      }
    };
 
  War.prototype.playOneRound = function(card) {
    card = typeof card !== 'undefined' ? card : 0; //if card is set, keep it, otherwise make it 0
    
    if (this.player1.deck[card].rank > this.player2.deck[card].rank) {
      this.player1.deck.push(this.player2.deck[card], this.player1.deck[card]);
      this.player1.deck.shift();
      this.player2.deck.shift();
      console.log('p1 wins');
      this.logging();
    } else if (this.player2.deck[card].rank > this.player1.deck[card].rank) {
      this.player2.deck.push(this.player1.deck[card], this.player2.deck[card]);
      this.player1.deck.shift();
      this.player2.deck.shift();
      console.log('p2 wins');
      this.logging();
    }  else {
      console.log("card is " + card);
      this.tie(card);
    }
    this.moveCount++;
  };

  War.prototype.declareWinner = function() {
    console.log("Print out who the winner of the game is and how many moves it took to win.");
    console.log("Number of moves in this game: " + this.moveCount);
    console.log("Player 1: " + this.player1.deck.length);
    console.log("Player 2: " + this.player2.deck.length);
    if (this.player2.deck.length === 0) {
      console.log("PLAYER 1 HAS WON OMFG");
    } else if (this.player1.deck.length === 0) {
      console.log("PLAYER 2 HAS WON-HOW U DOOZ DIZ?");
    } else {
      console.log("Unexpected scenario - debug");
    }
    console.log(this.moveCountArr);
    this.moveCountArr.push(this.moveCount);
    this.moveCount = 0;
  };

  // Main function that controls everything
  War.prototype.countTotalMovesInWar = function(num) {
    var games = 0;
    while (games<num) {
      this.initializeDeck();
      this.shuffleCards();
      this.passOutCards();
      console.log(this.player1.deck.length);
      console.log(this.player2.deck.length);
      while(this.player1.deck.length > 0 && this.player2.deck.length > 0) {
        this.playOneRound();
      }
      this.declareWinner();
      games++;
    }
  };

  return War;
})();

// Execute main function
var War = require("./war");

var test = new War();
test.countTotalMovesInWar(100);

var sum = 0;
var len = test.moveCountArr.length;

for(var x = 0; x<len; x++){
  sum += test.moveCountArr[x];
}

var average = sum / len;
var min = Math.min.apply(null, test.moveCountArr);
var max = Math.max.apply(null, test.moveCountArr);

console.log("Games played: " + moveCountArr.length);
console.log("Average turns per game: " + average);
console.log("Min: " + min + " ||| Max: " + max);