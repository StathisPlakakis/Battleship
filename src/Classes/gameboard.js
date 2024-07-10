import Ship from './ship';

class Gameboard {
  constructor() {
    this.board = [
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
    ];
  }

  pickRandomStartingPoint(lengthOfShip, direction) {
    let randomiseIsDone = false;
    while (!randomiseIsDone) {
      //we check if the cell that contains the starting point of the ship is empty and inside the boundaries of our board
      const row = Math.floor(Math.random() * 10);
      const column = Math.floor(Math.random() * 10);
      let successfulLoopIterration = false;
      if (direction === 'vertical') {
        for (let i = 0; i < lengthOfShip; i++) {
          if (
            row + i > 9 ||
            this.board[row + i][column].length !== 0 //this checks if all the cells, that are going to contain our ship, are valid
          ) {
            successfulLoopIterration = false;
            break;
          } else {
            successfulLoopIterration = true;
          }
        }
        if (successfulLoopIterration) {
          randomiseIsDone = true;
          return [row, column];
        }
      } else {
        for (let i = 0; i < lengthOfShip; i++) {
          if (
            column + i > 9 ||
            this.board[row][column + i].length !== 0 //this checks if all the cells, that are going to contain our ship, are valid
          ) {
            successfulLoopIterration = false;
            break;
          } else {
            successfulLoopIterration = true;
          }
        }
        if (successfulLoopIterration) {
          randomiseIsDone = true;
          return [row, column];
        }
      }
    }
  }

  randomizeShipsPosition(array) {
    for (let ship = 0; ship < array.length; ship++) {
      const newShip = new Ship(array[ship]);
      const directions = ['horizontal', 'vertical'];
      const randomDirection = Math.floor(Math.random() * 2);
      const direction = directions[randomDirection];
      const startingPoint = this.pickRandomStartingPoint(
        array[ship],
        direction
      );
      const row = startingPoint[0];
      const column = startingPoint[1];
      this.board[row][column].push(newShip);
      if (direction === 'vertical') {
        for (let i = 0; i < array[ship]; i++) {
          this.board[row + i][column].push(ship);
        }
      } else {
        for (let i = 0; i < array[ship]; i++) {
          this.board[row][column + i].push(ship);
        }
      }
    }
  }

  
}

export default Gameboard;
