

const words = [
    'paralelepípedo',
    'ovo',
    'carteira',
    'livro',
    'teclado',
    'pluridimensionalidade',
    'smartphone',
    'limão',
    'saxofone',
    'controle',
    'aplicação',
    'serenidade',
    'front-end',
    'revista',
    'interdisciplinarmente',
    'monitor',
    'feijão',
    'papel',
    'criança',
    'luz',
    'caneta',
    'disruptivo'
]

/**
 * Método random sempre retorna um número decimal de 0 a 1, incluindo o 0 mais nunca o 1
 */

const sort = Math.random();
console.log(sort)

// Faz o sortei entre 0 e 2,999999, nunca o 3
const sort2 = Math.random() * 3;
console.log(sort2)

// Arredendo o número para baixo Ex: 1.9 -> retorna 1
const sort3 = Math.floor(Math.random() * 3)
console.log(sort3)

// (max - min + 1)
const sort4 = Math.floor(Math.random() * (3 - 0 + 1)) + 0
console.log(sort4)

const getRandomIntegerInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntegerInclusive(3, 7))

const getRandomWord = () => words[getRandomIntegerInclusive(0, words.length -1)]
console.log(getRandomWord())
