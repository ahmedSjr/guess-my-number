'use strict';

const secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//display message function

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Event Handler for check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Implement game logic
  //When the user enter a not valid number
  if (!guess) {
    displayMessage('🚨 Not a valid number');
  }
  //when the user enter the right guess (win the game)
  else if (guess === secertNumber) {
    displayMessage('🏆 Correct Number ');
    document.querySelector('.number').textContent = secertNumber;

    //Modifying the style in the winning case
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secertNumber) {
    if (score > 1) {
      displayMessage(guess > secertNumber ? '📈 Too High ' : '📉 Too Low ');
      //Update the score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😢 You Lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Reset button handler
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  //reset score and secret number
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  //reset the message and input field
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  //reset the style to default
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  secertNumber = Math.trunc(Math.random() * 20) + 1;
});
