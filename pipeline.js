const add100 = num => num + 100;

const divByFive = num => num / 5;

const multiplyByThree = num => num * 3;

const multiplyFive = num => num * 5;

const addTen = num => num + 10;

// function combineOperations (initValue, arrOfFuncs) {
//     return arrOfFuncs.reduce(function (acc, func) {
//         return func(acc)
//     }, initValue)
// }

const combineOperations = (initValue, arrOfFuncs) => arrOfFuncs.reduce((acc, func) => func(acc), initValue)


console.log(combineOperations(0, [add100, divByFive, multiplyByThree]))
console.log(combineOperations(0, [divByFive, multiplyFive, addTen]))