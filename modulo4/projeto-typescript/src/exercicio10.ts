function cpf(cpf: string): boolean {
    let replace: string = cpf.replace('.', '').replace('.', '').replace('-', '')
    let splits: string[] = replace.split('', 11)
    let digito10:number = 0
    let digito11:number = 0
    let mult:number = 10
    let mult1:number = 11
    for (let i = 0; i < 9; i++) {
        digito10 += (splits[i] as unknown as number) * mult
        mult--
    }

    let modulo:number = digito10 % 11
    let final = 11 - modulo
    if (final >= 10) { final = 0 }
    for (let i = 0; i < 10; i++) {
        digito11 += (splits[i] as unknown as number) * mult1
        mult1--
    }
    let modulo1:number = digito11 % 11
    let final1 = 11 - modulo1
    if (final1 >= 10) { final1 = 0 }
    if (final === Number(splits[9]) && final1 === Number(splits[10])) {
        return true
    }
    else {
        return false
    }
}
console.log(cpf('145.382.206-20'))