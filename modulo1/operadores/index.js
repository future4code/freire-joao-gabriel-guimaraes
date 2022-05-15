/* Exercício 1*/
let idadeUsuario = prompt("Qual a sua idade?")
let idadeAmigo = prompt("Qual a idade do seu melhor amigo(a)?")

let idade1 = Number(idadeUsuario)
let idade2 = Number(idadeAmigo)
let idade = idade1 > idade2 
console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idade)
console.log("A diferença de idade entre vocês é:", idade1-idade2)

/* Exercício 2*/

let numeroPar = prompt("Insira um número par:")
let numeroPar1 = Number(numeroPar)
console.log("O resto da divisão é:", numeroPar1%2)

/*Todo número par, quando dividido por 2, o resto da sua divisão sempre vai dar 0, diferentemente com os
números ímpares, que sempre da 1*/

// Exercício 3

let idadeUsuario1 = prompt("Qual a sua idade?")
let idade3 = Number(idadeUsuario1)
console.log("Sua idade em meses é:", idade3*12)
console.log("Sua idade em dias é:", idade3*12*30)
console.log("Sua idade em horas é:", idade3*12*30*24)

// Exercício 4

let num1 = prompt("Digite um número:")
let num2 = prompt("Digite outro número:")

let num11 = Number(num1)
let num22 = Number(num2)

console.log("O primeiro numero é maior que segundo?", num11 > num22)
console.log("O primeiro numero é igual ao segundo?", num11 === num22) 
console.log("O primeiro numero é divisível pelo segundo?", num11%num22===0)
console.log("O segundo numero é divisível pelo primeiro?", num22%num11===0) 