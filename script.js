'use strict';

const secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secertNumber);
//Event Handler for check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Implement game logic
  if (!guess) {
    document.querySelector('.message').textContent = '🚨 Not a valid number';
  } else if (guess === secertNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Number ';
  } else if (guess > secertNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too High ';
      //Update the score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secertNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too Low ';
      //Update the score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
