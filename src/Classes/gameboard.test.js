test('Gameboard Class Initialization', () => {
  const testCases = [
    {
      received: '',
      expected: true,
    },
  ];
  testCases.forEach((testCase) => {
    expect(new Gameboard(testCase.received).exists).toBe(testCase.expected);
  });
});
