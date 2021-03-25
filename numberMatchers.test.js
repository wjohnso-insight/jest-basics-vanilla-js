const {
    number
} = require('./numberMatchers')

test('should be greater than', () => {
    expect(number).toBeGreaterThan(13);
})

test('should be greater than or equal to', () => {
    expect(number).toBeGreaterThanOrEqual(14);
})

test('should be less than', () => {
    expect(number).toBeLessThan(15);
})
