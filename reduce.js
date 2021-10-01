const people = [
    { id: 5, name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
    { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
    { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
    { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
    { id: 9, name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
    { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
]

const createOrIncrmentAgeFrequency = (acc, { age }) => {
    acc[age] = acc[age] + 1 || 1
    return acc
}

const agesFrequency = people.reduce(createOrIncrmentAgeFrequency, {} );

console.log(agesFrequency)