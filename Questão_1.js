//Q1. Reconsidere o exemplo sobre as compras de produtos apresentado na aula sobre registros. Seu programa deve ser capaz de: (a) Mostrar o carrinho de compras com o preço dos produtos em outra moeda, aplicando-se alguma taxa de câmbio (ex. 5.5 vezes), (b) Calcular o valor total gasto com a compra, (c) Calcular o valor total gasto aplicando-se algum desconto, (d) Calcular o valor total gasto com os produtos frágeis, (e) Calcular o valor total gasto com produtos que se iniciam com uma determinada letra (ex. letra 'C'), (f) Calcular o valor médio gasto por tipo de produto com a compra realizada. Para resolver adequadamente os problemas descritos, seu programa deve fazer uso da notação mais compacta de representação e acesso a dados vista neste tópico e utilizar as três operações sobre coleções de dados estudadas: map, filter e reduce.

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

// LETRA A

const cambio = (taxa) => (lista) => lista.map(elemento => elemento.preco*taxa)

const cambioDolar = cambio(1/7)

const carrinhoDolar = cambioDolar(carrinho)

console.log('A)')
console.log(carrinhoDolar)

// LETRA B

const soma = (valor, acc) => valor + acc

const somarCompras = (lista) => (lista.map(elemento => elemento.preco*elemento.qtde)).reduce(soma, 0)

const somarCarrinho = somarCompras(carrinho)

console.log('B)')
console.log(somarCarrinho)

// LETRA C

const desconto = (porcentagem) => somarCarrinho*((100-porcentagem)/100)
const desconto10 = desconto(10)

console.log('C)')
console.log(desconto10)


// LETRA D

const precoFrageis = (lista) => ((lista.filter(elemento => elemento.fragil === true)).map(elemento => elemento.qtde*elemento.preco)).reduce(soma, 0)

const precoFrageisCarrinho = precoFrageis(carrinho)

console.log('D)')
console.log(precoFrageisCarrinho)


// LETRA E

const produtosInicial = (inicial) => (lista) => lista.filter(elemento => elemento.nome[0] === inicial)

const inicialC = produtosInicial('C')

const carrinhoInicialC = inicialC(carrinho)

const precoInicial = (lista) => (lista.map(elemento => elemento.preco*elemento.qtde)).reduce(soma, 0)

const precoCarrinhoInicialC = precoInicial(carrinhoInicialC)

console.log('E)')
console.log(precoCarrinhoInicialC)



// LETRA F

const frageis = (lista) => lista.filter(elemento => elemento.fragil === true)
const resistentes = (lista) => lista.filter(elemento => elemento.fragil === false)

const frageisCarrinho = frageis(carrinho)
const resistentesCarrinho = resistentes(carrinho)

const mediaPreco = (lista) => (((lista.map(elemento => elemento.qtde*elemento.preco)).reduce(soma,0)))/(lista.map(elemento => elemento.qtde).reduce(soma, 0))

const mediaPrecoFrageisCarrinho = mediaPreco(frageisCarrinho)
const mediaPrecoResistentesCarrinho = mediaPreco(resistentesCarrinho)

console.log('F)')
console.log(mediaPrecoFrageisCarrinho)
console.log(mediaPrecoResistentesCarrinho)
