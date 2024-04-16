let secretNumber = Math.floor(Math.random() * 20) + 1,
    score = 20,
    highscore = 0;

const message = document.querySelector('.message'),
      scoreDisplay = document.querySelector('.score'),
      highscoreDisplay = document.querySelector('.highscore'),
      guessInput = document.querySelector('.guess'),
      numberDisplay = document.querySelector('.number');

const displayMessage = msg => {
  message.textContent = msg;
}

const changeBackgroundColor = color => {
  document.body.style.backgroundColor = color;
}

const checkGuess = () => {
  const guess = Number(guessInput.value);
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    changeBackgroundColor('#60b347');
    numberDisplay.textContent = secretNumber;
    if (score > highscore) highscore = score;
    highscoreDisplay.textContent = highscore;
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreDisplay.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreDisplay.textContent = 0;
    }
  }
}

document.querySelector('.check').addEventListener('click', checkGuess);

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreDisplay.textContent = score;
  guessInput.value = '';
  numberDisplay.textContent = '?';
  changeBackgroundColor('#222');
});