import { connection } from "./connection"


export const insertDbPurchase =  async (user_id: string, product_id: string, quantity:number) => {
    
    const id = Date.now().toString()
    const product = await connection('labecommerce_products')
    .select('price')
    .where('id_product', 'like', `${product_id}`)
    let total_price = Number(product[0].price) * quantity
    await connection('labecommerce_purchases')
    .join('labecommerce_products', 'product_id', '=', 'labecommerce_products.id_product')
    .insert({
        id,
        user_id,
        product_id,
        quantity,
        total_price,
    })
console.log(product[0].price)
}