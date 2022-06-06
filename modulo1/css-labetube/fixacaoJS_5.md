```JavaScript

function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 nomeDosAnimais = animais.map((animal) => {
    return animal.nome
 })
return nomeDosAnimais
}
```
