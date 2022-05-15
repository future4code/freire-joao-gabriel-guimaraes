/*Exercício 1*/
const nome = prompt("Qual seu nome?")
let idade = prompt("Qual a sua idade?")
console.log(typeof nome, typeof idade)
console.log("Olá,", nome, "você tem", idade, "anos")

/* Antes de ter atribuído valores às variáveis, o código ficou dando erro,
assim que eu pedi para o usuário colocar seu nome e sua idade,
deu certo e os dois tipos de variáveis deu como STRING, o nome ja era para
ser string, mas a idade não, porém o computador entende que é uma string
pelo fato de eu ter usado o prompt, na hora que o usuário responde, a idade 
que era number passa a ser string.*/

/*Exercício 2*/

let pergunta = "Você tem mais de 18 anos?" 
const maioridade = "SIM"

console.log(pergunta, "-", maioridade)

pergunta = "Você gosta de cachorro?" 
const cachorro = "SIM"
console.log(pergunta, "-", cachorro)

pergunta = "Você vai sair hoje?" 
const sair = "NÃO"
console.log(pergunta, "-", sair)

/* Exercício 3*/

let a = prompt("digite um numero")
let b = prompt("digite um numero diferente do anterior")
let c = a
a = b
b = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 

