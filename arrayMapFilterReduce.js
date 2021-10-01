const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
];

/*
Map, Filter - retornam uma nova array, não modificam a original
Reduce - retorna sempre um valor único
undefined é um valor falso;

*/

// Filter
console.log("Filter\n")
const precosFilto = precos.filter(preco => preco.includes("R$"));

console.log(precosFilto);

// Map
console.log("Map\n");
const precosNumeros = precosFilto.map(preco => Number(preco.replace("R$ ", ""))); //+(preco.replace("R$ ", ""))
console.log(precosNumeros);

// Reduce
console.log("Reduce\n");
const total = precosNumeros.reduce((acumulator, item) => acumulator + item);
console.log(total);