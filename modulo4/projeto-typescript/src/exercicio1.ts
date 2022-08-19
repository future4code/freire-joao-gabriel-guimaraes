const retornaData = (nome: string, data: string): string => {
    let split: string[] = data.split('/', 3)
    return `Olá me chamo ${nome}, nasci dia ${split[0]} do mês ${split[1]} do ano de ${split[2]}`
}
console.log(retornaData('joao', '22/12/1988'))