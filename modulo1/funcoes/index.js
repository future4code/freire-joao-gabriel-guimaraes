//Exercício 1

function sobreMim() {

    console.log("Olá, eu sou o João, tenho 23 anos e gosto de ir para a academia")
}
sobreMim()

function sobreMim1(nome, idade, cidade, prof){

nome = "João"
idade = 23
cidade = "Brasília"
prof = "Estudante Labenu"

    return `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${prof}`
}
console.log(sobreMim1())

//Exercício 2-a

function soma (num1, num2){
     num1 = prompt("Escreva um número")
     num2 = prompt("Escreva outro número")

     let num11 = Number(num1)
     let num22 = Number(num2)
    
    return num11+num22
}
console.log("A soma dos dois números é:", soma())

// Exercício 2-b
function maiorOuIgual (n1, n2){
    n1 = prompt("Escreva um número")
    n2 = prompt("Escreva outro número")

    let n11 = Number(n1)
    let n22 = Number(n2)
   
   return n11>=n22
}
console.log("O primeiro número é maior ou igual ao segundo?", maiorOuIgual())

// Exercício 2-c

function parOuNao (no){
    no = prompt("Escreva um número")

    let no1 = Number(no)
   
   
   return no1%2 == 0
}
console.log("É par ou não?", parOuNao())

// Exercício 2-d

function frase(string){
    string = prompt("Escreva uma frase:")
    
 return string
}
const resposta = frase()
console.log(resposta.length)
console.log(resposta.toUpperCase())

// Exercício 3

let usu = prompt ("Digite um número")
let usu1 = prompt ("Digite outro número")
function soma1 (x1, x2){
    x11 = Number(x1)
    x22 = Number(x2)
    return x11 + x22
}
function subtracao (x1, x2){
    return x1 - x2
}
function mult (x1, x2){
    return x1*x2
}
function divisao (x1, x2){
    return x1/x2
}
console.log("Números inseridos:", usu, "e", usu1)
console.log("Soma:", soma1(usu, usu1))
console.log("Diferença:", subtracao(usu, usu1))
console.log("Multiplicação:", mult(usu, usu1))
console.log("Divisão:", divisao(usu, usu1))
