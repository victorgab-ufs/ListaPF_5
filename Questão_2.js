//Q2. Programa para encontrar o último elemento de uma lista passada. 


const nomes = ['Ana','Bia','Marcela','Carlos','Maria']

const ultimoElemento = (lista) => lista[lista.length-1]
const penultimoElemento = (lista) => lista[lista.length-2]

const ultimoElementoNomes = ultimoElemento(nomes)
const penultimoElementoNomes = penultimoElemento(nomes)

console.log(ultimoElementoNomes)
console.log(penultimoElementoNomes)