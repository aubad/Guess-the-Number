'use strict';
/*
document.querySelector('.score').textContent=15;
console.log(document.querySelector('.score').textContent);
document.querySelector('.highscore').textContent= 55;
document.querySelector('.guess').value = 13;
*/

let secretValue = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;
console.log('first time: ' + secretValue);

document.querySelector('.check').addEventListener('click', function () {
  let guessValue = Number(document.querySelector('.guess').value);
  let score = document.querySelector('.score').textContent;
  if (!guessValue) {
    console.log('No value entered');
  } else if (guessValue === secretValue) {
    document.querySelector('.message').textContent = "You're right.";
    document.querySelector('.score').textContent = Number(score) + 1;
    document.querySelector('.number').textContent = secretValue;
    document.querySelector('body').style.backgroundColor = 'green';
    let tempScore = Number(document.querySelector('.score').textContent);
    checkHighScore(tempScore);
    document.querySelector('.highscore').textContent = Number(highScore);
  } else if (guessValue > secretValue) {
    document.querySelector('.message').textContent = 'Too high.';
    document.querySelector('.score').textContent = Number(score) - 1;
  } else {
    document.querySelector('.message').textContent = 'Too low.';
    document.querySelector('.score').textContent = Number(score) - 1;
  }
});
0;
document.querySelector('.again').addEventListener('click', function () {
  let secretValue = Math.trunc(Math.random() * 20 + 1);
  console.log('when again is pressed ' + secretValue);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';

  document.querySelector('.message').textContent = 'Start Guessing.';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});

function checkHighScore(score) {
  if (!highScore || score > highScore) {
    highScore = score;
  }
}
