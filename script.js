'use strict';

const secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secertNumber);
//Event Handler for check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Implement game logic
  //When the user enter a not valid number
  if (!guess) {
    document.querySelector('.message').textContent = '🚨 Not a valid number';
  }
  //when the user enter the right guess (win the game)
  else if (guess === secertNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Number ';
    document.querySelector('.number').textContent = secertNumber;

    //Modifying the style in the winning case
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }
  //when guess too high
  else if (guess > secertNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too High ';
      //Update the score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess too low
  else if (guess < secertNumber) {
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

//Reset button handler
document.querySelector('.again').addEventListener('click', function () {
  //reset score and secret number
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';

  //reset the message and input field
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  //reset the style to default
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  secertNumber = Math.trunc(Math.random() * 20) + 1;
});
