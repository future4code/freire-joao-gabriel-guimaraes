import express from 'express'
import cors from 'cors'
import { products } from './data'
const app = express()

app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log('servidor funcionando na porta 3003 [localhost:3003]')
})

//exercício 1

app.get('/test', (req, res) => {
    res.send('lets go familia!!')
})

// exercício 3

app.post('/products', (req, res) => {
    try {
        type prod = {
            id: string,
            name: string,
            price: number
        }
        const newProd: prod = {
            id: Date.now().toString(),
            name: req.body.name,
            price: req.body.price
        }
        if (!newProd.price || !newProd.name) {
            throw new Error('Faltou algum dado na requisição')
        }
        if (typeof newProd.name !== typeof '') {
            throw new Error('O tipo do dado nome deve ser, obrigatoriamente, string!!')
        }
        if (typeof newProd.price !== typeof 2) {
            throw new Error('O tipo do dado price deve ser, obrigatoriamente, number!!')
        }
        if (newProd.price <= 0) {
            throw new Error('Price não pode ser um valor negativo!!')
        }


        products.push(newProd)

        res.status(200).send(products)
    } catch (err: any) {
        switch (err.message) {
            case 'Faltou algum dado na requisição':
                res.status(422).send(err.message)
                break;
            case 'O tipo do dado nome deve ser, obrigatoriamente, string!!':
                res.status(422).send(err.message)
                break;
            case 'O tipo do dado price deve ser, obrigatoriamente, number!!':
                res.status(422).send(err.message)
                break;
            case 'Price não pode ser um valor negativo!!':
                res.status(422).send(err.message)
                break;

            default:
                res.status(500).send('Erro inesperado, consulte o manager para maiores informações')
                break;
        }
    }
})

app.get('/products', (req, res) => {
    const search = req.query.search

    const newArray = products.filter(product => {
        return product.name === search
    })
    if(search) {
        res.send(newArray)
    }
    else {
        res.send(products)
    }
})

app.put('/products', (req, res) => {
    try {
        type price = {
            id: string,
            price?: number,
            name?: string
        }
        const newPriceProduct: price = {
            id: req.body.id,
            price: req.body.price,
            name: req.body.name
        }
        if (newPriceProduct.price as number <= 0) {
            throw new Error('O valor do preço não pode ser igual ou menor que zero!')
        }
        if (!newPriceProduct.price && !newPriceProduct.name) {
            throw new Error('O valor de price ou name deve ser fornecido')
        }
        const [person] = products.filter(product => {
            return product.id === newPriceProduct.id
        })
        if (!person) {
            throw new Error('Produto não encontrado pelo id fornecido')
        }

        const newList = products
        for (let product of newList) {
            if (product.id === newPriceProduct.id) {
                if(newPriceProduct.price && newPriceProduct.name === undefined) {
                    product.price = newPriceProduct.price as number
                }
                else if(newPriceProduct.price && newPriceProduct.name){ 
                product.price = newPriceProduct.price as number
                product.name = newPriceProduct.name
            }
            else if(newPriceProduct.name && newPriceProduct.price === undefined) {
                product.name = newPriceProduct.name
            }
                
            }   
        }
        res.status(200).send(newList)
            
    }
    catch (err: any) {
        switch (err.message) {
            case 'O valor de price ou name deve ser fornecido':
                res.status(404).send(err.message)
                break;
            case 'O tipo do dado preço deve ser obrigatoriamente number!!':
                res.status(404).send(err.message)
                break;
            case 'O valor do preço não pode ser igual ou menor que zero!':
                res.status(404).send(err.message)
                break;
            case 'Produto não encontrado pelo id fornecido':
                res.status(404).send(err.message)
                break;

            default:
                res.status(500).send('Erro inesperado, consulte o manager para maiores informações')
                break;
        }
    }
})

app.delete('/products/:productId', (req, res) => {

    try {
        const productId = req.params.productId
        const [person] = products.filter(product => {
            return product.id === productId
        })
        if (!person) {
            throw new Error('Produto não encontrado pelo id fornecido')
        }

        const newArray = products.filter(product => {
            return product.id !== productId
        })
        res.status(200).send(newArray)
    }


    catch (err: any) {
        switch (err.message) {
            case 'Produto não encontrado pelo id fornecido':
                res.status(404).send(err.message)
                break;
            default:
                res.status(500).send('Erro inesperado, consulte o manager para maiores informações')
                break;
        }
    }

})
