const squares = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
const statesWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let gameOver = false;

const symbols = ['o', 'x'];

function handleMove(position) {

  if (!gameOver) {
    if (squares[position] === '') {
      squares[position] = symbols[playerTime];

      gameOver = isWin();

      if (gameOver) {
        setTimeout(() => {
          alert(`O jogador ${symbols[playerTime]} venceu!`);
        }, 10);
      }

      updateStage(squares[position], position);

      if (!gameOver) {
        playerTime = (playerTime == 0) ? 1 : 0;
      }
    }
  }
}

function isWin() {
  for (let i = 0; i < statesWin.length; i++) {
    let pos = statesWin[i];

    let pos1 = pos[0];
    let pos2 = pos[1];
    let pos3 = pos[2];

    if (squares[pos1] == squares[pos2] && squares[pos1] == squares[pos3] && squares[pos1] !== '') {
      return true;
    }
  }

  return false;
}

function resetGame() {
  playerTime = 0;
  gameOver = false;

  for (let i = 0; i < squares.length; i++) {
    squares[i] = '';
    clearStage(squares[i], i);
  }
}