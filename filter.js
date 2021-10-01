/* 
Filter é uma função de ordem superior (Higher Order Function), que processa uma estrutura de dados em alguma ordem
para produzir uma nova estrutura de dados contendo extamanete os elementos da estrutura de dados original para os 
quais um determinado predicado retorna o valor booleano true.

Recebe uma função com argumento, executa essa função pra cada item de um array

Quando usar: baseado em uma condição, você quer obter um novo array com só alguns itens do array original

Aceita (item, index, array)
*/

/** PRIMEIRO EXEMPLO */
const randomNumbers = [36, 99, 37, 63];

const numbersGreaterThan37 = randomNumbers.filter((item) => item > 37); //se a condição for "true" ok

console.log(numbersGreaterThan37);

/* SEGUNDO EXEMPLO */
const tarantinoMoveis = [
    {name: 'Bastardos inglórios', release: 2009 },
    {name: 'Pulp Fiction', release: 1994 },
    {name: 'Kill Bill: Volume 2', release: 2004 },
    {name: 'Quatro Quartos', release: 1995 },
    {name: 'Sin City', release: 2005 },
    {name: 'Era uma vez em... Hollywood', release: 2019 },
    {name: 'Django Livre', release: 2012 },
    {name: 'Cães de Aluguel', release: 1992 },
    {name: 'Á Prova de Morte ', release: 2007 },
    {name: 'Kill Bill: Volume 1', release: 2003 }
];

const moviesBefore2000 = tarantinoMoveis.filter(({release}) => release < 2000);
console.log(moviesBefore2000);
console.table(moviesBefore2000);

/** TERCEIRO EXEMPLO */
const firstTravelerCities = [
    'Sydney',
    'Berlim',
    'Lisboa',
    'Sófia',
    'Praga',
    'Bali',
    'Florianópolis'
];

const secondTravelerCities = [
    'Praga',
    'Roma',
    'Chiang Mai',
    'Lisboa',
    'Zagreb'
];

const commonCities = firstTravelerCities.filter(city => secondTravelerCities.includes(city));

console.log(commonCities)

