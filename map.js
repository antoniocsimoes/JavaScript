/**
 * MAP = é utilizado quando você quer criar um novo array com a mesma quantidade de itens do array original
 * mas com cada item transformado
 */

const humanExpressions = [
    { img: './img/drink.jpg', text: 'Estou com sede'},
    { img: './img/food.jpg', text: 'Estou com fome'},
    { img: './img/tired.jpg', text: 'Estou cansado'},
    { img: './img/hurt.jpg', text: 'Estou machucado'},
    { img: './img/happy.jpg', text: 'Estou feliz'},
    { img: './img/angry.jpg', text: 'Estou com raiva'},
    { img: './img/sad.jpg', text: 'Estou triste'},
    { img: './img/scared.jpg', text: 'Estou assustado'},
    { img: './img/outside.jpg', text: 'Quero ir lá fora'},
    { img: './img/home.jpg', text: 'Quero ir pra casa'},
    { img: './img/school.jpg', text: 'Quero ir para a escola'},
    { img: './img/grandma.jpg', text: 'Quero ver a vovó'}
];


const addExpressionBoxesIntoDOM = () => {
    const divs = humanExpressions.map(({ img, text }) => `
    <div class="expression-box>
        <img src="${img}" alt="${text}">
        <p class="info">${text}</p>
    </div>
    `).join(''); // retorna uma nova string com todos os itens do array concatenados e separados por vírgula/ string vazia
    console.log(divs);
}

addExpressionBoxesIntoDOM();