const pacientes: consult = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
  ]
  type consult = [{nome: string, idade: number, dataDaConsulta: string}, {nome: string, idade: number, dataDaConsulta: string}, {nome: string, idade: number, dataDaConsulta: string}, {nome: string, idade: number, dataDaConsulta: string}]

  function ordenar(post: consult){
    const ordemAlfabetica = post.sort((a,b) => {
        return a.nome.localeCompare(b.nome);
    })
    return ordemAlfabetica
  }
  
  console.log(ordenar(pacientes))