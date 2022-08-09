// Exercíco 1-a

// Utilizando o comando process.argv[], sendo que o parâmetro começa a partir do 2, porque os 0 é 'node' e o 1 é index.js

// Exercíco 1-b
'use strict';
const nome = process.argv[2];
const idade = process.argv[3];
const red   = '\u001b[31m';
const blue  = '\u001b[34m';
const reset = '\x1b[35m';
function isNumber(idade) {
  return !isNaN(parseFloat(idade)) && isFinite(idade);
}

if (nome && isNumber(idade)) {
  console.log(blue + ` Olá, ${nome}! Você tem ${idade} anos`);
}

else if (isNumber(idade)){
  console.log(red + 'Esperava 2 parâmetros só recebi um.')
}

if (isNumber(idade) === false) {
    console.log(reset + 'Espera-se um número como segundo parâmetro!')
}
// Exercício 1-c

let idadeFutura = Number(idade) + 7;
if (nome && isNumber(idade)) {
console.log( `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura} anos.`
)}

else if (isNumber(idade)){
  console.log(red + 'Esperava 2 parâmetros só recebi um.')
}

if (isNumber(idadeFutura) === false) {
  console.log(reset + 'Espera-se um número como segundo parâmetro!')
}