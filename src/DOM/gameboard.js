function displayGameboards(players) {
  const real = document.querySelector('.real');
  if (real.children.length === 2) {
    real.removeChild(real.lastChild);
  }
  const computer = document.querySelector('.computer');
  if (computer.children.length === 2) {
    computer.removeChild(computer.lastChild);
  }
  for (let a = 0; a < players.length; a++) {
    const table = document.createElement('table');
    const playerBoard = players[a].gameboard.board;
    for (let i = 0; i < playerBoard.length; i++) {
      const tableRow = document.createElement('tr');
      for (let j = 0; j < playerBoard[i].length + 1; j++) {
        if (i === 0 && j === 0) {
          //Skip the first cell
          const tableHeading = document.createElement('th');
          tableRow.appendChild(tableHeading);
          continue;
        }
        if (i === 0) {
          //In the first row we pass  alphabeticly the columns
          const tableHeading = document.createElement('th');
          const number = 64 + j;
          const char = String.fromCharCode(number);
          tableHeading.textContent = char;
          tableRow.appendChild(tableHeading);
        } else {
          if (j === 0) {
            //In the first column we pass numerically the rows
            const tableHeading = document.createElement('th');
            tableHeading.textContent = i;
            tableRow.appendChild(tableHeading);
          } else {
            const tableData = document.createElement('td');
            //now we will place the ships
            if (
              typeof playerBoard[i - 1][j - 1][
                playerBoard[i - 1][j - 1].length - 1
              ] === 'number'
            ) {
              tableData.style.backgroundColor = 'blue';
            }
            if (playerBoard[i - 1][j - 1][0] === 'X') {
              tableData.style.backgroundColor = 'red';
            }
            if (playerBoard[i - 1][j - 1][0] === 'O') {
              tableData.style.backgroundColor = 'green';
            }
            tableData.setAttribute('row', i - 1);
            tableData.setAttribute('column', j - 1);
            if (j === 1) {
              tableData.style.borderLeft = '1px solid blue';
            }
            if (j === 10) {
              tableData.style.borderRight = '1px solid blue';
            }
            if (i === 1) {
              tableData.style.borderTop = '1px solid blue';
            }
            if (!players[a].isReal && !players[a].gameboard.boardIsEmpty()) {
              tableData.addEventListener('mouseenter', () => {
                // cell.style.backgroundColor = 'blue';
                tableData.style.cursor = 'crosshair';
              });
              tableData.addEventListener('mouseleave', () => {
                // tableData.style.backgroundColor = 'white';
              });
              //Now we add the logic of the game
              tableData.addEventListener('click', (e) => {
                const specificCell = e.target;
                const row = specificCell.getAttribute('row');
                const column = specificCell.getAttribute('column');
                if (
                  players[a].gameboard.board[row][column][0] !== 'X' &&
                  players[a].gameboard.board[row][column][0] !== 'O'
                ) {
                  players[a].gameboard.receiveAttack([row, column]);
                  //Now the computer attacks
                  let rowForComAttack = Math.floor(Math.random() * 10);
                  let columnForComAttack = Math.floor(Math.random() * 10);
                  while (
                    players[0].gameboard.board[rowForComAttack][
                      columnForComAttack
                    ][0] === 'X' ||
                    players[0].gameboard.board[rowForComAttack][
                      columnForComAttack
                    ][0] === 'O'
                  ) {
                    rowForComAttack = Math.floor(Math.random() * 10);
                    columnForComAttack = Math.floor(Math.random() * 10);
                  }
                  players[0].gameboard.receiveAttack([
                    rowForComAttack,
                    columnForComAttack,
                  ]);
                  displayGameboards([players[0], players[1]]);
                }
              });
            }

            tableRow.appendChild(tableData);
          }
        }
      }
      table.appendChild(tableRow);
    }
    //we have to pass the last row with its content (heading and data)
    const lastRow = document.createElement('tr');
    for (let j = 0; j < playerBoard[playerBoard.length - 1].length + 1; j++) {
      if (j === 0) {
        const lastHeading = document.createElement('th');
        lastHeading.textContent = playerBoard.length;
        lastRow.appendChild(lastHeading);
      } else {
        const tableData = document.createElement('td');
        //now we will place the ships in  the last row
        if (
          typeof playerBoard[playerBoard.length - 1][j - 1][
            playerBoard[playerBoard.length - 1][j - 1].length - 1
          ] === 'number'
        ) {
          tableData.style.backgroundColor = 'blue';
        }
        if (playerBoard[playerBoard.length - 1][j - 1][0] === 'X') {
          tableData.style.backgroundColor = 'red';
        }
        if (playerBoard[playerBoard.length - 1][j - 1][0] === 'O') {
          tableData.style.backgroundColor = 'green';
        }
        tableData.setAttribute('row', playerBoard.length - 1);
        tableData.setAttribute('column', j - 1);
        if (j === 1) {
          tableData.style.borderLeft = '1px solid blue';
        }
        if (j === 10) {
          tableData.style.borderRight = '1px solid blue';
        }
        tableData.style.borderBottom = '1px solid blue';
        if (!players[a].isReal && !players[a].gameboard.boardIsEmpty()) {
          tableData.addEventListener('mouseenter', () => {
            // cell.style.backgroundColor = 'blue';
            tableData.style.cursor = 'crosshair';
          });
          tableData.addEventListener('mouseleave', () => {
            // tableData.style.backgroundColor = 'white';
          });
          tableData.addEventListener('click', (e) => {
            const specificCell = e.target;
            const row = specificCell.getAttribute('row');
            const column = specificCell.getAttribute('column');
            if (
              players[a].gameboard.board[row][column][0] !== 'X' &&
              players[a].gameboard.board[row][column][0] !== 'O'
            ) {
              players[a].gameboard.receiveAttack([row, column]);
              //Now the computer attacks
              let rowForComAttack = Math.floor(Math.random() * 10);
              let columnForComAttack = Math.floor(Math.random() * 10);
              while (
                players[0].gameboard.board[rowForComAttack][
                  columnForComAttack
                ][0] === 'X' ||
                players[0].gameboard.board[rowForComAttack][
                  columnForComAttack
                ][0] === 'O'
              ) {
                rowForComAttack = Math.floor(Math.random() * 10);
                columnForComAttack = Math.floor(Math.random() * 10);
              }
              players[0].gameboard.receiveAttack([
                rowForComAttack,
                columnForComAttack,
              ]);
              displayGameboards([players[0], players[1]]);
            }
          });
        }
        lastRow.appendChild(tableData);
      }
    }
    table.appendChild(lastRow);

    if (a === 0) {
      document.querySelector('.real').appendChild(table);
    } else {
      document.querySelector('.computer').appendChild(table);
    }
  }
}

export default displayGameboards;
