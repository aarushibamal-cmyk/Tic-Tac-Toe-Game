let randomNumber = Math.round((Math.random() * 100) + 1);

const submit = document.querySelector('#submitGuess');
const input = document.querySelector('#guessField');
const previousGuess = document.querySelector('#previousGuesses');
const attempts = document.querySelector('#attemptsLeft');
const result = document.querySelector('#resultMessage');
const startOver = document.querySelector(".result-section");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

const newGameBtn = document.createElement('button');
newGameBtn.textContent = 'New Game';
newGameBtn.classList.add('button');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (!playGame) return;
    const guess = parseInt(input.value);
    validateGuess(guess);
});

newGameBtn.addEventListener('click', function () {
    randomNumber = Math.round((Math.random() * 100) + 1);
    prevGuess = [];
    numGuess = 1;
    previousGuess.innerHTML = '';
    result.innerHTML = '';
    attempts.innerHTML = '10';
    input.removeAttribute('disabled');
    startOver.removeChild(newGameBtn);
    playGame = true;
});

function validateGuess(guess) {
    if (!guess || isNaN(guess)) {
        printMessage("Enter a valid number!");
        return;
    }
    if (guess > 100 || guess < 1) {
        printMessage("Enter a number between 1 and 100!");
        return;
    }
    displayGuess(guess);
    if (numGuess > 10) {
        printMessage(`Game Over. The number was ${randomNumber}`);
        endGame();
    } else {
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        printMessage(`You Win! The number was ${randomNumber}`);
        endGame();
    } else if (guess < randomNumber) {
        printMessage('Too Low!');
    } else {
        printMessage('Too High!');
    }
}

function displayGuess(guess) {
    input.value = '';
    prevGuess.push(guess);
    previousGuess.innerHTML += ` ${guess}`;
    numGuess++;
    attempts.innerHTML = `${11 - numGuess}`;
}

function printMessage(message) {
    result.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    input.value = '';
    input.setAttribute('disabled', '');
    startOver.appendChild(newGameBtn); // append first, then it's in the DOM
    playGame = false;
}