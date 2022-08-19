const estoque: prod[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]
type prod = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}

const arrumaPreco = (array: prod[]) => {
    const ajustaPreco = (preco: number): string => {
        const valorAjustado: string = preco.toFixed(2).replace('.', ',')
        return "R$ " + valorAjustado
    }
    const map = array.map((prod) => {
        prod.valorUnitario = ajustaPreco(prod.valorUnitario as number)
        return prod
    }).sort((a, b) => a.quantidade - b.quantidade)
    return map
}
console.log(arrumaPreco(estoque))