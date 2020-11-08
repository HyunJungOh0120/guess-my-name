'use strict';

/////////////// DOM selector////////////////////////
const btnCheck = document.querySelector('.check');
const displayMessage = document.querySelector('.message').textContent;

const displayNumber = document.querySelector('.number').textContent;

const bodyBackgroundColor = document.querySelector('body').style
  .backgroundColor;

const displayHighscore = document.querySelector('.highscore').textContent;

const displayScore = document.querySelector('.score').textContent;

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
      displayMessage = '👹 No number!';

      /// When play wins
    } else if (guess === secretNumber) {
      displayMessage = '🎉 Correct Number!';
      displayNumber = secretNumber;

      bodyBackgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        displayNumber = highscore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
        score--;
        displayScore = score;
      } else {
        displayMessage = '☠️ You lost the game!';
        displayScore = 0;
      }
    }
  });
}
//////////// Again btn ///////////////////////////////////
function resetGame() {
  document.querySelector('.again').addEventListener('click', function () {
    bodyBackgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage = 'Start guessing...';
    displayScore = score;
    displayNumber = '?';
    document.querySelector('.guess').value = '';
  });
}

///////////////////////// Final ////////////////////////////
function init() {
  gameRule();
  resetGame();
}
init();
