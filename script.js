'use strict';

const secertNumber = Math.trunc(Math.random() * 20) + 1;

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
    document.querySelector('.message').textContent = '📈 Too High ';
  } else if (guess < secertNumber) {
    document.querySelector('.message').textContent = '📉 Too Low ';
  }
});
