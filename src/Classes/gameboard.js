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
      const x_axis = Math.floor(Math.random() * 10);
      const y_axis = Math.floor(Math.random() * 10);
      let successfulLoopIterration = false;
      if (direction === 'horizontal') {
        for (let i = 0; i < lengthOfShip; i++) {
          if (
            x_axis + i > 9 ||
            this.board[x_axis + i][y_axis].length !== 0 //this checks if all the cells, that are going to contain our ship, are valid
          ) {
            successfulLoopIterration = false;
            break;
          } else {
            successfulLoopIterration = true;
          }
        }
        if (successfulLoopIterration) {
          randomiseIsDone = true;
          return [x_axis, y_axis];
        }
      } else {
        for (let i = 0; i < lengthOfShip; i++) {
          if (
            y_axis - i < 0 ||
            this.board[x_axis][y_axis - i].length !== 0 //this checks if all the cells, that are going to contain our ship, are valid
          ) {
            successfulLoopIterration = false;
            break;
          } else {
            successfulLoopIterration = true;
          }
        }
        if (successfulLoopIterration) {
          randomiseIsDone = true;
          return [x_axis, y_axis];
        }
      }
    }
  }

  randomizeShipsPosition(array) {
    for (let ship = 0; ship < array.length; ship++) {
      const directions = ['horizontal', 'vertical'];
      const randomDirection = Math.floor(Math.random() * 2);
      const direction = directions[randomDirection];
      const startingPoint = this.pickRandomStartingPoint(
        array[ship],
        direction
      );
      const x_axis = startingPoint[0];
      const y_axis = startingPoint[1];
      if (direction === 'horizontal') {
        for (let i = 0; i < array[ship]; i++) {
          this.board[x_axis + i][y_axis].push(ship);
        }
      } else {
        for (let i = 0; i < array[ship]; i++) {
          this.board[x_axis][y_axis - i].push(ship);
        }
      }
    }
  }
}

export default Gameboard;
