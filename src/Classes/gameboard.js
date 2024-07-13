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
          //now we will deactivate adjacent cells to our ship for the vertical direction
          if (
            i + row - 1 >= 0 &&
            column - 1 >= 0 &&
            this.board[i + row - 1][column - 1].length === 0
          ) {
            this.board[i + row - 1][column - 1].push(null);
          }
          if (
            i === 0 &&
            i + row - 1 > 0 &&
            this.board[i + row - 1][column].length === 0
          ) {
            this.board[i + row - 1][column].push(null);
          }
          if (
            i + row - 1 >= 0 &&
            column + 1 < 10 &&
            this.board[i + row - 1][column + 1].length === 0
          ) {
            this.board[i + row - 1][column + 1].push(null);
          }
          if (column - 1 >= 0 && this.board[row][column - 1].length === 0) {
            this.board[i + row][column - 1].push(null);
          }
          if (column + 1 < 10 && this.board[row][column + 1].length === 0) {
            this.board[i + row][column + 1].push(null);
          }
          if (
            i + row + 1 < 10 &&
            column - 1 >= 0 &&
            this.board[i + row + 1][column - 1].length === 0
          ) {
            this.board[i + row + 1][column - 1].push(null);
          }
          if (
            i + row + 1 < 10 &&
            column + 1 < 10 &&
            this.board[i + row + 1][column + 1].length === 0
          ) {
            this.board[i + row + 1][column + 1].push(null);
          }
          if (
            i === array[ship] - 1 &&
            i + row + 1 < 10 &&
            this.board[i + row + 1][column].length === 0
          ) {
            this.board[i + row + 1][column].push(null);
          }
        }
      } else {
        //now we will deactivate adjacent cells to our ship for the horizontal direction

        for (let i = 0; i < array[ship]; i++) {
          this.board[row][column + i].push(ship);
          if (
            row - 1 >= 0 &&
            i + column - 1 >= 0 &&
            this.board[row - 1][i + column - 1].length === 0
          ) {
            this.board[row - 1][i + column - 1].push(null);
          }
          if (
            i === 0 &&
            i + column - 1 >= 0 &&
            this.board[row][i + column - 1].length === 0
          ) {
            this.board[row][i + column - 1].push(null);
          }
          if (
            row - 1 >= 0 &&
            i + column + 1 < 10 &&
            this.board[row - 1][i + column + 1].length === 0
          ) {
            this.board[row - 1][i + column + 1].push(null);
          }
          if (row - 1 >= 0 && this.board[row - 1][i + column].length === 0) {
            this.board[row - 1][i + column].push(null);
          }
          if (row + 1 < 10 && this.board[row + 1][i + column].length === 0) {
            this.board[row + 1][i + column].push(null);
          }
          if (
            row + 1 < 10 &&
            i + column - 1 >= 0 &&
            this.board[row + 1][i + column - 1].length === 0
          ) {
            this.board[row + 1][i + column - 1].push(null);
          }
          if (
            row + 1 < 10 &&
            i + column + 1 < 10 &&
            this.board[row + 1][i + column + 1].length === 0
          ) {
            this.board[row + 1][i + column + 1].push(null);
          }
          if (
            i === array[ship] - 1 &&
            i + column + 1 < 10 &&
            this.board[row][i + column + 1].length === 0
          ) {
            this.board[row][i + column + 1].push(null);
          }
        }
      }
    }
  }

  receiveAttack(coordinates) {
    const row = coordinates[0];
    const column = coordinates[1];
    const specificCell = this.board[row][column];

    //first we check if we hit a cell that is not empty (has a missed shot or represents a part of a ship)
    if (specificCell.length !== 0) {
      //we check if we hit a cell that represents a part of a ship that we have not hit again in the past
      if (specificCell[0] !== 'X' && specificCell[0] !== 'O') {
        specificCell.unshift('O');
        const specificShipNumber = specificCell[specificCell.length - 1];
        //we check if the specificCell is the starting point of a horizontal ship (the cell that contains the actual ship class aka the left most cell)
        let i = 1;
        let isTheMostLeft = false;
        while (!isTheMostLeft) {
          if (
            column - i < 0 ||
            this.board[row][column - i].length === 0 ||
            this.board[row][column - i][
              this.board[row][column - i].length - 1
            ] !== specificShipNumber
          ) {
            isTheMostLeft = true;
            //here we found the left most part of the ship (aka possible starting point) and we try to see if there is there the obj
            if (this.board[row][column - i + 1].length === 2) {
              //this cell has not been hit
              if (typeof this.board[row][column - i + 1][0] === 'object') {
                this.board[row][column - i + 1][0].hit();
                return;
              }
            } else if (this.board[row][column - i + 1].length === 3) {
              //this cell has  been hit
              if (typeof this.board[row][column - i + 1][1] === 'object') {
                this.board[row][column - i + 1][1].hit();
                return;
              }
            }
          } else {
            i += 1;
          }
        }
        //we check if the specificCell is the starting point of a vertical ship (the cell that contains the actual ship class aka the top most cell)
        let j = 1;
        let isTheMostTop = false;
        while (!isTheMostTop) {
          if (
            row - j < 0 ||
            this.board[row - j][column].length === 0 ||
            this.board[row - j][column][
              this.board[row - j][column].length - 1
            ] !== specificShipNumber
          ) {
            isTheMostTop = true;
            //here we found the top most part of the ship (aka possible starting point) and we try to see if there is there the obj
            if (this.board[row - j + 1][column].length === 2) {
              //this cell has not been hit
              if (typeof this.board[row - j + 1][column][0] === 'object') {
                this.board[row - j + 1][column][0].hit();
                return;
              }
            } else if (this.board[row - j + 1][column].length === 3) {
              //this cell has  been hit
              if (typeof this.board[row - j + 1][column][1] === 'object') {
                this.board[row - j + 1][column][1].hit();
                return;
              }
            }
          } else {
            j += 1;
          }
        }
      }
    } else {
      specificCell.unshift('X');
    }
  }

  gameIsOver() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (
          this.board[i][j].some(
            (element) => typeof element === 'object' && element.isSunk === false
          )
        ) {
          return false;
        }
      }
    }
    return true;
  }
}

export default Gameboard;
