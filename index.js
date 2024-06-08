let player = {
    name: "Yvonne",
    chips: 145
}

let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false
let gameOver = false;
let message = ""

let startButtonEl = document.getElementById("start-btn");
let cardsButtonEl = document.getElementById("draw-btn")

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips; 

function GetRandomCard(){
    let randomNum = Math.floor(Math.random() * 13) + 1 // 1 - 13
    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

function StartGame() {
    if (gameOver === false && isAlive === false){
        isAlive = true;
        let firstCard = GetRandomCard()
        let secondCard = GetRandomCard()
        cards.push(firstCard);
        cards.push(secondCard);
        sum = firstCard + secondCard;
        RenderGame();
    }
}

function RenderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        gameOver = true;
    } else {
        message = "You're out of the game!"
        isAlive = false
        gameOver = true;
    }
    messageEl.textContent = message;
}

function DrawNewCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = GetRandomCard()
        sum += card
        cards.push(card)
        RenderGame()
    }
}

startButtonEl.addEventListener("click", StartGame);
cardsButtonEl.addEventListener("click", DrawNewCard);