const  objectEquality = () => (
    {
        num : 1
    }
)

const nullObject = () => null;
const undefinedObject = () => undefined;
const truthyObject = () => (
    { 
        name : 'Jon Doe' 
    }
)

module.exports = {
    objectEquality,
    nullObject,
    undefinedObject,
    truthyObject
}