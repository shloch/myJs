

let suits = ["hearts", "clubs", "Diamonds", "spades"];

let values = ["Ace", "king", "queen", "jack", "Ten", 
              "Nine", "Eight", "Seven", "Six", "Five",
              "Four", "Three", "Two"
              ];
//DOM variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new_game_button');
let hitButton = document.getElementById('hit_button');
let stayButton = document.getElementById('stay_button');

//GAME variables
let gameStarted = false;
    gameOver = false;
    playerWon = false;
    dealerCards = [];
    playerCards = [];
    dealerScore = 0;
    playerScore = 0;
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener("click", function(){
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];

  
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
});


hitButton.addEventListener('click', function(){
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus;
});


stayButton.addEventListener('click', function() {
  gameOver = true;
  checkForEndOfGame();
  showStatus();
});

function createDeck(){
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++){
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++){
        let card = {
            suit: suits[suitIdx],
            value: values[valueIdx]
        };
        deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(){
  for (let i = 0; i < deck.length; i++){
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}



function getNextCard(){
  return deck.shift();
}



function getCardSTring(card) {
  return card.value + ' of ' + card.suit;
}

function getCardNumericValue(card) {
  switch (card.value) {
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10;
  }
}

function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (let i=0; i<cardArray.length; i++){
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === 'Ace'){
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    return score + 10;
  }
  return score;
}



function updateScores(){
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function checkForEndOfGame(){
  updateScores();

  if(gameOver) {
    //let dealer take cards
    while (dealerScore < playerScore
          && playerScore <= 21
          && dealerScore <= 21) {

      dealerCards.push(getNextCard());
      updateScores();
    }
  }

  if (playerScore > 21) {
    playerWon = false;
    gameOver = true;
  }else if (dealerScore > 21) {
    playerWon = true;
    gameOver = true;
  }else if (gameOver) {

    if (playerScore > dealerScore) {
      playerWon = true;
    }else {
      playerWon = false;
    }

    newGameButton.style.display = 'inline';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
  }
}


function showStatus(){
  if (!gameStarted){
    textArea.innerText = "Welcome to BlackJack !!";
    return;
  }

  for (var i=0; i<deck.length; i++){
    textArea.innerText += '\n' + getCardSTring(deck[i]);
  }

  let dealerCardString = '';
  for(let i=0; i<dealerCards.length; i++){
    dealerCardString += dealerCards[i] + '\n';
  }

  let playerCardString = '';
  for(let i=0; i<playerCards.length; i++){
    playerCardString += playerCards[i] + '\n';
  }

  updateScores();

  textArea.innerText = 
    'Dealer has : \n' +
    dealerCardString + 
    '(score: '+ dealerScore + ')\n\n' +

    'Player has:\n' +
    playerCardString +
    '(score: ' + playerScore + ')\n\n';

  if (gameOver) {
    if(playerWon) {
      textArea.innerText += "YOU WIN !";
    }else{
      textArea.innerText += "DEALER WINS !";
    }

    newGameButton.style.display = 'inline';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';

  }
}






//---



 
