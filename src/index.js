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
const dialog = document.querySelector('dialog');

const startButton = document.querySelector('.start');
const handlestartButtonClick = () => {
  randomizeBoard([computerPlayer]);
  displayGameboards([realPlayer, computerPlayer]);
  startButton.disabled = true;
  startButton.style.cursor = 'default';
  randomizeButton.disabled = true;
  randomizeButton.style.cursor = 'default';
};
startButton.addEventListener('click', handlestartButtonClick);
const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', () => {
  dialog.close();
  document.querySelector('dialog').style.display = 'none';
  realPlayer.gameboard.resetBoard();
  computerPlayer.gameboard.resetBoard();
  randomizeBoard([realPlayer]);
  startButton.disabled = false;
  startButton.style.cursor = 'pointer';
  randomizeButton.disabled = false;
  randomizeButton.style.cursor = 'pointer';
  displayGameboards([realPlayer, computerPlayer]);
});
