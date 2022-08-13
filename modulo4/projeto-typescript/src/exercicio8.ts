function calculaIdade(dataNasc: any, dataemissao: any) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const anoNascParts = dataNasc.split('/');
    const diaNasc = anoNascParts[0];
    const mesNasc = anoNascParts[1];
    const anoNasc = anoNascParts[2];
    const anoemissaoParts = dataemissao.split('/');
    const diaEmi = anoemissaoParts[0];
    const mesEmi = anoemissaoParts[1];
    const anoEmi = anoemissaoParts[2];
    let tempoDeCarteira = anoAtual - anoEmi;
    let idade = anoAtual - anoNasc;
    let mesAtual = dataAtual.getMonth() + 1;
    if (mesAtual < mesNasc) {
        idade--;
    }
    else {
        if (mesAtual == mesNasc) {
            if (new Date().getDate() < diaNasc) {
                idade--;
            }
        }
    }
    if (mesAtual < mesEmi) {
        tempoDeCarteira--;
    }
    else {
        if (mesAtual == mesEmi) {
            if (new Date().getDate() < diaEmi) {
                tempoDeCarteira--;
            }
        }
    }


    if (idade < 18) {
        return 'Tem que ser maior de idade para tirar carteira!!'
    }
    if ((idade <= 20 && tempoDeCarteira >= 5) || (idade > 20 && idade <= 50 && tempoDeCarteira >= 10) || (idade > 50 && tempoDeCarteira >= 15)) {
        return 'Precisa de renovação!'
    }
    else {
        return 'Não precisa de renovar!'
    }
}

console.log(calculaIdade('24/04/2003', '07/11/2018'));

