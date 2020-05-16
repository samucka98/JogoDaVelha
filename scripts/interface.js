document.addEventListener('DOMContentLoaded', () => {

  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })
});

function handleClick(event) {
  const position = event.target.id;
  handleMove(position);
}