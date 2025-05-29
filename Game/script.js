let score = 0;
let isGameRunning = false;

function startGame() {
  isGameRunning = true;
  document.getElementById('result').textContent = "Game Started! Choose Rock, Paper, or Scissors.";
}

function stopGame() {
  isGameRunning = false;
  document.getElementById('result').textContent = "Game Stopped!";
}

function resetGame() {
  score = 0;
  isGameRunning = false;
  document.getElementById('score').textContent = "Score: 0";
  document.getElementById('result').textContent = "Game reset. Click 'Start Game' to play again.";
}

function play(userChoice) {
  if (!isGameRunning) {
    document.getElementById('result').textContent = "Please start the game first!";
    return;
  }

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';
  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}`;
    score++;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}`;
    score--;
  }

  document.getElementById('result').textContent = result;
  document.getElementById('score').textContent = "Score: " + score;
}
