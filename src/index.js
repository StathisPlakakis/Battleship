import './style.css';
import displayGameboards from './DOM/gameboard';
import randomizeBoard from './DOM/randomizeBoard';

displayGameboards();

const randomizeButton = document.querySelector('.randomize');
const handlerandomizeButtonClick = () => {
  randomizeButton.disabled = true;
  randomizeButton.style.cursor = 'default';
  randomizeBoard();
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
