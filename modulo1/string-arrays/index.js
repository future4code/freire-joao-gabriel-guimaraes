// Exercício 1

let nome = prompt ("Qual o seu nome?")
let email = prompt ("    Qual o seu email?    ")
email.trim()
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

// Exercício 2

let comidas = ["hamburguer", "pizza", "sorvete", "frango", "pipoca"]
console.log(comidas)
console.log(`Essas são minhas comidas favoritas:
Hamburguer
Pizza
Sorvete
Frango
Pipoca`)

let pergunta = prompt ("Qual a sua comida favorita?")
comidas[1] = pergunta
console.log(comidas)

// Exercício 3

const listaDeTarefas = []

let tarefa1 = prompt ("Digite uma tarefa: ")
let tarefa2 = prompt("Digite outra tarefa: ")
let tarefa3 = prompt("Digite mais uma tarefa: ")

listaDeTarefas[0] = tarefa1
listaDeTarefas[1] = tarefa2
listaDeTarefas[2] = tarefa3

console.log("Suas tarefas são: ", listaDeTarefas)

let tarefasRealizadas = prompt ("digite o índice da tarefa já realiza: ")


listaDeTarefas.splice(tarefasRealizadas,1)

console.log(listaDeTarefas)



