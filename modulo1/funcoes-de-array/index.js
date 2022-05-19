// Exercício 1

//Vai ser impresso cada elemento, um por vez, seguido do seu index e depois o array completo

// Exercício 2

// Vai imprimir uma nova array com dos os nomes do array "usuario"



// Exercício 3

// vai imprimir todo o array apenas sem o 3º item do array --> nome: "Leticia Chijo", apelido: "Chijo"

// const nova = decima.map(() =>{

// })

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // Exercício 1a

 const nomeDog = pets.map((nomeDoDog) =>{
        return (nomeDoDog.nome)
 })
console.log(nomeDog)

// Exercício 1b

const salsicha = pets.filter((cachorro) =>{
    return cachorro.raca === "Salsicha"
})
console.log(salsicha)

// Exercício 1-c

const poodle = pets.filter((cachorro) =>{
    return cachorro.raca === "Poodle"
})

const nomeDoPoodle = poodle.map((cachorro) =>{
    return  (`Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorro.nome}!`)
})
console.log(nomeDoPoodle)

// Exercício 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// Exercício 2a
const nome = produtos.map((produto) =>{
    return produto.nome
})
console.log(nome)

// Exercício 2b
const nomePreco = produtos.map((produto, index, array) => {
    let desconto = produto.preco*0.95
    
    return ({nome:produto.nome, preço: desconto.toFixed(2)})
    
})
console.log(nomePreco)


// Exercício 2c
const bebidas = produtos.filter((produto) => {
        return produto.categoria === "Bebidas"
})
console.log(bebidas)
// Exercício 2d
const nomeYpe = produtos.filter((produto) => {
    
    return produto.nome.includes("Ypê")
})
console.log(nomeYpe)

// Exercício 2e
const nomeYpe1 = nomeYpe.map((produto) => {
    
    return (`Compre ${produto.nome} por R$${produto.preco}`)
})
console.log(nomeYpe1)

// Exercício DESAFIO

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 // Exercício 1-a

 const nome1 = pokemons.map((pokemon) => {
        return pokemon.nome
 })
console.log(nome1.sort())

// Exercício 1-b

const tipo1 = pokemons.map((pokemon) =>{
    return pokemon.tipo
})


const arraySemRepeticao = [...new Set(tipo1)]
console.log(arraySemRepeticao)





