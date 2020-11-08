'use strict';

/////////////// DOM selector////////////////////////
const btnCheck = document.querySelector('.check');
const displayMessage = document.querySelector('.message');

const displayNumber = document.querySelector('.number');

const body = document.querySelector('body');

const displayHighscore = document.querySelector('.highscore');

const displayScore = document.querySelector('.score');

/////////////// Number, Scores ////////////////////////////
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//////////////////////game start!///////////////////////////

function gameRule() {
  btnCheck.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);

    /// When there is no input
    if (!guess) {
      displayMessage.textContent = '👹 No number!';

      /// When play wins
    } else if (guess === secretNumber) {
      displayMessage.textContent = '🎉 Correct Number!';
      displayNumber.textContent = secretNumber;

      body.style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        displayHighscore.textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage.textContent =
          guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
        score--;
        displayScore.textContent = score;
      } else {
        displayMessage.textContent = '☠️ You lost the game!';
        displayScore.textContent = 0;
      }
    }
  });
}
//////////// Again btn ///////////////////////////////////
function resetGame() {
  document.querySelector('.again').addEventListener('click', function () {
    body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage.textContent = 'Start guessing...';
    displayScore.textContent = score;
    displayNumber.textContent = '?';
    document.querySelector('.guess').value = '';
  });
}

///////////////////////// Final ////////////////////////////
function init() {
  gameRule();
  resetGame();
}
init();
