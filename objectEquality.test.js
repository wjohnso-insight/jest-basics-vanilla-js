const {
    objectEquality,
    nullObject,
    undefinedObject,
    truthyObject
} = require('./objectEquality')


test('should be equal to', () => {
    const stub = {
        num : 1
    }
    expect(objectEquality()).toEqual(stub);
})

test('should be null', () => {
    expect(nullObject()).toBeNull();
})

test('should be undefined', () => {
    expect(undefinedObject()).toBeUndefined();
})

test('should be truthy', () => {
    const obj = truthyObject();
    expect(obj.name).toBeTruthy(); //* Equivalent to `if(obj.name){}`
})

test('should be falsy', () => {
    const obj = truthyObject();
    expect(obj.notAProp).toBeFalsy();
})