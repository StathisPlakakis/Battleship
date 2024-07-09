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

  randomizeShipsPosition(array) {
    for (let ship = 0; ship < array.length; ship++) {
      const directions = ['horizontal', 'vertical'];
      const randomDirection = Math.floor(Math.random() * 2);
      const direction = directions[randomDirection];
      if (direction === 'horizontal') {
        let randomiseIsDone = false;
        while (!randomiseIsDone) {
          //we check if the cell that contains the starting point of the ship is empty and inside the boundaries of our board
          const x_axis = Math.floor(Math.random() * 10);
          const y_axis = Math.floor(Math.random() * 10);
          const sizeOfShip = array[ship];
          let successfulLoopIterration = false;
          for (let i = 0; i < sizeOfShip; i++) {
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
            for (let i = 0; i < sizeOfShip; i++) {
              this.board[x_axis + i][y_axis] = ship;
            }
            randomiseIsDone = true;
          }
        }
      }
      if (direction === 'vertical') {
        let randomiseIsDone = false;
        while (!randomiseIsDone) {
          //we check if the cell that contains the starting point of the ship is empty and inside the boundaries of our board
          const x_axis = Math.floor(Math.random() * 10);
          const y_axis = Math.floor(Math.random() * 10);
          const sizeOfShip = array[ship];
          let successfulLoopIterration = false;
          for (let i = 0; i < sizeOfShip; i++) {
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
            for (let i = 0; i < sizeOfShip; i++) {
              this.board[x_axis][y_axis - i] = ship;
            }
            randomiseIsDone = true;
          }
        }
      }
    }
  }
}

export default Gameboard;
