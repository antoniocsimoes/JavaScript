const getData = () => {
    return new Promise((resolve, reject) => {
        resolve('Dados aqui');
        //reject('Erro aqui');
    })
}

//exibe a promisse
console.log(getData());

//exibe o valor da promisse
getData()
    .then(value => console.log(value))
    .catch(error => console.log(error))