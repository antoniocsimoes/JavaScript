/**
 * Crie uma função chama 'convertToHex', que recebe o nome de uma cor por
 * parâmetro. Exemplo: 'red';
 * Escolha 5 cores que serão convertidas do nome da cor para o seu 
 * equivalente hexadecimal (pode ser qualquer tom);
 * Verifique se a cor passada por parâmetro é algum hex escolhido. Se for,
 * retorne a frase 'O hexadecimal para a cor <COR> é <HEXADECIMAL>;
 * Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
 * a mensagem 'Não temos o equivalente hexadecimal para <COR>';
 * Exiba o hexadecimal de 8 cores diferentes usando a função criada acima.
 */

const convertToHex = color => {
    const colors = {
        red: '#A31419',
        green: '#10A337',
        blue: '#4C91F0',
        yellow: '#F0EA6F',
        purple: '#8132A3'
    }
    return colors[color]
        ? `O hexadecimal para a cor ${color} é ${colors[color]}`
        : `Não temos o equivalente hexadecimal para ${color}`
}

const colors = [
    'blue',
    'black',
    'red',
    'green',
    'pink',
    'yellow',
    'purple',
    'brown'
]

const logColorMessage = color => console.log(convertToHex(color));
colors.forEach(logColorMessage);

