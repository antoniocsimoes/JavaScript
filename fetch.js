/**
 * Fetch - faz uma requisição (request) http e traz dados(response)
 */

const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/25`

    fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            console.table(pokemon);
    })
}

fetchPokemon()


fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => console.log('Response', response)) //sucesso porém tem que verificar o status
    .then(response => {
        console.log('Response', response)
        return response.json()
    })
    .then(users => console.table(users))
    .catch(error => console.log(error)) //error, porém só quando for erro de conexão e não de url