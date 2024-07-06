import Ship from './ship.js';

test('Ship Class initialization', () => {
  const testCases = [
    {
      received: 2,
      expectedSize: 2,
      expectedTotalHits: 0,
      expectedtoBeSunk: false,
    },
    {
      received: 12,
      expectedSize: 12,
      expectedTotalHits: 0,
      expectedtoBeSunk: false,
    },
  ];
  testCases.forEach((testCase) => {
    expect(new Ship(testCase.received).size).toBe(testCase.expectedSize);
    expect(new Ship(testCase.received).totalHits).toBe(
      testCase.expectedTotalHits
    );
    expect(new Ship(testCase.received).isSunk).toBe(testCase.expectedtoBeSunk);
  });
});

test('Ship Class Method Hit', () => {
  const testCases = [
    {
      received: 2,
      expectedTotalHits: 2,
    },
    {
      received: 32,
      expectedTotalHits: 32,
    }
  ];
  testCases.forEach((testCase) => {
    const ship = new Ship();
    for (let i = 0; i < testCase.received; i++) {
      ship.hit();
    }
    expect(ship.totalHits).toBe(testCase.expectedTotalHits);
  });
});
