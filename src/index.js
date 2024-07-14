import './style.css';
import Player from './Classes/player';
import displayGameboards from './DOM/gameboard';
import randomizeBoard from './DOM/randomizeBoard';
const realPlayer = new Player(true);
const computerPlayer = new Player(false);

randomizeBoard([realPlayer]);
displayGameboards([realPlayer, computerPlayer]);

const randomizeButton = document.querySelector('.randomize');
const handlerandomizeButtonClick = () => {
  randomizeBoard([realPlayer]);
  displayGameboards([realPlayer, computerPlayer]);
  randomizeButton.disabled = true;
  randomizeButton.style.cursor = 'default';

  setTimeout(() => {
    if (startButton.disabled !== true) {
      randomizeButton.style.cursor = 'pointer';
      randomizeButton.disabled = false;
    }
  }, 1500);
};
randomizeButton.addEventListener('click', handlerandomizeButtonClick);

const startButton = document.querySelector('.start');
const handlestartButtonClick = () => {
  randomizeBoard([computerPlayer]);
  displayGameboards([realPlayer, computerPlayer]);
  startButton.disabled = true;
  startButton.style.cursor = 'default';
  randomizeButton.disabled = true;
  randomizeButton.style.cursor = 'default';
  const cells = document.querySelectorAll('.computer td');
  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
      // cell.style.backgroundColor = 'blue';
      cell.style.cursor = 'crosshair';
    });
    cell.addEventListener('mouseleave', () => {
      // cell.style.backgroundColor = 'white';
    });
    cell.addEventListener('click', (e) => {
      const specificCell = e.target;
      const row = specificCell.getAttribute('row');
      const column = specificCell.getAttribute('column');
      computerPlayer.gameboard.receiveAttack([row, column]);
    });
  });
};
startButton.addEventListener('click', handlestartButtonClick);
