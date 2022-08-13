const pessoass: pessoas[] = [
    { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
    { nome: "Maria", salário: 1500, setor: "vendas", presencial: false },
    { nome: "Salete", salário: 2200, setor: "financeiro", presencial: true },
    { nome: "João", salário: 2800, setor: "marketing", presencial: false },
    { nome: "Josué", salário: 5500, setor: "financeiro", presencial: true },
    { nome: "Natalia", salário: 4700, setor: "vendas", presencial: true },
    { nome: "Paola", salário: 3500, setor: "marketing", presencial: true }
]

enum SETORES {
    MARKETING = 'marketing',
    VENDAS = 'vendas',
    FINANCEIRO = 'financeiro'

}

type pessoas = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

const filtrarPessoas = (array: pessoas[]): pessoas[] => {
    const arrayFiltrado: pessoas[] = array.filter((pessoa) => {
        return pessoa.setor === 'marketing' && pessoa.presencial
    })
    return arrayFiltrado
}
console.log(filtrarPessoas(pessoass))