const users: clientes[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type clientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const endividados = (array: clientes[]): clientes[] => {
    const mapeamento = array.filter((array) => {
        let total = array.debitos.reduce((total, numero) => total + numero, 0)
        array.saldoTotal = array.saldoTotal - total
        array.debitos = []
        return array.saldoTotal < 0
    })
    return mapeamento
}
console.log(endividados(users))