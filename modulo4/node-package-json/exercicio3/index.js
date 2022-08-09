// Exercício 3
var fs = require('fs');
const listaDeCompra = [];
const novaTarefa = process.argv[2];
listaDeCompra.push(novaTarefa);
console.log("Tarefa adicionada com sucesso!");
console.log("tarefas:", listaDeCompra);
