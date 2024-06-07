let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true
let message = ""

let startButtonEl = document.getElementById("start-btn");
let cardsButtonEl = document.getElementById("draw-btn")

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function StartGame() {
    RenderGame();
}

function RenderGame() {
    cardsEl.textContent += " " + cards[0] + " " + cards[1];
    sumEl.textContent += " " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}

function DrawNewCard() {
    let newCard = 5;
    sum += newCard;
    RenderGame();
}

startButtonEl.addEventListener("click", StartGame);
cardsButtonEl.addEventListener("click", DrawNewCard);