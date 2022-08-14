// Pré-história - 100000 AC até 4001 AC
// idade antiga - 4000 AC até 477 DC
// idade media - 476 DC até 1452 DC
// idade moderna - 1453 DC até 1788 DC
// idade contemporânea 1789 DC até HOJE
enum idades {
    PREHISTORIA = 'Pre-História',
    IDADEANTIGA = 'Idade antiga',
    IDADEMEDIA = 'Idade média',
    IDADEMODERNA = 'Idade moderna',
    IDADECONTEMPORANEA = 'Idade contemporânea',
}
function idadeHistorica(ano: number , tempo?: string | undefined) : string{
    const frase: string = 'A idade histórica da data mencionada é:'
    if (ano <= 100000 && ano >= 4001 && tempo === 'AC' )
    { return `${frase} ${idades.PREHISTORIA}`}
    if (ano <= 4000 && ano >= 477 && tempo ===  'AC'  ||  ano < 476 && (tempo === 'AC' || tempo === 'DC' || tempo === undefined) )
    { return `${frase} ${idades.IDADEANTIGA}`}
    if (ano <= 1452 && ano >= 476 &&( tempo === 'DC' ||  tempo === undefined) )
    { return `${frase} ${idades.IDADEMEDIA}`}
    if (ano <= 1788 && ano >= 1453 && (tempo === 'DC' || tempo === undefined))
    { return `${frase} ${idades.IDADEMODERNA}`}
    if (ano <= 2022 && ano >= 1789 && (tempo === 'DC' || tempo === undefined))
    { return `${frase} ${idades.IDADECONTEMPORANEA}`}
    if(tempo !== 'DC' && tempo !== "AC"){
        return 'Erro, data não encontrada'
    }
    return 'error'
}

console.log(idadeHistorica(15000, 'CD'))