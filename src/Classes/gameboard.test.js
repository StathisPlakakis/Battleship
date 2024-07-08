import Gameboard from './gameboard.js'

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
      ]
    },
  ];
  testCases.forEach((testCase) => {
    expect(new Gameboard(testCase.received).exists).toBe(testCase.expected);
  });
});
