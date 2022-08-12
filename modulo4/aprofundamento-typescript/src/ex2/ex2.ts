type amostra = {
    numeros: number[],
    obterEstatistica: (numeros: number[]) => void
}
const amostraDeDados: amostra = {
    numeros: [1,2,3,4,5,6,7],
    obterEstatistica : function(numeros:number[]){
        const numerosOrdenados = numeros.sort(
            (a: number, b: number) => a - b
        )
    
        let soma: number = 0
    
        for (let num of numeros) {
            soma += num
        }
    
        const estatisticas: {maior: number, menor: number, media: number} = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
    
        return estatisticas
    }
    }



console.log(amostraDeDados.obterEstatistica(amostraDeDados.numeros))
