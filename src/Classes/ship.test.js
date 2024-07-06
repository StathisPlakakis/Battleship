test('Ship Class exists', () => {
  const testCases = [
    {
      received: '',
      expected: true
    }
  ]
  testCases.forEach(testCase => {
    expect(new Ship(testCase.received).exists).toBe(testCase.expected)
  })
})