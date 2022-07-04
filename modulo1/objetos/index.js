
 // Exercício 1 -a
 
 const pessoa = {
    nome: "João",
    apelidos: ["jaozin", "jao", "juaum"]
}



function objetoNome(pessoa){
        const novo = {
          ...pessoa
        }
    return console.log(`Eu sou ${novo.nome}, mas pode me chamar de: ${novo.apelidos}`)
}
objetoNome(pessoa)

// Exercício 1 -b
const pessoa2 = {
    ...pessoa,
    apelidos: ["juju", "jaojao", "jefferson"]
}

objetoNome(pessoa2)

// Exercício 2

const pessoa3 = {
        nome: "Jeniffer",
        idade: 23,
        profissao: "bartender"
}


const pessoa4 = {
    ...pessoa3,
    nome: "Luan",
    idade: 29,
    profissao: "Artista plástico"
}

function minhaFuncao (pessoa8) {
    const prof = {
        ...pessoa8
    }
    let tamanho1 = pessoa8.nome.length
    let tamanho2 = pessoa8.profissao.length
    const jao1 = prof.nome
    const jao = [prof.nome, tamanho1,prof.idade, prof.profissao, tamanho2]
   return console.log(jao)
}
minhaFuncao(pessoa3)

// Exercício 3

carrinho = []

const fruta1 = {
    nome: "Manga",
    disponibilidade: true
}
const fruta2 = {
    nome: "Melância",
    disponibilidade: true
}
const fruta3 = {
    nome: "Morango",
    disponibilidade: true
}

function frutinha (fruta1) {
    const frutas = {
        ...fruta1
    }
    carrinho.push(fruta1, fruta2, fruta3)
    return console.log(carrinho)
}
frutinha(fruta1)


























// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa1 = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false,
//   altura: false
// }

// console.log(minhaFuncao(pessoa1, "backender"))
// console.log(minhaFuncao(pessoa1, "altura"))