import { connection } from "./connection"


export const insertDbProducts =  async (name: string, price: string, image_url:string) => {
    
    const id_product = Date.now().toString()
    await connection('labecommerce_products')
    .insert({
        id_product,
        name,
        price,
        image_url
    })

}