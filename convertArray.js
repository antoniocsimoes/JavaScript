/*
- A invocação da função abaixo deve retornar este objeto:

{
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
}
*/

const createObj = (acc, [key, value]) => {
    acc[key] = value;
    return acc
}

const arrayToObj = arr => arr.reduce(createObj, {});

console.log(
    arrayToObj([
        ['prop1','value1'],
        ['prop2','value2'],
        ['prop3','value3']
    ])
)