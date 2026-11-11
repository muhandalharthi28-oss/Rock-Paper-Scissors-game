const choices = ['Rock', 'Paper', 'Scissors'];
const choiceButtons = document.querySelectorAll('.choices button');
const score = document.getElementById('score');
const result = document.getElementById('result');
const playerScore = { player: 0, computer: 0 };
const winningScore = 5;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
  if (playerScore.player === winningScore || playerScore.computer === winningScore) {
    return;
  }

  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    result.textContent = `Draw! Both chose ${playerChoice}.`;
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    playerScore.player += 1;
    result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    playerScore.computer += 1;
    result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }

  score.textContent = `You ${playerScore.player} — ${playerScore.computer} Computer`;

  if (playerScore.player === winningScore || playerScore.computer === winningScore) {
    const winner = playerScore.player === winningScore ? 'You win the game!' : 'The computer wins the game!';
    result.textContent += ` ${winner}`;
    choiceButtons.forEach((button) => {
      button.disabled = true;
    });
  }
}

choiceButtons.forEach((button) => {
  button.addEventListener('click', () => playRound(button.id));
});
