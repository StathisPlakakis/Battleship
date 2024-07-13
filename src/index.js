import './style.css';
import displayGameboards from './DOM/gameboard';
import randomizeBoard from './DOM/randomizeBoard';

displayGameboards();

const randomizeButton = document.querySelector('.randomize');
const handlerandomizeButtonClick = () => {
  randomizeBoard();
};
randomizeButton.addEventListener('click', handlerandomizeButtonClick);

const startButton = document.querySelector('.start');
const handlestartButtonClick = () => {
  randomizeButton.removeEventListener('click', handlerandomizeButtonClick);
  randomizeButton.style.backgroundColor = 'rgb(166, 167, 169)';
  startButton.style.backgroundColor = 'rgb(166, 167, 169)';
  randomizeButton.style.cursor = 'default';
  startButton.style.cursor = 'default';
};
startButton.addEventListener('click', handlestartButtonClick);
