// 1a) const palavra: string = 1 -> da erro pois não pode atribuir tipo number em em um tipo string.

// 1b) 

// 1c)

type pessoa = {
    name: string,
    idade: number,
    corFavorita: cores
}
enum cores {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
}
const pessoa1: pessoa = {
    name: 'joao',
    idade: 23,
    corFavorita: cores.AZUL
}
const pessoa2: pessoa = {
    name: 'juau',
    idade: 23,
    corFavorita: cores.VERDE
}
const pessoa3: pessoa = {
    name: 'aloha',
    idade: 23,
    corFavorita: cores.VERMELHO
}

console.log(pessoa1, pessoa2, pessoa3)