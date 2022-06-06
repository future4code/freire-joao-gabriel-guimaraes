```JavaScript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  quantasVezesApareceu = 0
  for(i = 0; i < arrayDeNumeros.length; i++){
    if (arrayDeNumeros[i] == numeroEscolhido){
      quantasVezesApareceu += 1
    }
  }
    if(quantasVezesApareceu > 0){
  return (`O número ${numeroEscolhido} aparece ${quantasVezesApareceu}x`)}

    else{
    return("Número não encontrado")}
  }

```
