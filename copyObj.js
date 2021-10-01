/**
 * Copiando objeto
 */

const obj = {
    prop0: () => {},
    prop1: 'a',
    prop2: 'b',
    prop3: null,
    prop4: true,
    prop5: false,
    prop6: [9, { x:1, y: 2 }],
    prop7: 7,
    prop8: { a: 'x', b: 'y'},
}

console.log(obj);
console.log(typeof(obj))

/* Criando um string JSON*/
const objAsJSON = JSON.stringify(obj, null, 2)

console.log(objAsJSON)
console.log(typeof(objAsJSON))

/* Parseando de JSON para Object JavaScript */
/** Primeira maneira de clonar objeto javascript, porém ela é lenta 
 *  se tivesse métodos no objeto, ele não seria clonado
*/
const copyJSON = JSON.parse(objAsJSON)

console.log(copyJSON)
console.log(typeof(copyJSON))

/**
 * Outra maneira de clonar o objeto, usando spread operator
 * spread operator faz cópia raza, objetos alinhados não são copiados e sim referenciados
 */

const copyObj = {...obj}

console.log(copyObj)
console.log(typeof(copyObj))

/**
 * Verificando se os objetos são iguais, mesma referência
 */

obj.prop1 = 'x';
obj.prop8.a = 'valor modificado';

console.log(obj, copyObj)
console.log(obj.prop1 === copyObj.prop1)
console.log(obj.prop8 === copyObj.prop8)

const copyObj2 = {
    ...obj,
    prop6: [
        obj.prop6[0],
        { ...obj.prop6[1]}
    ],
    prop8: {
        ...obj.prop8
    }
}

console.log(obj, copyObj2)
console.log(obj.prop1 === copyObj2.prop1)
console.log(obj.prop6 === copyObj2.prop6)
console.log(obj.prop8 === copyObj2.prop8)