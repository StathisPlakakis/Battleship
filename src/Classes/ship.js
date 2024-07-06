class Ship {
  constructor(size) {
    this.size = size;
    this.totalHits = 0;
    this.isSunk = false;
  }

  hit() {
    this.totalHits += 1
  }
}

export default Ship;
