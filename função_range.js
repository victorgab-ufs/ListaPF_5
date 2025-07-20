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

console.log(range(1, 10))
