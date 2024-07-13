import Gameboard from './gameboard.js';

test('Gameboard Class Initialization', () => {
  const testCases = [
    {
      received: '',
      expected: [
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
      ],
    },
  ];
  testCases.forEach((testCase) => {
    expect(new Gameboard().board).toEqual(testCase.expected);
  });
});

test('Random Placement of ships', () => {
  const testCases = [
    {
      receivedNumberOfShips: [1], //the number of elements in the array indicates the total number of ships,while the exact number in each index indicates the size of the respected ship

      expextedCompositionOfActiveSquares: { 0: 1 }, //active squares are the squares, where ships have been placed and each square has the index value of the ship that represents
    },
    {
      receivedNumberOfShips: [3, 4],
      expextedCompositionOfActiveSquares: { 0: 3, 1: 4 },
    },
    {
      receivedNumberOfShips: [4, 2, 3, 2],
      expextedCompositionOfActiveSquares: { 0: 4, 1: 2, 2: 3, 3: 2 },
    },
    {
      receivedNumberOfShips: [2, 3, 3, 5, 4, 1],
      expextedCompositionOfActiveSquares: {
        0: 2,
        1: 3,
        2: 3,
        3: 5,
        4: 4,
        5: 1,
      },
    },
  ];
  testCases.forEach((testCase) => {
    const newBoard = new Gameboard();
    newBoard.randomizeShipsPosition(testCase.receivedNumberOfShips); // this is the method we are trying to test!This method, randomizes the position of the ships we want and overall changes the result of this.board
    const result = {};
    for (let i = 0; i < newBoard.board.length; i++) {
      for (let j = 0; j < newBoard.board[i].length; j++) {
        const specificCell = newBoard.board[i][j];
        //We itterate through all the cells of the board! If the cell is not empty, we take the value of the cell (which represents a part of SPECIFIC ship) and we increment the times we have seen the ship
        if (specificCell.length !== 0 && specificCell[0] !== null) {
          //we are trying to avoid catching the object of Ship that is located in the first cell
          if (result[specificCell[specificCell.length - 1]] === undefined) {
            result[specificCell[specificCell.length - 1]] = 1;
          } else {
            result[specificCell[specificCell.length - 1]] += 1;
          }
        }
      }
    }
    expect(result).toEqual(testCase.expextedCompositionOfActiveSquares);
  });
});

test('receiveAttack method', () => {
  const testCases = [
    {
      receivedArray: [2, 3, 3, 5, 4, 1],
      receivedCell: [4, 2],
    },
    {
      receivedArray: [2, 3, 3, 3, 4, 1],
      receivedCell: [4, 1],
    },
    {
      receivedArray: [1, 3, 3, 5, 4, 1],
      receivedCell: [6, 5],
    },
    {
      receivedArray: [4, 3, 3, 2, 4, 2],
      receivedCell: [1, 1],
    },
  ];
  testCases.forEach((testCase) => {
    const newBoard = new Gameboard();
    newBoard.randomizeShipsPosition(testCase.receivedArray);
    const x_axis = testCase.receivedCell[0];
    const y_axis = testCase.receivedCell[1];
    if (newBoard.board[x_axis][y_axis].length !== 0) {
      newBoard.receiveAttack(testCase.receivedCell);
      expect(newBoard.board[x_axis][y_axis][0]).toBe('O');
    } else {
      newBoard.receiveAttack(testCase.receivedCell);
      expect(newBoard.board[x_axis][y_axis][0]).toBe('X');
    }
  });
});

test('Game is over', () => {
  const testCases = [
    {
      receivedArray: [4, 3, 3, 2, 4, 2],
      receivedLoop: false,
    },
    {
      receivedArray: [4, 3, 3, 2, 4, 2],
      receivedLoop: true,
    },
  ];
  testCases.forEach((testCase) => {
    const newBoard = new Gameboard();
    newBoard.randomizeShipsPosition(testCase.receivedArray);
    if (testCase.receivedLoop === true) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          newBoard.receiveAttack([i, j]);
        }
      }
    }
    expect(newBoard.gameIsOver()).toBe(testCase.receivedLoop);
  });
});
