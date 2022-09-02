import { connection } from "./connection"


export const getProducts =  async () => {
    try {
       const result = await connection('labecommerce_products')
        .select('*')
        return result
    } catch (error: any) {
        console.log(error.message)
    }


}