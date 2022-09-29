

const isOdd= (num: number) => {

    if(num%2 === 0) {
        return true
    }
    else {
        return false
    }
}

const UpperCase = (string: string) => {
    return string.toUpperCase()
}

const changeToNumber = (string: string): number => {
    return Number(string)
}
const caracterNumber = (string: string): number => {
    return string.length
}
const stringToArray = (string: string): string[] => {
    return string.split('')
}

const age = (num: number): number => {
    const currentYear = new Date().getFullYear()
    return currentYear - num
}

const date = (string: string) => {
    const date = string.split('/')
    const newString = `${date[2]}/${date[1]}/${date[0]}`
    return newString
}

const randomNumber = () => {
    const min = 1
    const max = 10
	const result = Math.floor(Math.random() * (max - min + 1)) + min

	return result
}

const average = () => {
    const array = [1,2,3,4,5]
    let total = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0)
    let average = ( total / array.length)
    return Math.ceil(average)
}

const array = ['joao', 'pedro', 'thiago', 'no', 'barquinho', 'astrodev']


describe(("fazendo testes com JEST"), () => {

    test('O numero inserido é par?', () => {
        
        expect(isOdd(10)).toBe(true)
    })

    test("testando upper caser", () => {
        const string = 'banana'
        expect(UpperCase(string)).toBe(string.toUpperCase())
    })

    test ("Verificar se existe astrodev no array",()=>{
        const arrayDePessoas = array
                
                expect(arrayDePessoas).toContain("astrodev")
    })
    test ("refatorando datas",()=>{
                
                expect(date('1999/01/29')).toBe("29/01/1999")
    })
    test ("número aleatório",()=>{
                
               
    })
    
})






























// describe("Olá, estamos testando",()=>{

//     test("O número 100 deve ser maior que 99", ()=>{

//         expect(100).toBeGreaterThan(99)

//     })

//     test("Testando se o valor é menor", ()=>{
//         const n = 100
//         expect(n).toBeLessThan(101)

//     })
//     test("Apenas testando o ambiente", ()=>{

//         expect(100).toBeGreaterThan(99)

//     })

//     test("Testando se o valor é menor", ()=>{
//         const n = 100
//         expect(n).toBeLessThan(101)

//     })

//     //toBe
//     test("10 multiplicado por 2 deve ser 20",()=>{
//         const n = getNum()
//         expect(n).toBe(20)

//     })
//     //
//     test ("Verificar se existe um gato no array",()=>{
//         const arrayDebichos = getAnimals()
        
//         expect(arrayDebichos).toContain("Cachorro caramelo")

//     })

//     test("Verificando a task no array de tasks",()=>{

//         const task:ITask = {
//             id:"2",
//             name:"Estudar jest"
//         }
//         expect(tasks).toContainEqual(task)


//     })

//     test("Verificando se número é par",()=>{

//         expect(isEven(10)).toBe(true)

//     })


// })

// interface ITask {
//     id: string,
//     name: string
// }

// const tasks: ITask[] =[
//     {
//         id:"1",
//         name:"Fazer o rango"

//     },
//     {
//         id:"2",
//         name: "Estudar jest"
//     }
// ]

// const isEven=(integer: number)=>{
//    return integer%2==0
// }



// const getAnimals =()=>{
//     return (["Pato","Cachorro caramelo","Gato"])
// }

// const getNum=()=>{
//     return 20
// }