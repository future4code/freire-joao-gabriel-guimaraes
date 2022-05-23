// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const numero = []
    let i = array.length-1
    while ( i >= 0){
          numero.push(array[i])
    	    i--
    	}
    	return numero
}
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array = array.sort((function(a, b){
        return a - b
    }))
    
  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = array.filter((array) =>{
        if (array%2 === 0)
        return true
    })
    return pares
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = array.filter((array) =>{
        if (array%2 === 0)
        return true
    })
    let quadrado = pares.map((array) =>{
        return array*array
    })
    return quadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    maior = 0
    for(i = 0; i < array.length; i++){
        if(array[i]> maior){
            maior = array[i]
        }
    }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 > num2){
           const maior = () => {if(num1%num2 === 0){return true}
            else{return false}}


        const objeto = {
            maiorNumero: num1,
            maiorDivisivelPorMenor: maior(),
            diferenca: num1-num2
        }
        return objeto
    }
    else {const maior = () => {if(num2%num1 === 0){return true}
    else{return false}}


const objeto = {
    maiorNumero: num2,
    maiorDivisivelPorMenor: maior(),
    diferenca: num2-num1
}
return objeto}

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    array = []
    for(let i = 0; i< n*2; i++){
        if(i%2 === 0 ){
            array.push(i)
        }
    }
   return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
    return "Equilátero"}
    else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return "Escaleno"}
        else {
            return "Isósceles"
        }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array = array.sort((function(a, b){
        return a - b
    }))
    array2 = []
    array2.push(array[array.length-2], array[1])
    return array2
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
   
 filme1 = filme.atores.toString()
 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme1.replaceAll(",", ", ")}.`
 
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    novaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const permitidos = pessoas.filter((nome) => {
        if (nome.idade > 14 && nome.idade < 60 && nome.altura > 1.5)
        return true
    })
    return permitidos
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const nPermitidos = pessoas.filter((nome) => {
        if (nome.idade <= 14 || nome.idade >= 60 || nome.altura <= 1.5)
        return true
    })
    return nPermitidos
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    return contas.map((cliente) => {
        cliente.compras.map((compra) => {
            cliente.saldoTotal = cliente.saldoTotal - compra
        })
        cliente.compras = []

        return cliente
    })
    

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(a, b){
        if(a.nome < b.nome){
            return -1
        }
        if(a.nome > b.nome){
            return 1;
        }
        return 0
    })
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort(function(a, b){
        if(a.dataDaConsulta.getTime() < b.dataDaConsulta.getTime()){
            return -1
        }
        if(a.dataDaConsulta.getTime() > b.dataDaConsulta.getTime()){
            return 1;
        }
        return 0
    })
    return consultas
}