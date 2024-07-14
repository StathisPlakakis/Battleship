import './style.css';
import Player from './Classes/player';
import displayGameboards from './DOM/gameboard';
import randomizeBoard from './DOM/randomizeBoard';
const realPlayer = new Player(true);
const computerPlayer = new Player(false);
const players = [realPlayer, computerPlayer];

randomizeBoard(players);
displayGameboards(players);

const randomizeButton = document.querySelector('.randomize');
const handlerandomizeButtonClick = () => {
  randomizeBoard(players);
  displayGameboards(players);
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
  startButton.disabled = true;
  startButton.style.cursor = 'default';
  randomizeButton.disabled = true;
  randomizeButton.style.cursor = 'default';
};
startButton.addEventListener('click', handlestartButtonClick);
