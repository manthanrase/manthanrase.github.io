'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No input yet';
  }

  // incorrect guess
  else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ';
      document.querySelector('.score').textContent = 0;
    }
  }

  // right guess
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You won the game';
    document.querySelector('.number').textContent = secretNumber;
    document.getElementById('image').style.display = 'none';
    document.querySelector('.darkbg').style.backgroundColor =
      // 'linear-gradient (to right, rgba(255, 0, 0, 0), rgba(36, 255, 13, 1), rgba(0, 0, 255, 0))';
      'linear-gradient (to right, black 0%, green 80%, black 0%)';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.getElementById('image').style.display = 'block';
});
