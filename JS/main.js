console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},

	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},

	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},

	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"

	}

];


var cardsInPlay = [];


var checkForMatch = function () {

	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
  		
  		
	} 

	else if (cardsInPlay.length === 1) {
		return flipCard;
	}

	else if (cardsInPlay.length === 3) {
		return flipCard;
	}

	else if (cardsInPlay.length === 4 && cardsInPlay[2] === cardsInPlay[3]) {
		alert("You found another match, you're a winner!");

	}


	else {
		alert("Sorry, Try again!");

		window.location.reload();
		
	}

	//checkForMatch.addEventListener('alertClose', window.location.reload());

};

var flipCard = function () {

	var cardId = this.getAttribute('data-id');

		

	console.log("User flipped " + cards[cardId].rank + cards[cardId].suit + cards[cardId].cardImage);
	console.log(cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);
	

	this.setAttribute('src', cards[cardId].cardImage);


	checkForMatch();


};


var createBoard = function () {

	for (var i = 0; i < cards.length; i++) {

		
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		
		cardElement.addEventListener('click', flipCard);

		document.getElementById('game-board').appendChild(cardElement);
  }



};


createBoard();








