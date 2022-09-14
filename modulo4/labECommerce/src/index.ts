import app from './app'
import { AddressInfo } from 'net'
import { createUser } from './endpoints/createUser'
import { getAllUsers } from './endpoints/getAllUsers'
import { createProducts } from './endpoints/createProduct'
import { getAllProducts } from './endpoints/getAllProducts'
import { makePurchase } from './endpoints/makePurchase'
import { getAllUsersPurchases } from './endpoints/getAllUsersPurchases'

app.post('/users', createUser)
app.get('/users', getAllUsers)
app.post('/products', createProducts)
app.get('/products', getAllProducts)
app.post('/purchases', makePurchase)
app.get('/users/:user_id/purchases', getAllUsersPurchases)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    }
    else {
        console.log("Failure upon starting server.")
    }
})