const sum = require('./sum')

test('add 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3); //* This test case checks for strict equality between the expectation and the assertion
})