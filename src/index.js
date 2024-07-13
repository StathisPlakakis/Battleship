import './style.css';
import displayGameboards from './DOM/gameboard';

displayGameboards();
const randomizeButton = document.querySelector('.randomize');
randomizeButton.addEventListener('click', () => {
  const playerBoard = document.querySelector('.real');
  const computerBoard = document.querySelector('.computer');
  playerBoard.removeChild(playerBoard.lastChild);
  computerBoard.removeChild(computerBoard.lastChild);
  displayGameboards();
});
