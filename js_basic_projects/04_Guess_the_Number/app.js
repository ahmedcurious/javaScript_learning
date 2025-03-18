const inputText = document.querySelector("#guessField");
const buttonSubmit = document.querySelector("#subt");
const prevGuess = document.querySelector(".guesses");
const remGuess = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const resultDiv = document.querySelector(".resultParas");
const para = document.createElement("p");
const resetButton = document.createElement("button");
let randonNumber = Math.round(Math.random() * 100);

let prevGuessArray = [];
let numGuess = 0;
let numRemainingGuess = 10;
let playGame = true;

function resetGame() {
  resetButton.title = "Reset Game";
  resetButton.innerText = "Reset Game";
  resetButton.className = "reset_btn";
  resetButton.style.backgroundColor = "blue";
  resetButton.style.borderRadius = "16px";
  resetButton.style.padding = "8px 24px";
  resetButton.addEventListener("click", (e) => {
    e.preventDefault();
    randonNumber = Math.round(Math.random() * 100);
    numGuess = 0;
    numRemainingGuess = 10;
    playGame = true;
    prevGuessArray = [];
    inputText.disabled = false;
    buttonSubmit.disabled = false;
    const winMsg = resultDiv.querySelector(".win_msg");
    const loseMsg = resultDiv.querySelector(".lose_msg");
    if (winMsg) winMsg.remove();
    if (loseMsg) loseMsg.remove();
    para.style.backgroundColor = "";
    para.style.padding = "";
    para.style.borderRadius = "";
    para.style.boxShadow = "";
    prevGuess.parentElement.style.display = "block";
    remGuess.parentElement.style.display = "block";
    remGuess.textContent = numRemainingGuess;
    prevGuess.textContent = prevGuessArray[prevGuessArray.length - 1];
    resultDiv.querySelector(".reset_btn").remove();
    console.log(
      `numGuess = ${numGuess}, prevGuessArray = ${prevGuessArray}, playGame = ${playGame}`
    );
  });
  resultDiv.appendChild(resetButton);
}

function displayMessage(message) {
  para.textContent = message;
  resultDiv.append(para);
}

function clearMessage() {
  if (resultDiv.childElementCount > 3) {
    resultDiv.lastElementChild.remove();
  }
}

function gameOver() {
  para.textContent = `Game Over! Number was ${randonNumber}`;
  para.className = "lose_msg";
  para.style.backgroundColor = "red";
  para.style.padding = "16px";
  para.style.borderRadius = "8px";
  para.style.boxShadow = "8px";
  resultDiv.append(para);
  inputText.disabled = true;
  buttonSubmit.disabled = true;
  prevGuess.parentElement.style.display = "none";
  remGuess.parentElement.style.display = "none";
  lowOrHigh.innerHTML = "";
  resetGame();
}

function winGame() {
  para.textContent = "Congratulations! You've win this Game!";
  para.className = "win_msg";
  para.style.backgroundColor = "green";
  para.style.padding = "16px";
  para.style.borderRadius = "8px";
  para.style.boxShadow = "8px";
  resultDiv.append(para);
  inputText.disabled = true;
  buttonSubmit.disabled = true;
  prevGuess.parentElement.style.display = "none";
  remGuess.parentElement.style.display = "none";
  lowOrHigh.innerHTML = "";
  resetGame();
}

function validateGuess(guess) {
  if (guess === "" || isNaN(guess) || guess > 100 || guess < 1) {
    displayMessage("Please enter a valid number between 1 & 100");
    return;
  } else {
    displayGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess < randonNumber) {
    lowOrHigh.textContent = "Guessed value is Lower than Random Number";
  } else if (guess > randonNumber) {
    lowOrHigh.textContent = "Guessed value is Higher than Random Number";
  }
}

function displayGuess(guess) {
  if (playGame === false || numGuess >= 10 || numRemainingGuess === 0) {
    gameOver();
    return;
  }
  if (prevGuessArray.includes(guess)) {
    messageString = `You've already guessed the number ${guess}`;
    displayMessage(messageString);
    lowOrHigh.textContent = "";
  } else {
    if (guess === randonNumber) {
      winGame();
      playGame = false;
      numRemainingGuess -= 1;
      remGuess.textContent = numRemainingGuess;
      prevGuessArray.push(guess);
      prevGuess.innerHTML += `${prevGuessArray[prevGuessArray.length - 1]}, `;
      numGuess += 1;
      return;
    } else {
      numRemainingGuess -= 1;
      remGuess.textContent = numRemainingGuess;
      prevGuessArray.push(guess);
      prevGuess.innerHTML += `${prevGuessArray[prevGuessArray.length - 1]}, `;
      checkGuess(guess);
      numGuess += 1;
      clearMessage();
      console.log(
        `numGuess = ${numGuess}, prevGuessArray = ${prevGuessArray}, playGame = ${playGame}`
      );

      if (numGuess === 10) {
        playGame = false;
        if (guess === randonNumber) {
          winGame();
          console.log(
            `numGuess = ${numGuess}, prevGuessArray = ${prevGuessArray}, playGame = ${playGame}`
          );
          return;
        } else {
          gameOver();
          console.log(
            `numGuess = ${numGuess}, prevGuessArray = ${prevGuessArray}, playGame = ${playGame}`
          );
        }
      }
    }
  }
}

if (playGame) {
  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const guessedNumber = parseInt(inputText.value);
    validateGuess(guessedNumber);
    inputText.value = "";
  });
}
