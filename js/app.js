const makeDeck = () => {
    return {
      deck: [],
      drawnCards: [],
      suits: ['hearts', 'diamonds', 'spades', 'clubs'],
      values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
      initializeDeck() {
        const {
          suits,
          values,
          deck
        } = this;
        for (let value of values.split(',')) {
          for (let suit of suits) {
            deck.push({
              value,
              suit
            })
          }
        }
        // return deck;
      },
      drawCard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
      },
      drawMultiple(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
          cards.push(this.drawCard());
        }
        return cards;
      },
      shuffle() {
        const {
          deck
        } = this;
        // loop over array backwards
        for (let i = deck.length - 1; i > 0; i--) {
          //pick random index before current element
          let j = Math.floor(Math.random() * (i + 1));
          //swap
          [deck[i], deck[j]] = [deck[j], deck[i]];
        }
      }
    }
  }

const startButton=document.querySelector('#start')
const myDeck=makeDeck();
const drawButton=document.querySelector('#draw')
const card=document.querySelector('#card')
let ctx = card.getContext("2d");
startButton.addEventListener('click', function() {
	startButton.innerText = 'Restart Game';
    //document.body.style.backgroundColor = 'red';
    myDeck.initializeDeck();
    myDeck.shuffle();
    ctx.clearRect(0,0,card.width,card.height)
    ctx.font="30px Arial";
    ctx.strokeText("Have Fun!",50,50);
});

drawButton.addEventListener('click', function() {
    const drawnCard=myDeck.drawCard();
    console.log(drawnCard);
    ctx.clearRect(0,0,card.width,card.height)
    ctx.font="60px Arial";
    //ctx.strokeStyle="red"
    const img = new Image();        
    switch (drawnCard.suit){
        case'hearts':
        img.src ='./Heart.png';
        break; 
        case'spades':
        img.src='./pik.png'; 
        break;
        case'clubs':
         img.src = './kreuz.png'; 
         break;
        case'diamonds':
         img.src = './karo.png'; 
         break;
       
    }
    ctx.fillText(drawnCard.value,108,50);
    //ctx.strokeText(drawnCard.suit,100,100)  
    console.log(img.src)        
    img.onload = () => {  
              ctx.drawImage(img, 62, 62);
    };
    

});
