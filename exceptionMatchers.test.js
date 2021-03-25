const {
    throwErr
} = require('./exceptionMatchers')

test('should throw error', () =>{
    expect(() => throwErr.toThrow());
})