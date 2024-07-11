import Gameboard from './gameboard';

class Player {
  constructor(isReal) {
    this.gameboard = new Gameboard();
    this.isReal = isReal;
  }
}

export default Player;
