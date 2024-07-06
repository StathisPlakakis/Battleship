import Ship from './ship.js';

test('Ship Class initialization', () => {
  const testCases = [
    {
      received: 2,
      expectedSize: 2,
      expectedTotalHits: 0,
      expectedtoBeSunk: false
      ,
    },
  ];
  testCases.forEach((testCase) => {
    expect(new Ship(testCase.received).size).toBe(testCase.expectedSize);
    expect(new Ship(testCase.received).totalHits).toBe(testCase.expectedTotalHits);
    expect(new Ship(testCase.received).isSunk).toBe(testCase.expectedtoBeSunk);
  });
});
