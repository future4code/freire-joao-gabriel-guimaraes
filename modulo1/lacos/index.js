//  Exercícios escritos
//  1) O código está fazendo um loop e realizando uma soma. começando pelo 0
//  até que o valor de i chegue a 5 que é quando o loop para: 0 + 1 + 2 + 3 + 4 = 10
 
//  2) 19,21,23,25,27,30
 
//  3) Vai imprimir 4 linha, com 1,2,3 e 4 asteriscos cada, respectivamente.


//  Exercício 1

let animalDeEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))
let array11 = []
let nomeDoAnimal
if (animalDeEstimacao <= 0){
    console.log("Que pena! Você pode adotar um pet!")
}
    else {
        for(let i = 1; i <= animalDeEstimacao; i++ ){
            nomeDoAnimal = prompt("Qual o nome deles? Digite um por um")
            array11.push(nomeDoAnimal)
             } 
    console.log(array11)
         }

//  Exercício 2

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let numeros = 0
for (let i=0; i < array.length; i++){
    numeros = array[i]
    console.log(numeros)
}
console.log(`
`)

//  Exercício 2-b

for (let i=0; i < array.length; i++){
    numeros = array[i]
    console.log(numeros/10)
}

//  Exercício 2-c

let numerosPares = []
for (let i=0; i < array.length; i++){
    numeros = array[i]
    if(numeros%2 === 0){
        numerosPares.push(numeros)
    }    
} console.log(numerosPares)


//  Exercício 2-d


let numerosComIndex = []

for (let i=0; i < array.length; i++){
    
    numeros = array[i]
    numerosComIndex.push(`o numero de index ${i} é ${numeros}`)
    
    
    
} console.log(numerosComIndex)

//  Exercício 2-e
 
maior = 0
menor = 200
for (let i=0; i < array.length; i++){
    if (array[i]> maior){
        maior = array[i]
    }
    if (array[i]< menor){
        menor = array[i]
    }
}
console.log(`O maior número é ${maior} e o menor é ${menor}`)


// Exercício do desafio


const numeroParaAdivinhar = prompt("Escolha um número:")
let adivinhador
let tentativas = 0
while(adivinhador !== numeroParaAdivinhar){
    
    adivinhador =prompt("Escolha um número:")
        if (adivinhador > numeroParaAdivinhar){ 
            tentativas++
            console.log(`O número chutado foi: ${adivinhador}
Errrrrrrrou, é menor`)
    }
        else if( adivinhador < numeroParaAdivinhar){
            console.log(`O número chutado foi: ${adivinhador}
Errrrrrrrou, é maior`)
            tentativas++
        }
        else {
            tentativas++
            console.log(`Acertou!!!!`)

        }
            
}console.log(`O número de tentativas foi: ${tentativas-1}`)

const numeroParaAdivinhar1 = Math.floor((Math.random()*100)+1)
let adivinhador1
let tentativas1 = 0
while(adivinhador1 !== numeroParaAdivinhar1){
    
    adivinhador1 =Number(prompt("Escolha um número:"))
        if (adivinhador1 > numeroParaAdivinhar1){ 
            tentativas1++
            console.log(`O número chutado foi: ${adivinhador1}
Errrrrrrrou, é menor`)
    }
        else if( adivinhador1 < numeroParaAdivinhar1){
            console.log(`O número chutado foi: ${adivinhador1}
Errrrrrrrou, é maior`)
            tentativas1++
        }
        else {
            tentativas1++
            console.log(`Acertou!!!!`)

        }
            
}console.log(`O número de tentativas foi: ${tentativas1-1}`)