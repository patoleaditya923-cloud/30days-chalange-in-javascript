let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {

    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attemptText = document.getElementById("attempts");

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        message.innerHTML = "⚠️ Enter a number between 1 and 100";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.innerHTML = `🎉 Correct! The number was ${randomNumber}`;
    }
    else if (guess < randomNumber) {
        message.innerHTML = "📉 Too Low!";
    }
    else {
        message.innerHTML = "📈 Too High!";
    }

    attemptText.innerHTML = `Attempts: ${attempts}`;
}

function restartGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guessInput").value = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("attempts").innerHTML = "Attempts: 0";
}