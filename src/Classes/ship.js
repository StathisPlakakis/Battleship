class Ship {
  constructor(size) {
    this.size = size;
    this.totalHits = 0;
    this.isSunk = false;
  }

  hit() {
    this.totalHits += 1;
    this.isSunk = this.totalHits >= this.size ?  true : false;
  }

  isSunked() {
    return this.isSunk;
  }
}

export default Ship;
