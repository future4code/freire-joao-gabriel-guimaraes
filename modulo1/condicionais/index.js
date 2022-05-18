// Exercícios de interpretação de código

// 1a) testa se o número escolhido é par ou não.
// b) Números pares
// c) Números impares

// 2a) para falar o valor da fruta escolhida
// 2b) O preço da fruta Maçã é R$ 2,25
// 2c) O preço da fruta Pêra é R$ 5.5
//     O preço da fruta é R$ 5

// 3a) Esta transformando a a string em number, 
//     já que sempre que o usuário escreve vem como string
// 3b) Esse número passou no teste. -10 > não imprimiria nada.
// 3c) Sim, pois a variável foi definida dentro da função e não sera impressa

// Exercício 1

const idade = Number(prompt ("Qual a sua idade?"))

    if (idade >= 18){
        console.log("Você pode dirigir.")
    }
    else {
        console.log("Você não pode dirigir.")
    }

// Exercício 2

const turno = prompt ("Qual turno você estuda? digite M (matutino), V (Vespertino) ou N (Noturno).").toUpperCase()

if(turno === "M"){
    console.log("Bom dia!!")
}
else if(turno === "V"){
    console.log("Boa tarde!!")
}
else if (turno === "N"){
    console.log("Boa noite!!")
}

// Exercício 3

const turno1 = prompt ("Qual turno você estuda? digite M (matutino), V (Vespertino) ou N (Noturno).").toUpperCase()

switch (turno1) {
        case "M":
            console.log("Bom dia!!")
             break;
        case "V":
            console.log("Boa tarde!!")
             break;
        case "N":
            console.log("Boa noite!!")
        break;
        default:
            console.log("Opção não encontrada! Por favor, digite M, V ou N")
             break;



}

// Exercício 4

const genero = prompt ("Digite o gênero do filme escolhido:").toLowerCase()
const ingresso = Number(prompt ("Digite o valor do ingresso:"))

if (genero === "fantasia" && ingresso < 15){
    console.log("Bom filme!")

}
else{
    console.log("Escolha outro filme :(")
}

// Exercício 1 do desafio

const genero1 = prompt ("Digite o gênero do filme escolhido:").toLowerCase()
const ingresso1 = Number(prompt ("Digite o valor do ingresso:"))

if (genero1 === "fantasia" && ingresso1 < 15){
    
    const lanche = prompt ("Qual lanche você vai comprar?")
    console.log("Bom filme!")
    console.log("Aproveite o(a) seu(sua)", lanche)
}
else{
    console.log("Escolha outro filme :(")
}

// Exercício 2 do desafio

const nome = prompt ("Digite seu nome completo:")
let tipoDeJogo = prompt("Qual tipo de jogo você vai assistir: IN para internacional e DO para doméstico").toUpperCase()
let etapaDoJogo = prompt ("Qual etapa do jogo? digite SF para semi-final, DT para decisão de terceiro lugar e FI para final").toUpperCase()
let categoria = Number (prompt("Qual a categoria? digite de 1 a 4"))
let quantidadeDeIngresso = Number (prompt("Quantos ingressos você vai comprar?"))
let valorDoIngresso
let valorTotal
if(tipoDeJogo === "IN"){
    tipoDeJogo = "internacional"
}
    else{
    tipoDeJogo = "Doméstico"
}

if(etapaDoJogo === "SF"){
    etapaDoJogo = "semi-final"}
    else if (etapaDoJogo === "DT"){
        etapaDoJogo = "decisão de terceiro lugar"
    }
        else{
        etapaDoJogo = "final"
    }

console.log ("---Dados da compra---")
console.log (`Nome do cliente: ${nome} 
Tipo do jogo: ${tipoDeJogo}
Etapa do jogo: ${etapaDoJogo}
Categoria: ${categoria}
Quantidade de Ingressos: ${quantidadeDeIngresso} ingresso(s)

--- Valores --- `)
// -------------INTERNACIONAL -----------------

//---------------------- semi-final---------------

if(tipoDeJogo === "internacional" && etapaDoJogo === "semi-final" && categoria === 1){
    valorDoIngresso = 5412
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: U$ ${valorDoIngresso}
Valor total: U$ ${valorTotal}`)

}
if(tipoDeJogo === "internacional" && etapaDoJogo === "semi-final" && categoria === 2){
    valorDoIngresso = 3608
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: U$ ${valorDoIngresso}
Valor total: U$ ${valorTotal}`)

}
if(tipoDeJogo === "internacional" && etapaDoJogo === "semi-final" && categoria === 3){
    valorDoIngresso = 2255
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: U$ ${valorDoIngresso}
Valor total: U$ ${valorTotal}`)

}
if(tipoDeJogo === "internacional" && etapaDoJogo === "semi-final" && categoria === 4){
    valorDoIngresso = 902
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: U$ ${valorDoIngresso}
Valor total: U$ ${valorTotal}`)

}
//--------------- 3 lugar ----------------

