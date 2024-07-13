import displayGameboards from './gameboard';

function randomizeBoard() {
  const playerBoard = document.querySelector('.real');
  const computerBoard = document.querySelector('.computer');
  playerBoard.removeChild(playerBoard.lastChild);
  computerBoard.removeChild(computerBoard.lastChild);
  displayGameboards();
}

export default randomizeBoard;
