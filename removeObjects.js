// Como remover uma propriedade de vários objetos de forma imutável

const objs = [
    {a: 213, b: 965, c: 522},
    {c: 2333, a: 1321, b: 545},
    {b: 993, c: 345, a: 781}
]

const propToRemove = 'b';

const removeProp = (propToRemove, objs) => 
    objs.map(({ [propToRemove]: _, ...obj }) => obj);

console.log(removeProp(propToRemove, objs)[0] === objs[0]);
console.log(removeProp(propToRemove, objs));
