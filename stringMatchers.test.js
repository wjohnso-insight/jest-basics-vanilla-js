const string = require('./stringMatchers')

test('should match', () => {
    expect(string).toMatch(/This is a string/)
})

test('should also match', () => {
    expect(string).toMatch(/This/) //* Remember that regex will return a match from just part of a string
})

test('should not match', () => {
    expect(string).not.toMatch(/some other string/)
})