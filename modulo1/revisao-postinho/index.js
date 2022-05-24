
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
    return `No comparador de igualdade ${a} === ${b} é ${a === b}`
}
console.log(checarIgualdade(1,1))
// c-)Faça uma função chamada "verificaSeEMaior"
const verificaSeEMaior = (num1,num2) =>{
    return `O número ${num1} é maior que ${num2}? ${num1>num2}`
}
console.log(verificaSeEMaior(321, 2156));

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

    
const cadastro = () => {
    const usuario = []
    const nomeDoUsuario = prompt("Digite seu nome de usuário")
    const anoDeNascimento = Number(prompt("Qual o ano do seu nascimento?"))
    const senhaDoUsuario = prompt("Digite sua senha")
    const nacionalidade = prompt("Qual a sua nacionalidade")
    const anoAtual = 2022
    if(anoAtual - anoDeNascimento >=18 && senhaDoUsuario.length >= 6 && nacionalidade === "brasileira") {
    usuario.push({nome: nomeDoUsuario, nascimento: anoDeNascimento, senha: senhaDoUsuario, nacionalidade: nacionalidade})

     return console.log (usuario) }
     else {
         return "Usuário não permitido"
     }
    
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
    const senhaDoUsuario = prompt("Digite sua senha")
    if (login === senhaDoUsuario){
        return "Usuário Logado"
    }
    else {
        return "Senha Inválida"
    }

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    const nome = prompt("Digite seu nome")
    const vacina = prompt ("Qual vacina você tomou?")
    const hoje = 20
     
    if (vacina === "CoronaVac"){
        tempo = 28
        const data = 20-30+tempo
            return console.log (`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}/06/2022.`)
    }

    else if (vacina === "Astrazenica" || vacina === "Pfizer"){
        tempo = 90
        data = tempo%30 + hoje
            return console.log (`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}/08/2022.`)
    }

    

}
primeiraDose()


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    let tamanho = usuarios.length
    for (let i=0; i < tamanho; i++)
        if(nomeDoUsuario == usuarios[i].nome){
            usuarios[i].imunizacao = "completa"
            }
            return console.log(usuarios)
        }
segundaDose("Carlos")

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    let tamanho = (usuarios.length)
    for (let i = 0; i< tamanho; i++){
    switch (usuarios[i].imunizacao) {
        case "incompleta":
            console.log(`Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
            
        case "completa":
            break;
    } 
    
    }
}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]



// Exercício 1 ----------------------------------------------------------------------------------------
const cadastroDesafio = () => {
    const nomeDoUsuario = prompt("Digite seu nome de usuário")
    const anoDeNascimento = Number(prompt("Qual o ano do seu nascimento?"))
    const senhaDoUsuario = prompt("Digite sua senha")
    const nacionalidade = prompt("Qual a sua nacionalidade")
    const anoAtual = 2020
    
        const pessoa =
            { nome: nomeDoUsuario,
              ano: anoDeNascimento,
              nacionalidade: nacionalidade,
              senha: senhaDoUsuario,
              }
              
            if(anoAtual - anoDeNascimento >=18 && senhaDoUsuario.length >= 6 && (nacionalidade === "brasileira" || nacionalidade === "brasileiro")){
    usuarios.push(pessoa)

    return usuarios
            }
                 else
                    {
                        return "Usuário Invalido"
                    }
}
console.log(cadastroDesafio());

// Exercício 2 ----------------------------------------------------------------------------------------
    
const loginDesafio = () => {
    const nomeDoUsuario = prompt("Digite seu nome de usuário")
    const senhaDoUsuario = prompt("Digite sua senha")
    const tamanho = usuarios.length
        for(let i = 0; i < tamanho; i++){
                if(nomeDoUsuario === usuarios[i].nome){
                    if (senhaDoUsuario === usuarios[i].senha){
                            return "Usuário Logado"
                    }
                        else {
                            return "Senha Inválida"
                        }
                }
                    
        } return "Usuário não Encontrado"
    
}
console.log(loginDesafio());

// Exercício 3 ----------------------------------------------------------------------------------------

const primeiraDoseDesafio = () => {
usuarios[3].vacina = "Pfizer"
usuarios[3].imunizacao = "incompleta"
let tempo = 90
let diaAtual = 20
let data = tempo%30 + diaAtual
return console.log (usuarios, 
    `Olá ${usuarios[3].nome}! A próxima dose da ${usuarios[3].vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}/08/2022.`)
}
primeiraDoseDesafio()

// Exercício 4 ----------------------------------------------------------------------------------------

const segundaDoseDesafio = (nomeDoUsuario) => {
    tamanho = usuarios.length
    for(let i =0; i< tamanho; i++){
        if(nomeDoUsuario === usuarios[i].nome){
            if (usuarios[i].imunizacao === "completa"){
            return "Este usuário está 100% vacinado!! Parabéns!"}
                    else {
                        usuarios[i].imunizacao = "completa"
                        return usuarios
                    }
        }}return "Usuário não encontrado"
}
console.log(segundaDoseDesafio("Bárbara"));

// Exercício 5 ----------------------------------------------------------------------------------------

const avisoAosAtrasadosDesafio = () => {
    let tamanho = usuarios.length
        for (let i = 0; i < tamanho; i++){
        switch (usuarios[i].imunizacao) {
            case "incompleta":
                console.log (`Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose da ${usuarios[i].vacina}.`)
                
            case "completa":
                break;
        } 
        
        }
}
avisoAosAtrasadosDesafio()