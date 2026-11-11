const Rock = document.getElementById('Rock');
const Paper = document.getElementById('Paper');
const Scissors = document.getElementById('Scissors');

const result = document.getElementById('result');

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return 'Rock';
  } else if (computerChoice === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(e) {
  const playerChoice = e.currentTarget.id;
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    result.textContent = `Draw! Both chose ${playerChoice}.`;
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}

Rock.addEventListener('click', playRound)
Paper.addEventListener('click', playRound)
Scissors.addEventListener('click', playRound)
