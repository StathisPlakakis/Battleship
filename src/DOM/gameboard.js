import Player from '../Classes/player';

function displayGameboards() {
  const players = [new Player(true), new Player(false)];
  for (let i = 0; i < 2; i++) {
    const table = document.createElement('table');

    const playerBoard = players[i].gameboard.board;
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
            //In the first column we pass thnumerically the rows
            const tableHeading = document.createElement('th');
            tableHeading.textContent = i;
            tableRow.appendChild(tableHeading);
          } else {
            const tableData = document.createElement('td');
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
        lastRow.appendChild(tableData);
      }
    }
    table.appendChild(lastRow);

    if (i === 0) {
      document.querySelector('.real').appendChild(table);
    } else {
      document.querySelector('.computer').appendChild(table);
    }
  }
}

export default displayGameboards;
