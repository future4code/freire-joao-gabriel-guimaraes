
function fatorial(palavra: string): string {
    let tamanho: number = palavra.length
    let total: number = 1
    for (let i = tamanho; i > 0; i--) {
        total *= i
    }
    return `A quantidade de anagramas que a palavra ${palavra} possui é: ${total}.`
}
console.log(fatorial('mesa'))