if(tipoDeJogo === "internacional" && etapaDoJogo === "decisão de terceiro lugar" && categoria === 1){
    valorDoIngresso = 2706
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: U$ ${valorDoIngresso}
Valor total: U$ ${valorTotal}`)

}if(tipoDeJogo === "internacional" && etapaDoJogo === "decisão de terceiro lugar" && categoria === 2){
    valorDoIngresso = 1804
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: U$ ${valorDoIngresso}
Valor total: U$ ${valorTotal}`)

}if(tipoDeJogo === "internacional" && etapaDoJogo === "decisão de terceiro lugar" && categoria === 3){
    valorDoIngresso = 1353
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: U$ ${valorDoIngresso}
Valor total: U$ ${valorTotal}`)

}if(tipoDeJogo === "internacional" && etapaDoJogo === "decisão de terceiro lugar" && categoria === 4){
    valorDoIngresso = 697
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: U$ ${valorDoIngresso}
Valor total: U$ ${valorTotal}`)

}
// ---------------- final ----------------

if(tipoDeJogo === "internacional" && etapaDoJogo === "final" && categoria === 1){
    valorDoIngresso = 8118
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: U$ ${valorDoIngresso}
Valor total: U$ ${valorTotal}`)

}if(tipoDeJogo === "internacional" && etapaDoJogo === "final" && categoria === 2){
    valorDoIngresso = 5412
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: U$ ${valorDoIngresso}
Valor total: U$ ${valorTotal}`)

}if(tipoDeJogo === "internacional" && etapaDoJogo === "final" && categoria === 3){
    valorDoIngresso = 3608
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: U$ ${valorDoIngresso}
Valor total: U$ ${valorTotal}`)

}if(tipoDeJogo === "internacional" && etapaDoJogo === "final" && categoria === 4){
    valorDoIngresso = 1353
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: U$ ${valorDoIngresso}
Valor total: U$ ${valorTotal}`)

}

//-------------- DOMÉSTICO ---------------------
//---------------------- semi-final---------------

if(tipoDeJogo === "Doméstico" && etapaDoJogo === "semi-final" && categoria === 1){
    valorDoIngresso = 1320
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: R$ ${valorDoIngresso}
Valor total: R$ ${valorTotal}`)

}
if(tipoDeJogo === "Doméstico" && etapaDoJogo === "semi-final" && categoria === 2){
    valorDoIngresso = 880
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: R$ ${valorDoIngresso}
Valor total: R$ ${valorTotal}`)

}
if(tipoDeJogo === "Doméstico" && etapaDoJogo === "semi-final" && categoria === 3){
    valorDoIngresso = 550
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: R$ ${valorDoIngresso}
Valor total: R$ ${valorTotal}`)

}
if(tipoDeJogo === "Doméstico" && etapaDoJogo === "semi-final" && categoria === 4){
    valorDoIngresso = 220
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: R$ ${valorDoIngresso}
Valor total: R$ ${valorTotal}`)

}
//--------------- 3 lugar ----------------

if(tipoDeJogo === "Doméstico" && etapaDoJogo === "decisão de terceiro lugar" && categoria === 1){
    valorDoIngresso = 660
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: R$ ${valorDoIngresso}
Valor total: R$ ${valorTotal}`)

}if(tipoDeJogo === "Doméstico" && etapaDoJogo === "decisão de terceiro lugar" && categoria === 2){
    valorDoIngresso = 440
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: R$ ${valorDoIngresso}
Valor total: R$ ${valorTotal}`)

}if(tipoDeJogo === "Doméstico" && etapaDoJogo === "decisão de terceiro lugar" && categoria === 3){
    valorDoIngresso = 330
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: R$ ${valorDoIngresso}
Valor total: R$ ${valorTotal}`)

}if(tipoDeJogo === "Doméstico" && etapaDoJogo === "decisão de terceiro lugar" && categoria === 4){
    valorDoIngresso = 170
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: R$ ${valorDoIngresso}
Valor total: R$ ${valorTotal}`)

}
// ---------------- final ----------------

if(tipoDeJogo === "Doméstico" && etapaDoJogo === "final" && categoria === 1){
    valorDoIngresso = 1980
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: R$ ${valorDoIngresso}
Valor total: R$ ${valorTotal}`)

}if(tipoDeJogo === "Doméstico" && etapaDoJogo === "final" && categoria === 2){
    valorDoIngresso = 1320
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: R$ ${valorDoIngresso}
Valor total: R$ ${valorTotal}`)

}if(tipoDeJogo === "Doméstico" && etapaDoJogo === "final" && categoria === 3){
    valorDoIngresso = 880
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: R$ ${valorDoIngresso}
Valor total: R$ ${valorTotal}`)

}if(tipoDeJogo === "Doméstico" && etapaDoJogo === "final" && categoria === 4){
    valorDoIngresso = 330
    valorTotal = valorDoIngresso*quantidadeDeIngresso
    console.log(`Valor do ingresso: R$ ${valorDoIngresso}
Valor total: R$ ${valorTotal}`)

}



