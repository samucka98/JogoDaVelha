document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })

  const btnReset = document.getElementById("reset");
  btnReset.addEventListener('click', newGame);
});

function handleClick(event) {
  const position = event.target.id;

  handleMove(position);
}

function updateStage(square, position) {
  document.getElementById(`${position}`).innerHTML = `<div class="${square}"></div>`;
}

function clearStage(square, position) {
  document.getElementById(`${position}`).innerHTML = '';
}

function newGame() {
  resetGame();
}