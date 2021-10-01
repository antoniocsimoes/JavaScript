/**
 * O objeto que contém as quantidades de ocorrências dos status, como demonstrado no comentário multi-linha abaixo
 * 
 * Quantidades de ocorrências: pending: 2, cancelled: 1, snipped: 2
 */

const orders = [
    { username: 'f_gazi', status: 'pending', price: 63.97 },
    { username: 'heitordp', status: 'cancelled', price: 79 },
    { username: 'a_campos', status: 'shipped', price: 97.63 },
    { username: 'rafaq', status: 'pending', price: 67 },
    { username: '_rick', status: 'shipped', price: 73.65 }
]

const getStatusCount = orders => orders.reduce((acc, {status}) => ({
    ...acc,
    [status]: (acc[status] || 0) + 1
}), {})

console.log(getStatusCount(orders));
