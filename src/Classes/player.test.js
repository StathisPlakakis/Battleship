import Player from './player';

test('Check Player class board', () => {
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
    expect(new Player().gameboard.board).toEqual(testCase.expected);
  });
});

test('Check if player is real or not', () => {
  const testCases = [
    {
      received: true,
      expected: true,
    },
    {
      received: false,
      expected: false,
    },
  ];
  testCases.forEach(testCase => {
    expect(new Player(testCase.received)).toBe(testCase.expected)
  })
});
