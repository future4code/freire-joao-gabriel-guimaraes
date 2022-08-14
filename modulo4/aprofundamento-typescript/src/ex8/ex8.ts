type lets = {
    nome: string,
    preco: number,
    classificacao: string,
    precoComDesconto?: number
}
type products = [prod1:lets, prod2:lets, prod3:lets, prod4:lets]
const chama = (array:products ) => {
    const newArray = array.map((array1) => {
       if (array1.classificacao === 'verão'){
        return {...array1, precoComDesconto: array1.preco*(100-5)/100}
       }
       if (array1.classificacao === 'inverno'){
        return {...array1, precoComDesconto: array1.preco*(100-10)/100}
       }
       if (array1.classificacao === 'banho'){
        return {...array1, precoComDesconto: array1.preco*(100-4)/100}
       }
       if (array1.classificacao === 'íntimas'){
        return {...array1, precoComDesconto: array1.preco*(100-7)/100}
       }
    })
    return newArray
}

console.log(chama([{nome: 'sunga', preco: 10, classificacao: 'verão'}, {nome: 'casaco', preco: 10, classificacao: 'inverno'}, {nome: 'sabonete', preco: 10, classificacao: 'banho'}, {nome: 'cueca', preco: 10, classificacao: 'íntimas'}]))