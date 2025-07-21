//Q5. Programa para somar todos os múltiplos de 3 e os múltiplos de 5, que são menores que 1000


const range = (start, end, step = 1) => {

const allNumbers = [start, end, step].every(Number.isFinite)

if (!allNumbers) {

    throw new TypeError('range() espera apenas números finitos como argumento.')

}

if (step <= 0){

    throw new Error('passo deve ser um número maior que zero.')
}

if (start > end){

    step = -step
}

const length = Math.floor(Math.abs((end - start) / step)) + 1

return Array.from(Array(length), (x, index) => start + index * step)

}

const lista = range(1, 1000)

const soma = (acc, valor) => acc + valor

const multiplos3e5 = (lista) => (lista.filter(elemento => elemento % 3 === 0 || elemento % 5 === 0)).reduce(soma, 0)

const somaMultiplosLista = multiplos3e5(lista)

console.log(somaMultiplosLista)