let firstCard = 10
let secondCard = 4
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
    cardsEl.textContent += " " + firstCard + " " + secondCard;
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
    console.log("Drawing a new card from the deck!");
}

startButtonEl.addEventListener("click", StartGame);
cardsButtonEl.addEventListener("click", DrawNewCard);