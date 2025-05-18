// The use of the variables isAlive and hasBlackjack helps control the flow of the game logically. They act like "flags" to indicate the current state of the game, allowing the code to make decisions about whether the player can continue or not
let cards = [];
let sum = 0;
let hasBlackjack = false;  // indicates whether the player has a blackjack (sum of 21)
let isAlive = false; // indicates whether the player is still in the game or has lost (busted)
let message = "";
let messageEl = document.getElementById("message_el");
let sumEl = document.getElementById("sum_el");
let cardEl = document.getElementById("card_el");
let playerEl = document.getElementById('player_el');
let player = {
    name: 'Abood',
    chips: 140
};
playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10) return 10;
    else if(randomNumber === 1) return 11;
    else return randomNumber;
}
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame(){
    sumEl.textContent =  "Sum: " + sum;
    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
    if(sum <= 20){
        message = "Do you want to draw a new card? 😊";
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackjack = true;
    }else{
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
}
function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}