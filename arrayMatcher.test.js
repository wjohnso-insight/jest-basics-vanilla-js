const { arr } = require('./arrayMatchers')

test('should contain', () =>{
    expect(arr).toContain("thing_1");
})