// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  altura = prompt ("Digite a altura")
  largura = prompt ("Digite a largura")
   console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  altura = prompt ("Digite o ano atual")
  largura = prompt ("Digite o ano em que você nasceu")
   console.log(altura-largura)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  let imc = peso / (altura * altura)
    return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    nome = prompt("Qual seu nome?")
    idade = prompt("Quantos anos você tem?")
    email = prompt ("Qual seu email?")
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  // implemente sua lógica aqui
  cor1 = prompt("digite uma cor")
  cor2 = prompt("digite uma cor")
  cor3 = prompt ("digite uma cor")
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  if(string1.length == string2.length){
    return true
  }
  else {
    return false
  }

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiro = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = primeiro
  return array
} 

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  if (string1.toLowerCase() === string2.toLowerCase()){
    return true
  }
  else {
    return false
  }
}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, anoCarteira) {
  // implemente sua lógica aqui
  anoAtual = prompt ("Em que ano estamos?") 
  anoNascimento = prompt ("Qual o ano do seu nascimento?") 
  anoCarteira = prompt ("Quando voce tirou sua carteira?")
    let idade = anoAtual - anoNascimento
    let carteira = anoAtual - anoCarteira
    if(idade <=20 && carteira >= 5){
    return console.log(true)}
    if(idade>20 && idade <=50 && carteira >=10){
      return console.log(true)
    }
    if(idade>50 && carteira>=15){
    return console.log(true)}
    else{
      return console.log(false)
    }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  
  if (ano%400 === 0 || ano%4===0 && (ano%100 !==0)){
    return true
  }
  
  
  else {
    return false
  }
}



// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(idade,ensinoMedio,horario) {
  // implemente sua lógica aqui
  idade = prompt ("Voce tem mais de 18 anos?") === "sim"
  ensinoMedio = prompt ("voce tem ensino médio completo?") === "sim"
  horario = prompt ("Voce tem disponibilidade exclusiva durante horário do curso?") === "sim"

  if (idade && ensinoMedio && horario){
    return console.log(true)
  }
  else {
    return console.log(false)
  }
}